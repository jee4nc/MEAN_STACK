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
    console.log(this.title);

    const newTask: Task = { // se crea la constante de tipo TaskModel
      title: this.title,
      isDone: false
    };

    this.taskserver.addTask(newTask) // Se llama al servicio, al metodo y se le da el const
    .subscribe(task => {
        this.tasksList.push(task); // y( se pushea, agrega)
        console.log(this.tasksList);
    });
  }
}
