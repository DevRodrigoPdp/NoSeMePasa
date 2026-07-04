import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-natural-task-input',
  imports: [FormsModule],
  templateUrl: './natural-task-input.html',
  styleUrl: './natural-task-input.css',
})
export class NaturalTaskInput {
  taskTitle = '';

  readonly addTask = output<string>();

  onSubmit(): void {
    const cleanTitle = this.taskTitle.trim();

    if (!cleanTitle) {
      return;
    }

    this.addTask.emit(cleanTitle);
    this.taskTitle = '';
  }
}