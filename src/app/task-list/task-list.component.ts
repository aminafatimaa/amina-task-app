import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];  // Array of tasks to display

  @Output() taskDeleted = new EventEmitter<number>();  // Event emitter for task deletion
  @Output() taskToggled = new EventEmitter<number>();  // Event emitter for toggling completion

  // Handle task deletion
  deleteTask(index: number) {
    this.taskDeleted.emit(index);  // Emit index of task to be deleted
  }

  // Handle toggling task completion
  toggleTaskCompletion(index: number) {
    this.taskToggled.emit(index);  // Emit index of task to toggle completion
  }
}
