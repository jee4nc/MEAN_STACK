import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators'; // Importar map
import {Task} from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  domain: String = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  getTasks() {
    const get_task = this.http.get<Task[]>(`${this.domain}api/tasks`)
    .pipe(map(res => res)); // Se tiene que hacer pipe

    return get_task;
  }

  addTask(newTask: Task) {
    const add_task = this.http.post<Task>(`${this.domain}api/tasks`, newTask)
    .pipe(map(res => res));

    return add_task;
  }

  deleteTask(id: String) {
    const del_task = this.http.delete(`${this.domain}api/tasks${id}`).
    pipe(map(res => res));

    return del_task;
  }

  updateTask(newTask) {
    const upda_task = this.http.put(`${this.domain}api/tasks/${newTask.id}`, newTask)
    .pipe(map(res => res));

    return upda_task;
  }

}
