import { Injectable, signal } from '@angular/core';
import { Task } from '../task.model';


@Injectable({
  providedIn: 'root',
})
export class TaskService {
tasks = signal<Task[]>([
    {
      id: '01',
      name: 'do dishes',
      completed: false,
    },
  ]);

  getTask() {
    return this.tasks.asReadonly();
  }

  addTask(n: string) {
    let id = String(Math.floor(Math.random() * 100000000000000));
    //     do id = String(Math.floor(Math.random() * 100000000000000))
    // while {this.tasks().some(t => t.id)}
    this.tasks.update((t) => [...t, { id: id, name: n, completed: false }]);
  }

  toggleTaskCompletion(task: Task) {
    task.completed = !task.completed;
    let taskToEdit = this.tasks().find((t) => t.id === task.id)

    taskToEdit!.completed = task.completed


  }
}
