import { Component, inject } from '@angular/core';
import { TaskCard } from '../../components/task-card/task-card';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-no-pressure-page',
  imports: [TaskCard  ],
  templateUrl: './no-pressure-page.html',
  styleUrl: './no-pressure-page.css',
})
export class NoPressurePage {
  private readonly tasksService = inject(TasksService);

  readonly task = this.tasksService.recommendedTask;

  completeTask(taskId: string): void {
    this.tasksService.completeTask(taskId);
  }

  toggleImportant(taskId: string): void {
    this.tasksService.toggleImportant(taskId);
  }

  deleteTask(taskId: string): void {
    this.tasksService.deleteTask(taskId);
  }
}