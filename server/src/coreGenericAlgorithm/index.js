const Population = require('./population.model');

function checkStop(population) {
	return population.getFitnesses().some(value => value === 10000);
}

module.exports = {
	generateSchedule(data, numberOfClass, time) {
		let population = new Population(data, numberOfClass, time);
		population.init();
		let i = 0;
		while (!checkStop(population) && i < 100000) {
			population = population.selectionAndCrossover();
			console.log(population.getFitnesses());
			population.mutation();
			i++;
		}
		let p = population.getFitnesses().findIndex(value => value === 10000);

		return population.at(p);
	}
}