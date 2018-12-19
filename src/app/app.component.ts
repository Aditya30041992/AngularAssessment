import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODOApp';

  listPage = true;
  categorylistPage = false;
  todolistPage= false;

  constructor() { }

  ngOnInit() {
  }

  showCategoryForm() {
    console.log("hi");
    this.categorylistPage = true;
    this.listPage = false;
    this.todolistPage= false;
  }

  showToDolistForm()  {
    console.log("hi");
    this.categorylistPage = false;
    this.listPage = true;
    this.todolistPage= false;

  }
}