import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../task.model';  // Ensure Task model is correct
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]  // Import FormsModule to use ngModel
})
export class AddTaskComponent {
  taskTitle: string = '';  // Input field for task

  @Output() taskAdded = new EventEmitter<Task>();  // Emit new Task object

  addTask() {
    if (this.taskTitle.trim()) {
      const newTask = new Task(this.taskTitle);  // Create new Task object
      console.log('Adding task:', newTask);  // Log the new task object
     let m= this.taskAdded.emit(newTask);  // Emit the Task object to parent component
     console.log(m)
      this.taskTitle = '';  // Clear input field after task is added
    }
  }
}
