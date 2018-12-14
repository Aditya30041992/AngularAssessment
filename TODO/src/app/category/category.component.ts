import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categorytasks = [
    {
      category: 'CDAC',
      status: true
    },
    {
      category: 'MCA',
      status: true
    },
    {
      category: 'FRESHER',
      status: true
    }
  ]
  todolistPage = true;
  categorylistPage = false;

  constructor() { }

  ngOnInit() {
  }
  showCategoryForm(){
    this.todolistPage = true;
    this.categorylistPage = true;
  }

}
