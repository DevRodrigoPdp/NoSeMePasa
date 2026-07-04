import { Component, inject } from '@angular/core';
import { TaskList } from '../../components/task-list/task-list';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-today-page',
  imports: [TaskList],
  templateUrl: './today-page.html',
  styleUrl: './today-page.css',
})
export class TodayPage {
  private readonly tasksService = inject(TasksService);

  readonly tasks = this.tasksService.todayTasks;

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