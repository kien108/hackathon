const Population = require('./population.model');

function checkStop(population) {
	return population.getFitnesses().some(value => value === 10000);
}

module.exports = {
	generateSchedule(data, numberOfClass, time) {
		let population = new Population(data, numberOfClass, time);
		population.init();
		while (!checkStop) {
			population = population.selectionAndCrossover();
			population.mutation();
		}
		let p = population.getFitnesses().findIndex(value => value === 10000);
		return population[p];
	}
}