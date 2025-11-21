type User = {
    id: number | string,
    username: string,
    passwordHash: string | string[],
    status: 'Locked' | 'Unlocked' | 'Deleted',
    email?: string
}

function validateUser(user: User): boolean {
    let isValid: boolean = false;
    if ((typeof user.id === "number" && user.id > 100)
        || (typeof user.id === "string" && user.id.length === 14)) {
        isValid = true;
    } else {
        return false
    }
    if (user.username.length >= 5 && user.username.length <= 10) {
        isValid = true
    } else {
        return false
    }
    if ((typeof user.passwordHash === 'string' && user.passwordHash.length === 20) ||
        Array.isArray(user.passwordHash) && user.passwordHash.length === 4) {
        if (typeof user.passwordHash !== 'string') {
            for (const element of user.passwordHash) {
                if (element.length === 8) {
                    isValid = true
                } else {
                    return false
                }
            }
        }
        isValid = true;
    } else {
        return false
    }

    if (user.status !== 'Deleted') {
        isValid = true
    } else {
        return false
    }
    return isValid;

}

console.log(validateUser({ id: 120, username: 'testing', passwordHash: '123456-123456-123456', status: 'Deleted', email: 'something' }))
console.log(validateUser({ id: '1234-abcd-5678', username: 'testing', passwordHash: '123456-123456-123456', status: 'Unlocked' }))
console.log(validateUser({ id: '20', username: 'testing', passwordHash: '123456-123456-123456', status: 'Deleted', email: 'something' }))
console.log(validateUser({ id: 255, username: 'Pesho', passwordHash: ['asdf1245', 'qrqweggw', '123-4567', '98765432'], status: 'Locked', email: 'something' }))
console.log(validateUser({ id: 'qwwe-azfg-ey38', username: 'Someone', passwordHash: ['qwezz8jg', 'asdg-444', '12-34-56'], status: 'Unlocked' }))
console.log(validateUser({ id: 1344, username: 'wow123', passwordHash: '123456-123456-1234567', status: 'Locked', email: 'something@abv.bg' }))