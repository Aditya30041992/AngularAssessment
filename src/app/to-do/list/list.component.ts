import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ToDoservice } from 'src/app/services/to-do.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  todos;
  @Output() addNewToDoButtonClicked = new EventEmitter();

  @Output() editToDoButtonClicked = new EventEmitter<{index : number}>();
  @Output() deleteToDoButtonClicked = new EventEmitter();
  constructor( toDoService: ToDoservice ) 
  { 
    this.todos = toDoService.tasks;
  }

  ngOnInit() {
  }

  onNewButtonClick() {
    this.addNewToDoButtonClicked.emit();
  }
  
 
  deleteFieldValue(todo) {
    this.todos = this.todos.filter(t => t.name !== todo.name);
  }

  
  onEditButtonClick(index)
  {
    this.editToDoButtonClicked.emit({
      'index':index
    });
    //   this.clicked=!this.clicked;
  //   this.editIndex=i;
   }
  // onEditButtonClick(todo,i){
  //   this.editToDoButtonClicked.emit(todo);
  //   this.clicked=!this.clicked;
  //   this.editIndex=i;
  //   this.form.setValue({
  //     index:i,
  //     name:todo.name,
  //     category:todo.category

  //   })
  // }
  
  
}
