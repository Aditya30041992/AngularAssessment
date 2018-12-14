import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  tasks = [
    {
      name: 'Angular session one',
      category: 'CDAC',
      status: true
    },
    {
      name: 'Angular session two',
      category: 'CDAC',
      status: true
    },
    {
      name: 'Angular session three',
      category: 'CDAC',
      status: true
    }
  ]

  listPage = true;
  formPage = false;
  editPage = false;

  constructor() { }

  ngOnInit() {
  }

  showNewToDoForm(){
   
    this.listPage = false;
    this.formPage = false;
  }

  onToDoAdded(toDo) {
    this.tasks.push(toDo);
    this.formPage = false;
    this.listPage = true;
  }
  showEditToDoForm(){
    console.log("hi");
    this.listPage = false;
    this.formPage = false;
    this.editPage = true;
  }
  onToDoEdited(toDo) {
    this.tasks.push(toDo);
    this.formPage = false;
    this.listPage = false;
  }

}
