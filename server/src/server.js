const express = require('express');
const app = express();

const morgan = require('morgan');
const route = require('./routes');
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('tiny'));

route(app);
// app.get('/', (req, res) => {
//    const GA = require('./coreGenericAlgorithm');
//    const data = {
//       'Toan': {
//          soTietMonHoc: 4,
//          giaoVien: ['Vinh', 'Nam']
//       },
//       'Van': {
//          soTietMonHoc: 4,
//          giaoVien: ['Kien', 'Tuan']
//       }
//    };
//    const time = [
//       { day: 'mon', order: 1 },
//       { day: 'mon', order: 2 },
//       { day: 'mon', order: 3 },
//       { day: 'mon', order: 4 },
//       { day: 'tue', order: 1 },
//       { day: 'tue', order: 2 },
//       { day: 'tue', order: 3 },
//       { day: 'tue', order: 4 },
//    ]
//    // let schedule = GA.generateSchedule(dataFromCsv, 1, convertedTime);
//    let schedule = GA.generateSchedule(data, 1, time);
//    res.json({
//       status: 'success',
//       schedule
//    });
// });



const port = 8081;
const host = 'localhost';
app.listen(port, host, () => {
   console.log(`Server is listening at http://${host}:${port}/api`);
});