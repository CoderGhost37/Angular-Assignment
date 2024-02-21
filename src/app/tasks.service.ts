// import { Injectable } from "@angular/core";

// @Injectable({
//   providedIn: 'root',
// })

class Task {
  id: number;
  title: string;
  description: string;
  status: string;

  constructor(id: number, title: string, desc: string, status: string) {
    this.id = id;
    this.title = title;
    this.description = desc;
    this.status = status;
  }
}

export class TasksService {
  tasks = [
    new Task(1, 'First Task', 'This is the first task', 'Done'),
    new Task(2, 'Second Task', 'This is the second task', 'In Progress'),
    new Task(3, 'Third Task', 'This is the third task', 'To Do'),
  ];

  constructor() {}

  addTask(title: string, desc: string, status: string, event: any) {
    event.preventDefault();
    this.tasks.push(new Task(this.tasks.length + 1, title, desc, status));
    alert('Task added successfully');
    console.log(this.tasks);
  }

  deleteTask(id: number) {
    this.tasks = this.tasks
      .filter((task) => task.id !== id)
      .map((task, index) => {
        task.id = index + 1;
        return task;
      });
    alert('Task deleted successfully');
  }

  editTask(id: number, title: string, desc: string, status: string) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        task.title = title;
        task.description = desc;
        task.status = status;
      }
      return task;
    });
    alert('Task edited successfully');
  }
}
