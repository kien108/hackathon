import React from "react";
import "./calendar.scss";
import { useState, useEffect } from "react";

let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

const Calendar = () => {
   const lessons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   const [timeStart, setTimeStart] = useState(null);
   const [isMouseDown, setIsMouseDown] = useState(false);
   const [isHighlighted, setIsHighlighted] = useState(false);
   const [currentCol, setCurrentCol] = useState(null);
   const [schedual, setSchedual] = useState([]);

   useEffect(() => {
      const listCol = $$(".content .cell");

      listCol.forEach((col) => {
         col.onmousedown = () => {
            setIsMouseDown(true);
            setTimeStart(col.getAttribute("data-row"));
            setCurrentCol(col.getAttribute("data-col"));
            col.classList.toggle("cell--active");
            setIsHighlighted(true);
         };

         col.onmouseover = () => {
            if (isMouseDown) {
               if (currentCol === col.getAttribute("data-col")) {
                  col.classList.toggle("cell--active", isHighlighted);
               }
            }
         };

         col.onmouseup = () => {
            setIsMouseDown(false);
            const newLessons = {
               day: currentCol,
               lessons: `${timeStart}-${col.getAttribute("data-row")}`,
            };
            setSchedual([...schedual, newLessons]);
         };
      });
   });

   console.log(schedual);
   return (
      <>
         <div className="content-container">
            <div className="title">
               <h3>Schedule Title</h3>
               <p>Hackathon 2022</p>
               <span></span>
            </div>
            <div className="action">
               <span>No chosen file</span>
               <label class="btn-import" htmlFor="import">
                  Import *.csv
               </label>
               <input
                  type="file"
                  name="import"
                  id="import"
                  style={{ display: "none" }}
               />
               <input type="button" name="export" value="Export *.csv" />
            </div>
            <div className="timetable">
               <div className="week-names">
                  <div>Monday</div>
                  <div>Tuesday</div>
                  <div>Wednesday</div>
                  <div>Thursday</div>
                  <div>Friday</div>
                  <div>Saturday</div>
               </div>

               <div className="time-interval">
                  {lessons?.length > 0 &&
                     lessons.map((lesson, index) => (
                        <div
                           style={{
                              background: `${
                                 index % 2 === 0 ? "#f6f6f6" : "#fff"
                              }`,
                           }}
                           key={lesson}
                        >
                           Lesson {lesson}
                        </div>
                     ))}
               </div>

               <div className="content">
                  {lessons?.length > 0 &&
                     lessons.map((lesson, index) => (
                        <>
                           <div
                              className={`cell ${
                                 index % 2 === 0
                                    ? "row-color-odd"
                                    : "row-color-even"
                              }`}
                              data-row={index + 1}
                              data-col="mon"
                           ></div>
                           <div
                              className={`cell ${
                                 index % 2 === 0
                                    ? "row-color-odd"
                                    : "row-color-even"
                              }`}
                              data-row={index + 1}
                              data-col="tus"
                           ></div>
                           <div
                              className={`cell ${
                                 index % 2 === 0
                                    ? "row-color-odd"
                                    : "row-color-even"
                              }`}
                              data-row={index + 1}
                              data-col="wed"
                           ></div>
                           <div
                              className={`cell ${
                                 index % 2 === 0
                                    ? "row-color-odd"
                                    : "row-color-even"
                              }`}
                              data-row={index + 1}
                              data-col="thus"
                           ></div>
                           <div
                              className={`cell ${
                                 index % 2 === 0
                                    ? "row-color-odd"
                                    : "row-color-even"
                              }`}
                              data-row={index + 1}
                              data-col="pri"
                           ></div>
                           <div
                              className={`cell ${
                                 index % 2 === 0
                                    ? "row-color-odd"
                                    : "row-color-even"
                              }`}
                              data-row={index + 1}
                              data-col="sat"
                           ></div>
                        </>
                     ))}
               </div>
            </div>
         </div>
      </>
   );
};

export default Calendar;
