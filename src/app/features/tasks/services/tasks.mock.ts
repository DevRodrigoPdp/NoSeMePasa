import { Task } from '../models/task.model';

const today = new Date().toISOString().slice(0, 10);

export const TASKS_MOCK: Task[] = [
    {
        id: '1',
        title: 'Llamar al médico',
        description: 'Pedir cita para una revisión',
        category: 'health',
        priority: 'high',
        dueDate: today,
        status: 'pending',
        isImportant: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
    {
        id: '2',
        title: 'Comprar comida para el gato',
        description: 'Revisar si queda pienso antes de comprar',
        category: 'shopping',
        priority: 'medium',
        dueDate: null,
        status: 'pending',
        isImportant: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
    {
        id: '3',
        title: 'Llevar el cargador al trabajo',
        description: 'Meterlo en la mochila por la noche',
        category: 'work',
        priority: 'medium',
        dueDate: today,
        status: 'pending',
        isImportant: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
    {
        id: '4',
        title: 'Ordenar papeles del coche',
        description: 'Guardar seguro, ITV y recibos juntos',
        category: 'home',
        priority: 'low',
        dueDate: null,
        status: 'completed',
        isImportant: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
];