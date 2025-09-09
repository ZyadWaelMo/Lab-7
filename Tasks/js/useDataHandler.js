import DataHandler from "./dataHandler.js"

const dataHelper = new DataHandler()


const fetchedData = dataHelper.fetchData("Database")
const savedData = dataHelper.saveData("Zyad", "DEPI")


console.log('Fetched Data: ', fetchedData)
console.log('Saved Data: ', savedData)
