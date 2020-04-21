import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
    AppRoutingModule,
    HttpClientModule,  // Se importa
    FormsModule
  ],
  providers: [TasksService], // Se importa acá, raro pero wrv
  bootstrap: [AppComponent]
})
export class AppModule { }
