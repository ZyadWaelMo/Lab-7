// TODO: Question 1

class Shape {

    calculateArea() {
        throw new Error(`Area must be implemented by certain shape`)
    }

    static compareAreas(shape1, shape2) {
        const area1 = shape1.calculateArea()
        const area2 = shape2.calculateArea()
        if (area1 > area2) {
            return `${shape1.constructor.name} (Area = ${area1}) has larger area than ${shape2.constructor.name} (Area = ${area2})`
        } else if (area1 < area2) {
            return `${shape2.constructor.name} (Area = ${area2}) has larger area than ${shape1.constructor.name} (Area = ${area1})`
        } else if (area1 == area2) {
            return `The 2 shapes have the same area ${shape1.constructor.name} (Area = ${area1}) ${shape2.constructor.name} (Area = ${area2})`
        }
    }


}
class Rectangle extends Shape {
    constructor(length, width) {
        super()
        this.length = length
        this.width = width
    }
    calculateArea(){
        return this.length * this.width
    }

}
class Circle extends Shape {
    constructor(radius){
        super()
        this.radius = radius
    }
    calculateArea(){
        return Math.PI * this.radius * this.radius
    }
}


const rectangle = new Rectangle(5,8)
const circle = new Circle(2)

console.log('Rectangle', rectangle.calculateArea())
console.log('Circle', circle.calculateArea())

console.log('Comparison: ', Shape.compareAreas(rectangle, circle))

















