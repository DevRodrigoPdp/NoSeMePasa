export type TaskPriority = 'low' | 'medium' | 'high';
export type TaskCategory = 'work' | 'personal' | 'shopping' | 'other' | 'health' | 'home';
export type TaskStatus = 'pending' | 'in-progress' | 'completed';

export interface Task {
    id: string;
    title: string;
    description?: string;
    priority: TaskPriority;
    category: TaskCategory;
    status: TaskStatus;
    isImportant: boolean;
    dueDate: string | null;
    createdAt: string | null;
    updatedAt: string | null;
}

export interface CreateTaskData {
  title: string;
  description?: string;
  category: TaskCategory;
  priority: TaskPriority;
  dueDate: string | null;
  isImportant: boolean;
}