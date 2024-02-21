import { Component } from '@angular/core';
import { Task, TasksService } from '../tasks.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css',
})
export class EditTaskComponent {
  task: Task;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];

      this.task = this.tasksService.tasks.find((t) => t.id === this.id);
    });
  }

  editTask(title: string, desc: string, status: string, event: any) {
    this.tasksService.editTask(this.id, title, desc, status, event);
  }
}
