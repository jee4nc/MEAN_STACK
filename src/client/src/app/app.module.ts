import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {TasksService} from './services/tasks.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TasksService], // Se importa acá, raro pero wrv
  bootstrap: [AppComponent]
})
export class AppModule { }
