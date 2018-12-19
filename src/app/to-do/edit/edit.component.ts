import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ToDo } from 'src/app/models/ToDo';
import { ToDoservice } from 'src/app/services/to-do.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() task:ToDo;
  todos;

  @Output() editNewToDo = new EventEmitter<{
    name: string,
    category: string,
    status: boolean,

  }>();

  name: string = "";
  category: string = "";
  status: boolean = false;

  

  constructor( toDoService: ToDoservice ) 
  { 
    this.todos = toDoService.tasks;
  }

  ngOnInit() {
   

  }
  
  


  onSubmitClicked() {
    this.editNewToDo.emit({
      name: this.name,
      category: this.category,
      status: this.status,
      
    });
  }
  clearSearch() {
    this.name = null;
    this.category = null;
    this.status = null;
  }

}
