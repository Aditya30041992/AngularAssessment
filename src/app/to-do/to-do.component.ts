import { Component, OnInit } from '@angular/core';
import { ToDoservice } from '../services/to-do.service';
import { ToDo } from '../models/ToDo';


@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'] ,
  providers: [ToDoservice]
})
export class ToDoComponent implements OnInit {
  tasks;

  listPage = true;
  formPage = false;
  editPage = false;
  todolilstPage=false;

  task:ToDo;
  index: number;
  constructor( toDoService: ToDoservice ) 
  { 
    this.tasks = toDoService.tasks;
  }

  ngOnInit() {
  }

  showNewToDoForm() {

    this.listPage = false;
    this.formPage = true;
  }

  onToDoAdded(toDo) {
    this.tasks.push(toDo);
    this.formPage = false;
    this.listPage = true;
  }
  showEditToDoForm(todoEdit) {
    this.index = todoEdit.index;
    this.task =this.tasks[this.index];
    this.listPage = false;
    this.formPage = false;
    this.editPage = true;

  }
  onToDoEdited(toDo) {
    this.index = toDo.index;
    this.task =this.tasks[this.index];
    //this.tasks.push(toDo);
    this.formPage = false;
    this.listPage = true;
    this.editPage = false;
  }

}
