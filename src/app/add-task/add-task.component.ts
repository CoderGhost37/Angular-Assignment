import { Component } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  constructor(private tasksService: TasksService) {}

  addTask(name: string, desc: string, status: string, event: any) {
    this.tasksService.addTask(name, desc, status, event);
    console.log(name, desc, status);
  }
}
