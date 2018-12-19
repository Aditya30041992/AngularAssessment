import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';



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

  clearSearch() {
    this.name = null;
    this.category=null;
    this.status=null;
  }

  onSubmitClicked() {
    this.addNewToDo.emit({
      name: this.name,
      category: this.category,
      status: this.status
    });
  }
 
  



  
}
