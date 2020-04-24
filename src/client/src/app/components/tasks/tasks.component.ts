import { Component, OnInit } from '@angular/core';
import {TasksService} from '../../services/tasks.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasksList: Task[];
  title: string;

  constructor(private taskserver: TasksService) {
    this.taskserver.getTasks()
    .subscribe(tasks => {
      this.tasksList = tasks;
    });
  }

  ngOnInit(): void {
  }

  addTask(event) { // Recibe el evento
    event.preventDefault();

    const newTask: Task = { // se crea la constante de tipo TaskModel
      title: this.title,
      isDone: false
    };

    this.taskserver.addTask(newTask) // Se llama al servicio, al metodo y se le da el const
    .subscribe(task => {
        this.tasksList.push(task); // y( se pushea, agrega)
        this.title = '';
    });
  }

  deleteTask(id) {
    const tasks = this.tasksList;
    this.taskserver.deleteTask(id)
    .subscribe(data => {
      if (data.n === 1) {
        for (let i = 0; i < tasks.length; i ++) {
          if (tasks[i]._id === id) {
            tasks.splice(i, 1);
          }
        }
      }
    });
  }
}
