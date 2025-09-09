import Employee from "./employee.js"

const emp = new Employee()

let employee = {
    name:"Zyad",
    position: "Junior"
}

let result = emp.showDetails(employee)

console.log('Employee Result :>> ', result);

