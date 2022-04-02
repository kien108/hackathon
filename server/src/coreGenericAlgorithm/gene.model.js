class Gene {
    constructor(_class, day, time, subject, teacher){
        this.class = _class;
        this.day = day;
        this.time = time;
        this.subject = subject;
        this.teacher = teacher;
    }
    swap(gene) {
        [this.class, gene.class] = [gene.class, this.class];
        [this.day, gene.day] = [gene.day, this.day];
        [this.time, gene.time] = [gene.time, this.time];
        [this.subject, gene.subject] = [gene.subject, this.subject];
        [this.teacher, gene.teacher] = [gene.teacher, this.teacher];
    }
    
};

module.exports = Gene;