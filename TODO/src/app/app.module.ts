import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { ToDoComponent } from './to-do/to-do.component';
import { CreateComponent } from './to-do/create/create.component';
import { ListComponent } from './to-do/list/list.component';
import { NewTrainingComponent } from './to-do/new-training/new-training.component';
import { CategorylistComponent } from './category/categorylist/categorylist.component';
import { CategoryComponent } from './category/category.component';
import { EditComponent } from './to-do/edit/edit.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToDoComponent,
    CreateComponent,
    ListComponent,
    NewTrainingComponent,
    CategorylistComponent,
    CategoryComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
