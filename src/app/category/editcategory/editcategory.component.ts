import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { Categoryservice } from 'src/app/services/category.service';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css'],

})
export class EditcategoryComponent implements OnInit {


  @Input() categorytask:Category;
  categories;

  @Output() editNewCategory = new EventEmitter<{
    category: string;
  }>();

  category: string ="";

  constructor(categoryService:Categoryservice)
  {
   this.categories = categoryService.categorytasks;
  }


  ngOnInit() {
  }
  clearSearch() {
    
    this.category=null;
    
  }
  onSubmitClicked() {
    this.editNewCategory.emit({
     
      category: this.category
      
    });
  }


}
