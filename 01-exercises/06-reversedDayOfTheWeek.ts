function printIndexOfDayOfTheWeek(input: string): void {
    enum Day {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    const print = Day[`${input as keyof typeof Day}`] || 'error'
    console.log(print);

}
printIndexOfDayOfTheWeek('Monday')
printIndexOfDayOfTheWeek('Friday')
printIndexOfDayOfTheWeek('Invalid')