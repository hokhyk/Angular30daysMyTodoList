import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TodoListModule } from './todo-list/todo-list.module';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    TodoListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HelloComponent]
})
export class AppModule { }
