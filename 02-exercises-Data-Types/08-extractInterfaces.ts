function assignTask(
    user: User,
    task: Task
) {
    if (task.assignedTo == undefined) {
        task.assignedTo = user;
        console.log(`User ${user.username} assigned to task '${task.title}'`);
    }
}

interface User {
    username: string;
    signupDate: Date;
}

interface Task {
    status: 'Logged' | 'Started' | 'InProgress' | 'Done',
    title: string,
    daysRequired: number,
    assignedTo: {
        username: string,
        signupDate: Date
    } | undefined,
    changeStatus(newStatus: 'Logged' | 'Started' | 'InProgress' | 'Done'): void
}
let user: User & { passwordHash: string } = {
    username: 'Margaret',
    signupDate: new Date(2022, 1, 13),
    passwordHash: 'random'
}
let task1: Task = {
    status: 'Done',
    title: 'Need assistance',
    daysRequired: 1,
    assignedTo: undefined,
    changeStatus(newStatus: 'Logged' | 'Started' | 'InProgress' | 'Done') { this.status = newStatus; }
}

let task2: Task & { moreProps: number, evenMore: string } = {
    status: <'Logged' | 'Started' | 'InProgress' | 'Done'>'Done',
    title: 'Test',
    daysRequired: 12,
    assignedTo: undefined,
    changeStatus(newStatus: 'Logged' | 'Started' | 'InProgress' | 'Done') { this.status = newStatus; },
    moreProps: 300,
    evenMore: 'wow'
}

assignTask(user, task1);
assignTask(user, task2);
