
const controller = require("../controllers/main.controller");
const path = require("path");
const multer = require("multer");
const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, "./uploads");
   },
   filename: function (req, file, cb) {
      cb(null, file.fieldname + path.extname(file.originalname));
   },
});

const upload = multer({ storage: storage });

module.exports = (app) => {
   app.post("/api/request", upload.single("file"), controller.request);
};
