function multiplyer(...args: (string | number | undefined)[]): Number {
    let res = 1;
    args.map(arg => {

        if (arg) {
            res *= Number(arg)
        }

    })
    return res;
}
console.log(multiplyer('3', 5, '10'))
console.log(multiplyer('2', '2'))
console.log(multiplyer(undefined, 2, 3))
console.log(multiplyer(7, undefined, '2'))
console.log(multiplyer())