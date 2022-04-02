const csv = require("csv-parser");
const fs = require("fs");

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
               console.log(dataFromCsv);
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
         console.log(convertedTime);

         res.status(200).json({ status: "OK", message: "Successful" });
      } catch (err) {
         console.log(err.message);
         res.status(500).json({ status: "Error", message: "Error at server" });
      }
   },
};
