import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Output() editNewToDo = new EventEmitter<{
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
    this.editNewToDo.emit({
      name: this.name,
      category: this.category,
      status: this.status
    });
  }
    onClearClicked() {
      this.editNewToDo.emit({
        name: this.name,
        category: this.category,
        status: this.status

    });
  }

}
