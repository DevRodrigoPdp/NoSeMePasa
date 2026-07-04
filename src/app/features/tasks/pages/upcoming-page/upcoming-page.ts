import { Component, inject } from '@angular/core';
import { TaskList } from '../../components/task-list/task-list';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-upcoming-page',
  imports: [TaskList],
  templateUrl: './upcoming-page.html',
  styleUrl: './upcoming-page.css',
})
export class UpcomingPage {
  private readonly tasksService = inject(TasksService);

  readonly tasks = this.tasksService.upcomingTasks;

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