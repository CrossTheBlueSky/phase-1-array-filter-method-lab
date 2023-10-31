// Code your solution here

function findMatching(drivers, name){
    const foundMatches = drivers.filter((e)=>e.toUpperCase() === name.toUpperCase())
    return foundMatches
}

function fuzzyMatch(drivers, name){
    const foundMatches = drivers.filter((e)=> e.slice(0, name.length) === name)
    return foundMatches
}

function matchName(drivers, name){
    return drivers.filter((e)=> e.name === name)
}