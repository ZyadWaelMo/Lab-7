export default class DataHandler {


fetchData(data){
    console.log('Fetching...')
    return `Successful fetching ${data}`
}
saveData(name, data){
    console.log('Saving...')
    return `Successful Saving: ${name} , ${data}`
}

}




