function evenSum(numA: number, nubB: number, numC: number): boolean {
    const sum = numA + nubB + numC;
    return sum % 2 === 0
}

console.log(evenSum(1, 2, 3));
console.log(evenSum(2, 2, 3));
