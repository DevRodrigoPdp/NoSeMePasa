import { Component, inject } from '@angular/core';
import { TaskList } from '../../components/task-list/task-list';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-important-page',
  imports: [TaskList],
  templateUrl: './important-page.html',
  styleUrl: './important-page.css',
})
export class ImportantPage {
  private readonly tasksService = inject(TasksService);

  readonly tasks = this.tasksService.importantTasks;

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