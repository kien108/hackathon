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

const port = 8081;
const host = 'localhost';
app.listen(port, host, () => {
   console.log(`Server is listening at http://${host}:${port}/api`);
});

// const Population = require('./coreGenericAlgorithm/population.model');

// let data = {
//    'Toan': {
//       soTiet: 2,
//       giaoVien: ['Vinh', 'Nam'],
//    },
//    'Van': {
//       soTiet: 2,
//       giaoVien: ['Kien', 'Tuan'],
//    }
// };
// let numberOfClass = 2;
// let time = [
//    {day: 'mon', order: 1},
//    {day: 'mon', order: 2},
//    {day: 'tue', order: 1},
//    {day: 'tue', order: 2},
// ];

// let population = new Population(data, numberOfClass, time);
// population.init();
// // console.log(population.chromosomes);

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//    let newp = population.selectionAndCrossover();
//    let result = {
//       oldFitness: population.getFitnesses(),
//       newFitness: newp.getFitnesses(),
//       // old: population.chromosomes,
//       // new: population.selectionAndCrossover()
//    };
//    res.json(result);
// });

// app.listen(4040, () => console.log("http://localhost:4040"));