import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { FormsModule } from '@angular/forms';  // For two-way binding
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TaskListComponent,
    TaskItemComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
   RouterModule,
   RouterOutlet,
   RouterLink,
    FormsModule,  // Import FormsModule for two-way binding
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
