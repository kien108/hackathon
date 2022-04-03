const Gene = require('./gene.model')
const Chromosome = require('./chromosome.model')
const NUMBER_OF_CHROMOSOME = 6;

class Population {
	constructor(data, numberOfClass, time) {
		this.chromosomes = [];
		this.subjects = Object.keys(data);
		this.subjectData = data;
		this.numberOfClass = numberOfClass;
		this.time = time;
		this.fitness = [];
	}
	at(index) {
		return this.chromosomes[index];
	}
	add(chromosome) {
		if (chromosome instanceof Chromosome)
			this.chromosomes.push(chromosome);
		else 
			throw new Error("Chromosome error");
	}
	init() {
		let totalLessonInWeek = Object.values(this.subjectData).reduce((pre, cur) => pre + cur.soTiet, 0);

		for (let iChromosome = 0; iChromosome < NUMBER_OF_CHROMOSOME; iChromosome++) {
			let chromosome = new Chromosome();
			let subjectWithSingleTeacher = this.#randomTeacherEachSubject();
			for (let indexClass = 0; indexClass < this.numberOfClass; indexClass++)
				for (let i = 0; i < totalLessonInWeek; i++) {
					let { day, order } = this.time[i];
					let rand = this.#random(this.subjects.length);
					let subject = this.subjects[rand];
					let teacher = subjectWithSingleTeacher[subject];
					chromosome.add(new Gene(indexClass, day, order, subject, teacher));
				}
			this.chromosomes.push(chromosome);
		}
	}
	getFitnesses() {
		return this.chromosomes.map(chromosome => chromosome.fitness(this.numberOfClass, this.subjectData));
	}
	selectionAndCrossover() {
		let fitnesses = this.getFitnesses();
		let sumFitness = fitnesses.reduce((pre, cur) => pre + cur, 0);
		let newPopulation = [];
		for (let i = 0; i < NUMBER_OF_CHROMOSOME / 2; i++) {
			let parent = [
				this.#chooseParent(fitnesses, sumFitness),
				this.#chooseParent(fitnesses, sumFitness)
			];
			for (let j = 0; j < parent[0].genes.length; j++) {
				if (Math.random() >= 0.5)
					parent[0].genes[j].swap(parent[1].genes[j]);
			}
			newPopulation.push(...parent);
		}
		let result = new Population(this.subjectData, this.numberOfClass, this.time);
		result.chromosomes = newPopulation;
		return result;
	}
	mutation() {
		let ratio = 0.1;
		for (let chromosome of this.chromosomes)
			for (let gene of chromosome.genes) {
				if (Math.random() > ratio)
					continue;
				
				let rand = this.#random(this.subjects.length);
				let subject = this.subjects[rand];

				let teacher = chromosome.find(value => value.subject === subject)?.teacher;
				if (!teacher) {
					rand = this.#random(this.subjectData[subject].giaoVien.length);
					teacher = this.subjectData[subject].giaoVien[rand];
				}
				gene.subject = subject;
				gene.teacher = teacher;
			}
	}
	// Private methods
	#randomTeacherEachSubject() {
		let temp = {};
		for (let subject in this.subjectData) {
			let rand = this.#random(this.subjectData[subject].giaoVien.length);
			temp[subject] = this.subjectData[subject].giaoVien[rand];
		}
		return temp;
	}
	#random(max) {
		return Math.floor(Math.random() * max);
	}
	#chooseParent(fitnesses, sum) {
		let rand = this.#random(sum);
		for (let i = 0; i < fitnesses.length; i++) {
			rand -= fitnesses[i];
			if (rand < 0)
				return (new Chromosome()).clone(this.chromosomes[i]);
		}
		console.log('No selection!');
	}
}

module.exports = Population;