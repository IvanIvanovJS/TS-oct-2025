function dayOfTheWeek(num: number): string {
    enum Day {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    const print = Day[num] || 'error'
    return print
}

console.log(dayOfTheWeek(1));
console.log(dayOfTheWeek(5));
console.log(dayOfTheWeek(-1));
