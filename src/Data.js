import React from 'react'

const name = "Khaleo Hansana"
const favoriteColor = "blue"
const age = 19
const isFunny = true
const car = "skyling-gtr"
const dope = "ill ass mufucka"

export default  {
    favoriteColor,
    name,
    age,
    isFunny,
    car,
    dope

}

const doWork = (number) => {
    console.log("doWork: " + number)
    return 42 + number
}

const doMoreWork = (number) => {
    console.log("doMoreWork: " + number)
    return 93 - number
}

const doHellaWork = (number) => {
    console.log("doHellaWork: " + number)
    return 20 * number
}

const a = doWork(4) + doMoreWork(7) * doHellaWork(3)

export const SupDawg = (props) => {
    return <div>{props.specialMessage}</div>
}

console.log(doHellaWork(2))
console.log(doWork(10))
console.log(doMoreWork(3))
console.log(a)
console.log(isFunny ? doWork(2) : doMoreWork(45))
console.log(favoriteColor, name, age, isFunny, car, dope)



