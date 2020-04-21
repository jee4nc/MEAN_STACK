import { Component, OnInit } from '@angular/core';
import {TasksService} from '../../services/tasks.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks_list : Task[];
  title: string;
  constructor(private taskserver: TasksService) { 
    this.taskserver.getTasks()
    .subscribe(tasks => {
      this.tasks_list = tasks
    })
  }

  ngOnInit(): void {
  }

}
