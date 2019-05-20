import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatIconModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { SharedModule } from './shared/shared.module';
import { TodoMvcPlusServiceModule } from './todo/todo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    TodoMvcPlusServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
