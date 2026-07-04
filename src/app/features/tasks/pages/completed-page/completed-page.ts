import { Component, inject } from '@angular/core';
import { TaskList } from '../../components/task-list/task-list';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-completed-page',
  imports: [TaskList],
  templateUrl: './completed-page.html',
  styleUrl: './completed-page.css',
})
export class CompletedPage {
  private readonly tasksService = inject(TasksService);

  readonly tasks = this.tasksService.completedTasks;

  toggleImportant(taskId: string): void {
    this.tasksService.toggleImportant(taskId);
  }

  deleteTask(taskId: string): void {
    this.tasksService.deleteTask(taskId);
  }
}