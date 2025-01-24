import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TasksComponent } from './tasks/tasks.component';

export const routes: Routes = [
   
         { path: '', component: TasksComponent },  // Default route for Home
         { path: 'home', component: HomeComponent },
         { path: 'task-lists', component: TaskItemComponent },  // Task List route
         
       
];
