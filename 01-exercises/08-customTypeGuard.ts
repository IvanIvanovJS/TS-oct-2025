function NonEmptyArrayGuard(param: unknown): param is string[] {
    if (param && Array.isArray(param) && param.length > 0 && param.every(el => typeof el == 'string')) {
        return true
    }
    return false
}

console.log(NonEmptyArrayGuard({}))
console.log(NonEmptyArrayGuard({ test: 'one' }))
console.log(NonEmptyArrayGuard([]))
console.log(NonEmptyArrayGuard(undefined))
console.log(NonEmptyArrayGuard(null))
console.log(NonEmptyArrayGuard([12, 13]))
console.log(NonEmptyArrayGuard(['test', 123]))
console.log(NonEmptyArrayGuard(['a', 'b', 'c']))