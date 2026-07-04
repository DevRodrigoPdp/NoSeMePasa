import { Component, output } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateTaskData, TaskCategory, TaskPriority } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  readonly createTask = output<CreateTaskData>();

  readonly taskForm;

  constructor(private readonly formBuilder: NonNullableFormBuilder) {
    this.taskForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      description: [''],
      category: ['other'],
      priority: ['medium'],
      dueDate: [''],
      isImportant: [false],
    });
  }

  onSubmit(): void {
    if (this.taskForm.invalid) {
      this.taskForm.markAllAsTouched();
      return;
    }

    const formValue = this.taskForm.getRawValue();

    const taskData: CreateTaskData = {
      title: formValue.title,
      description: formValue.description,
      category: formValue.category as TaskCategory,
      priority: formValue.priority as TaskPriority,
      dueDate: formValue.dueDate || null,
      isImportant: formValue.isImportant,
    };

    this.createTask.emit(taskData);

    this.taskForm.reset({
      title: '',
      description: '',
      category: 'other',
      priority: 'medium',
      dueDate: '',
      isImportant: false,
    });
  }
}