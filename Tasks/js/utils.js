export default class Utils{

mergeObjects(obj1, obj2){
    const merged = {...obj1, ...obj2}
    return `Object 1: ${JSON.stringify(obj1)} 
    Object 2: ${JSON.stringify(obj2)}
    Merged Objects: ${JSON.stringify(merged)}`
}

cloneObject(obj, clonedObject){
    const temp = clonedObject
    clonedObject = obj
    return `Object 1: ${JSON.stringify(obj)} 
    Object 2: ${JSON.stringify(temp)}
    Cloned Object: ${JSON.stringify(clonedObject)}`
}


}


