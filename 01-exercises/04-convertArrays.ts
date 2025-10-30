function arrayConverter(arr: string[]): [string, number] {
    const text = arr.join('')
    const textLength = text.length;
    return [text, textLength]
}

console.log(arrayConverter(['How', 'are', 'you?']));
console.log(arrayConverter(['Today', ' is', ' a ', 'nice', ' ', 'day for ', 'TypeScript']));
