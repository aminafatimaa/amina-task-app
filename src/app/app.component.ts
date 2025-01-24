
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { Component } from '@angular/core';
import { Task } from './task.model';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  imports: [AddTaskComponent, TaskListComponent, TaskItemComponent, FormsModule, CommonModule,RouterOutlet,RouterLink,RouterLinkActive],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks: Task[] = []; // Initialize an empty array for tasks
  

  // Add a new task to the list
  addTask(newTask: Task) {
    console.log('Adding task:', newTask);
    this.tasks.push(newTask);  // Adds the task to the array
    console.log('Current tasks:', this.tasks);
  }

  // Delete a task from the list
  deleteTask(index: number) {
    console.log('Deleting task at index:', index);
    this.tasks.splice(index, 1);
    console.log('Current tasks:', this.tasks);
  }

  // Toggle task completion
  toggleTaskCompletion(index: number) {
    console.log('Toggling task completion at index:', index);
    this.tasks[index].isCompleted = !this.tasks[index].isCompleted;
    console.log('Current tasks:', this.tasks);
  }
}