// TODO: Question 2

const Person = function (name, age) {
    this.name = name
    this.age = age
    
}

Person.prototype.introduce = function () {
    return `My name is ${this.name} & I have ${this.age} years old`
}

Person.compareScores = function (person1, person2) {

    const person1Score = person1.calculateScore()
    const person2Score = person2.calculateScore()
    if (person1Score > person2Score) {
        return `${person1.name} (score = ${person1Score}) has larger score than ${person2.name} (score = ${person2Score})`
    } else if (person1Score < person2Score) {
        return `${person2.name} (score = ${person2Score}) has larger score than ${person1.name} (score = ${person1Score})`
    } else if (person1Score == person2Score) {
        return `The 2 shapes have the same score ${person1.name} (score = ${person1Score}) ${person2.name} (score = ${person2Score})`
    }

}

const Teacher = function (name, age, score, subject) {
    Person.call(this, name, age)
    this.score = score
    this.subject = subject
}

Teacher.prototype = Object.create(Person.prototype)
Teacher.prototype.constructor = Teacher

Teacher.prototype.calculateScore = function () {
    return this.score
}

const Student = function (name, age, score, stage) {
    Person.call(this, name, age)
    this.score = score
    this.stage = stage
}

Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student

Student.prototype.calculateScore = function (){
    return this.score
}



const Zyad = new Teacher("Zyad", 24, 100, "OOP")
const Bassem = new Student("Bassem", 20, 10, "Money")

console.log('Teacher Introduce:>> ', Zyad.introduce());
console.log('Student Introduce :>> ', Bassem.introduce());




console.log('Teacher :>> ', Person.compareScores(Zyad, Bassem));












