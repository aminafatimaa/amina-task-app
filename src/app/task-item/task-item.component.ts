import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task.model';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
  standalone: true,
  imports:[FormsModule,CommonModule]
})
export class TaskItemComponent {
  @Input() task: Task = new Task(''); // Receive individual task from the parent
  @Output() delete = new EventEmitter<void>(); // Event to delete task
  @Output() toggleCompletion = new EventEmitter<void>(); // Event to toggle completion

  // Delete task
  onDelete() {
    this.delete.emit();
  }

  // Toggle task completion
  onToggleCompletion() {
    this.toggleCompletion.emit();
  }
}
