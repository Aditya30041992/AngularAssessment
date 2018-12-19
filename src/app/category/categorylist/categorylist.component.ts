import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Categoryservice } from 'src/app/services/category.service';
@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
  
})
export class CategorylistComponent implements OnInit {
  
  categories;
  @Output() addNewCategoryButtonClicked = new EventEmitter();
  @Output() editCategoryButtonClicked = new EventEmitter<{index : number}>();

  constructor(categoryService:Categoryservice)
  {
   this.categories = categoryService.categorytasks;
  }

  ngOnInit() {
  }

  onCategoryNewButtonClick() {
    this.addNewCategoryButtonClicked.emit();
  }
  deletecategoryFieldValue(cate) {
    this.categories = this.categories.filter(t => t.category !== cate.category);
  }
  onEditcategoryButtonClick(index){
  
  this.editCategoryButtonClicked.emit({
    'index':index
  });
  
}


}
