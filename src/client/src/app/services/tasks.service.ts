import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import { map } from 'rxjs/operators'; // Importar map
import {Task} from '../Task';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  domain = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  getTasks() {
    const getTask = this.http.get<Task[]>(`${this.domain}api/tasks`)
    .pipe(map(res => res)); // Se tiene que hacer pipe

    return getTask;
  }

  addTask(newTask: Task) {
    const addTask = this.http.post<Task>(`${this.domain}api/tasks`, newTask)
    .pipe(map(res => res));

    return addTask;
  }

  deleteTask(id: string) {
    const delTask = this.http.delete<Task>(`${this.domain}api/tasks/${id}`).
    pipe(map(res => res));

    return delTask;
  }

  updateTask(newTask) {
    const updaTask = this.http.put(`${this.domain}api/tasks/${newTask.id}`, newTask)
    .pipe(map(res => res));

    return updaTask;
  }

}
