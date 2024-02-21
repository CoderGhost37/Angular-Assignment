import { Component } from '@angular/core';
import { TasksService } from '../tasks.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  tasks = [];

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.tasks = this.tasksService.tasks;
    console.log(this.tasks);
  }

  deleteTask(id: number) {
    this.tasksService.deleteTask(id);
    this.tasks = this.tasksService.tasks;
  }
}
