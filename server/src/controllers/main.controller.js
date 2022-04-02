const csv = require("csv-parser");
const fs = require("fs");

const results = [];


module.exports = {
  // [POST] /api/request
  request(req, res) {
    try {
        // lấy dữ liệu từ csv
        fs.createReadStream("./uploads/file.csv")
        .pipe(csv())
        .on("data", (data) => results.push(data))
        .on("end", () => {
            let data = {};
            console.log(results);
            // chuyển đổi csv thành object có key là môn học
            results.forEach(result => {
                let firstField = Object.keys(result)[0];
                let monHoc = result[firstField];

                data[monHoc] = {
                    "soTietMonHoc": result.soTietMonHoc,
                    "giaoVien": result.giaoVien.split(',').map(gv => gv.trim())
                };
            });

            // xoá file csv
            fs.unlinkSync("./uploads/file.csv");
        });

        // lấy time và chuyển đổi theo ý Vinh
        let time = req.body.key;
        console.log('time:' + time);
        
        
        
        res.status(200).json({ status: "OK", message: "Successful" });
    }catch(err) {
        console.log(err.message);
        res.status(500).json({ status: "Error", message: "Error at server" });
    }

    
    
  },
};
