function printString(param: unknown): string {
    if (param && typeof param === 'object' && 'value' in param && typeof param.value === 'string') {
        return param.value
    }
    return '-'

}
console.log(printString({ code: 200, text: 'Ok', value: [1, 2, 3] }));
console.log(printString({ code: 301, text: 'Moved Permanently', value: 'New Url' }));
console.log(printString({ code: 201, text: 'Created', value: { name: 'Test', age: 20 } }));
console.log(printString({ code: 201, text: 'Created', value: 'Object Created' }));
console.log(printString({ code: 404, text: 'Not found' }));
console.log(printString({ code: 500, text: 'Internal Server Error' }));
