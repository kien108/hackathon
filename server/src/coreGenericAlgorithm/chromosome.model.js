const Gene = require('./gene.model');

class Chromosome {
    constructor() {
        this.genes = [];
    }
    clone(chromosome) {
        this.genes = [ ...chromosome.genes ];
        return this;
    }
    add(gene) {
        if (gene instanceof Gene)
            this.genes.push(gene);
        else 
            throw new Error('Gene error');
    }
	fitness(numberOfClass, subjectData) {
		let score = 10000;
        let classes = Array.from(Array(numberOfClass).keys()).map(iClass => {
            return this.genes.filter(value => value.class === iClass);
        });

        for (let i = 0; i < numberOfClass; i++) {
            for (let subject in subjectData) {
                // Du so luong tiet moi mon
                let countLesson = classes[i].filter(lesson => lesson.subject === subject);
                if (countLesson.length !== subjectData[subject].soTiet)
                    score -= 500;
                // Giao vien day so lop deu nhau
                let nClassOfTeacher = numberOfClass / subjectData[subject].giaoVien.length;
                let isEqual = false;
                if (nClassOfTeacher === Math.floor(nClassOfTeacher))
                    isEqual = true;

                subjectData[subject].giaoVien.forEach(gv => {
                    let count = classes.filter(_class => _class.some(lesson => {
                        return lesson.subject === subject && lesson.teacher === gv;
                    }));
                    if (isEqual) {
                        if (count !== nClassOfTeacher)
                            score -= 100;
                    }
                    else {
                        if (count === Math.floor(nClassOfTeacher) || count === Math.ceil(nClassTeacher))
                            score -= 100;
                    }

                })
            }
        }

        let numberOfLesson = this.genes.length / numberOfClass;
        for (let i = 0; i < numberOfLesson; i++) {
            let lessonsAtSameTime = classes.map(_class => _class[i]);
            if (this.#checkSameTeacher(lessonsAtSameTime))
                score -= 100;
        }
        return score;
	}


    // Private methods
    #checkSameTeacher(lessons) {
        for (let i = 0; i < lessons.length - 1; i++) {
            for (let j = i + 1; j < lessons.length; j++) {
                if (lessons[i].teacher === lessons[j].teacher && lessons[i].subject === lessons[j].subject)
                    return true;
            }
        }
        return false;
    }
}

module.exports = Chromosome;