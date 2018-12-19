import { Component, OnInit } from '@angular/core';
import { Categoryservice } from '../services/category.service';
import { Category} from 'src/app/models/Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'] ,
  providers: [Categoryservice]
})
export class CategoryComponent implements OnInit {
  
  categorytasks;
  categorytask:Category;
  index:number;

  categorylistPage=true;
  categoryformPage=false;
  editcategoryformPage=false;
  // todolistPage = true;
  // categorylistPage = false;
  // listPage=false;

  constructor(categoryService:Categoryservice)
   {
    this.categorytasks = categoryService.categorytasks;
   }

  ngOnInit() {
  }


  showNewCategoryForm() {
      console.log("hi");
    this.categorylistPage = false;
    this.categoryformPage = true;
  }

  onCategoryAdded(cate) {
    console.log("hi");
    this.categorytasks.push(cate);
    this.categorylistPage=true;
    this.categoryformPage=false;
  }
  showEditCategoryForm(categoryEdit) {
    console.log("hi");
    this.index = categoryEdit.index;
    this.categorytask =this.categorytasks[this.index];
    this.categorylistPage = false;
    this.categoryformPage = false;
    this.editcategoryformPage = true;

  }

  onCategoryEdited(cate) {
    console.log("hi");
    this.index = cate.index;
    this.categorytask =this.categorytasks[this.index];
    //this.categorytasks.push(cate);
    this.categorylistPage = true;
    this.categoryformPage = false;
    this.editcategoryformPage = false;

  }

  // showCategoryForm(){
  //   this.todolistPage = false;
  //   this.categorylistPage = false;
  //   this.listPage=false;
  // }

}
