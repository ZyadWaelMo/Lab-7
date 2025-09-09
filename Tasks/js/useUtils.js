import Utils from "./utils.js"

const utils = new Utils()

let obj1 = {
    name: "Zyad",
    age: 24
}
let obj2 = {
    city: "Cairo",
    number: 20
}

let obj = {
    message: "Hello DEPI",
    number: 100
}
let cloned = {
    message: "Different Hello DEPI",
    number: 999
}


const result1 = utils.mergeObjects(obj1, obj2)
const result2 = utils.cloneObject(obj, cloned)



console.log('Result 1 :>> ', result1)
console.log('Result 2 :>> ', result2)
