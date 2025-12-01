class Task {
	public title: string;
	public description: string;
	public completed: boolean;
	private _createdBy: string;

	constructor(title: string, description: string, owner: string) {
		this.title = title;
		this.description = description;
		this.completed = false;
		this._createdBy = owner;
	}

	get createdBy(): string {
		return this._createdBy;
	}

	toggleStatus(): void {
		this.completed = true;
	}

	getDetails(): string {
		return `Task: ${this.title} - ${this.description} - ${this.completed ? "Completed" : "Pending"}`;
	}

	static createSampleTasks(): Task[] {
		return [
			new Task("Title", "subTitle", "Ivan"),
			new Task("Title2", "subTitle2", "Ivan2"),
		];
	}
}

const task1 = new Task("Complete homework", "Finish math exercises", "Charlie");
task1.toggleStatus();
console.log(task1.getDetails());
const task2 = new Task("Clean room", "Clean the room", "Mary");
console.log(task2.getDetails());
const tasks = Task.createSampleTasks();
tasks.forEach((task, i) => {
	if (i === 1) {
		task.toggleStatus();
	}
	console.log(task.getDetails());
});
