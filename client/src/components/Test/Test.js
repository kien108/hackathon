import React from "react";
import "./test.scss";
import { useEffect, useState } from "react";

let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

const Test = () => {
   const [timeStart, setTimeStart] = useState(null);
   const [timeEnd, setTimeEnd] = useState(null);
   const [isMouseDown, setIsMouseDown] = useState(false);
   const [isHighlighted, setIsHighlighted] = useState(false);
   const [currentCol, setCurrentCol] = useState(null);
   const [schedual, setSchedual] = useState([]);

   const getLessons = (col) => {
      return col;
   };

   useEffect(() => {
      const listCol = $$("#our_table td");
      listCol.forEach((col) => {
         col.onmousedown = () => {
            setIsMouseDown(true);
            setTimeStart(col.getAttribute("data-row"));
            setCurrentCol(col.getAttribute("data-col"));
            col.classList.toggle("highlighted");
            setIsHighlighted(true);
         };

         col.onmouseover = () => {
            if (isMouseDown) {
               if (currentCol === col.getAttribute("data-col")) {
                  col.classList.toggle("highlighted", isHighlighted);
               }
            }
         };

         col.onmouseup = () => {
            setIsMouseDown(false);
            const newLessons = {
               day: currentCol,
               lessons: `${timeStart} - ${col.getAttribute("data-row")}`,
            };
            setSchedual([...schedual, newLessons]);
         };
      });
   });
   return (
      <>
         <table cellPadding="0" cellSpacing="0" id="our_table">
            <tbody>
               <tr>
                  <td data-row="1" data-col="1">
                     a
                  </td>
                  <td data-row="1" data-col="2">
                     b
                  </td>
                  <td data-row="1" data-col="3">
                     c
                  </td>
               </tr>
               <tr>
                  <td data-row="2" data-col="1">
                     d
                  </td>
                  <td data-row="2" data-col="2">
                     e
                  </td>
                  <td data-row="2" data-col="3">
                     f
                  </td>
               </tr>
               <tr>
                  <td data-row="3" data-col="1">
                     g
                  </td>
                  <td data-row="3" data-col="2">
                     h
                  </td>
                  <td data-row="3" data-col="3">
                     i
                  </td>
               </tr>
            </tbody>
         </table>
      </>
   );
};

export default Test;
