//console.log('hello')

let firstName: string = "Adi"
let age: number = 40
let good: boolean = true

//firstName = 4 not valid

let fruits: string[] = [
    'banana',
    'apple'
]
console.log(`
First Name: ${firstName}
Your Age: ${age}
You have many ${fruits}
`)

enum taxForm {
    standard = '1040',
    childCredit = '1065',
    sCorp = '1121',
    cCorp = '1120s'
}

console.log(`
you need form ${taxForm.childCredit}
`)

// let fruits: string[] = [
//     'banana',
//     'apple'
// ]

// function getFruit(index: number): string {
//     return fruits[index]
// }
// function debug(message: any): void {
//     //console.log(message)
//     //no return here
// }
// debug()

//console.log(`you choose an ${getFruit(0)}`)

interface teacher {
    name: string,
    years: number,
    subject: string[],
    age: number
}

let damian: teacher = {
    name: "damian",
    years: 20,
    subject: ["javascript", "typescript"],
    age: 40
}
console.log(damian)