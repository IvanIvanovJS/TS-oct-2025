function summarizeInfo(
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    middleName?: string,
    hobbiesList?: string[],
    workInfo?: [string, number]
): [number, string, number, string, string] {
    const fullName = middleName ? `${firstName} ${middleName} ${lastName}`
        : `${firstName} ${lastName}`;

    const hobbies = hobbiesList && hobbiesList.length > 0 ? hobbiesList.join(', ') : '-';

    const positionAndSalary = workInfo ? `${workInfo[0]} -> ${workInfo[1]}` : '-';

    return [id, fullName, age, hobbies, positionAndSalary]
}

console.log(summarizeInfo(12, 'Eliot', 'Des', 20, 'Braylen', ['tennis', 'football', 'hiking'], ['Sales Consultant', 2500]));
console.log(summarizeInfo(20, 'Mary', 'Trent', 25, undefined, ['fitness', 'rowing']));
console.log(summarizeInfo(21, 'Joseph', 'Angler', 28));
console.log(summarizeInfo(21, 'Kristine', 'Neva', 23, ''));
