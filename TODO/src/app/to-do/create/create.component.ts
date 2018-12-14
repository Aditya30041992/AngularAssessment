import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  
  @Output() addNewToDo = new EventEmitter<{
    name: string,
    category: string,
    status: boolean
  }>();

  name: string ="";
  category: string ="";
  status: boolean =false;

  constructor() { }

  ngOnInit() {
  }
 
  onSubmitClicked() {
    this.addNewToDo.emit({
      name: this.name,
      category: this.category,
      status: this.status
    });
  }
    onClearClicked() {
      this.addNewToDo.emit({
        name: this.name,
        category: this.category,
        status: this.status

    });
  }

  

  
}
