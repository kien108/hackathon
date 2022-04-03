const csv = require("csv-parser");
const fs = require("fs");
const GA = require("../coreGenericAlgorithm");
const results = [];

module.exports = {
   // [POST] /api/request
   request(req, res) {
      try {
         let dataFromCsv = {};
         // lấy dữ liệu từ csv
         fs.createReadStream("./uploads/file.csv")
            .pipe(csv())
            .on("data", (data) => results.push(data))
            .on("end", () => {
               // chuyển đổi csv thành object có key là môn học
               results.forEach((result) => {
                  let firstField = Object.keys(result)[0];
                  let monHoc = result[firstField];

                  dataFromCsv[monHoc] = {
                     soTietMonHoc: result.soTietMonHoc,
                     giaoVien: result.giaoVien
                        .split(",")
                        .map((gv) => gv.trim()),
                  };
               });
               // xoá file csv
               fs.unlinkSync("./uploads/file.csv");
            });

         // lấy time và chuyển đổi theo ý Vinh
         let times = JSON.parse(req.body.time);
         let convertedTime = [];

         times.forEach((time) => {
            let range = time.lessons.split("-");
            let start = parseInt(range[0]);
            let end = parseInt(range[1]);
            for (let i = start; i <= end; i++) {
               let tempObj = {};
               tempObj["day"] = time["day"];
               tempObj["order"] = i;
               convertedTime.push(tempObj);
            }
         });
         
         const data = {
            'Toan': {
               soTietMonHoc: 4,
               giaoVien: ['Vinh', 'Nam']
            },
            'Van': {
               soTietMonHoc: 4,
               giaoVien: ['Kien', 'Tuan']
            }
         };
         const time = [
            { day: 'mon', order: 1 },
            { day: 'mon', order: 2 },
            { day: 'mon', order: 3 },
            { day: 'mon', order: 4 },
            { day: 'tue', order: 1 },
            { day: 'tue', order: 2 },
            { day: 'tue', order: 3 },
            { day: 'tue', order: 4 },
         ]
         // let schedule = GA.generateSchedule(dataFromCsv, 1, convertedTime);
         let schedule = GA.generateSchedule(data, 1, time);
         res.json(schedule);
         // convert theo y Kien

         let result = {
            classroom: 0,
            schedule: ['mon', 'tue', 'web', 'thu', 'fri', 'sat'].map(day => {
               return {
                  day, 
                  subjects: schedule.filter(lesson => {
                     return {
                        name: lesson.subject,
                        teacher: lesson.teacher, 
                        start: lesson.order,
                        end: lesson.order,
                     };
                  })
               };
            })
         };
         res.status(200).json(result);

         // res.status(200).json({ status: "OK", message: "Successful" });
      } catch (err) {
         console.log(err.message);
         res.status(500).json({ status: "Error", message: "Error at server" });
      }
   },
};
