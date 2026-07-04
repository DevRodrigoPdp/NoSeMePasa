import { Component, inject } from '@angular/core';
import { TaskList } from '../../components/task-list/task-list';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-no-date-page',
  imports: [TaskList],
  templateUrl: './no-date-page.html',
  styleUrl: './no-date-page.css',
})
export class NoDatePage {
  private readonly tasksService = inject(TasksService);

  readonly tasks = this.tasksService.noDateTasks;

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