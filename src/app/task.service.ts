// import { Injectable } from '@angular/core';
// import { Task } from './task.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class TaskService {
//   private tasks: Task[] = [];
//   private nextId: number = 1;

//   getTasks(): Task[] {
//     return this.tasks;
//   }

//   addTask(title: string): void {
//     const newTask: Task = {
//       id: this.nextId++,
//       title: title,
//       completed: false
//     };
//     this.tasks.push(newTask);
//   }

//   toggleTaskCompletion(id: number): void {
//     const task = this.tasks.find(t => t.id === id);
//     if (task) {
//       task.completed = !task.completed;
//     }
//   }

//   deleteTask(id: number): void {
//     this.tasks = this.tasks.filter(t => t.id !== id);
//   }
// }
