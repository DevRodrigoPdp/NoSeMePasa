import { Component, input, output } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
  readonly task = input.required<Task>();
  readonly complete = output<string>();
  readonly delete = output<string>();
  readonly toggleImportant = output<string>();

  onComplete(): void {
    this.complete.emit(this.task().id);
  }

  onDelete(): void {
    this.delete.emit(this.task().id);
  }

  onToggleImportant(): void {
    this.toggleImportant.emit(this.task().id);
  }
}
