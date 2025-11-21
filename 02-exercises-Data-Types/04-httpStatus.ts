interface Input {
    code: number, text: string, printChars?: number
}

function printStatus(input: Input) {
    if (input.printChars) {
        console.log(input.text.slice(0, input.printChars))
    } else {
        console.log(input.text);
    }

}
printStatus({ code: 200, text: 'OK' })
printStatus({ code: 201, text: 'Created' })
printStatus({ code: 400, text: 'Bad Request', printChars: 4 })
printStatus({ code: 404, text: 'Not Found' })
printStatus({ code: 404, text: 'Not Found', printChars: 3 })
printStatus({ code: 500, text: 'Internal Server Error', printChars: 1 })