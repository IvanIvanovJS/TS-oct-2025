function printFormatedName(input: [string, number]): string {

    return `Hello, my name is ${input[0]} and my age is ${input[1]}`
}

console.log(printFormatedName(['Ivan', 20]));
console.log(printFormatedName(['Joro', 30]));
// console.log(printFormatedName(['Ivan', 20, 'Ivanov']));
// console.log(printFormatedName(['Joro', '25']));
// console.log(printFormatedName([]));
