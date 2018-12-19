import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-createcategory',
  templateUrl: './createcategory.component.html',
  styleUrls: ['./createcategory.component.css']
})
export class CreatecategoryComponent implements OnInit {


  @Output()addNewCategory = new EventEmitter<{
    category: string
  }>();

  category: string ="";
  
  constructor() { }

  ngOnInit() {
  }
  clearSearch() {
    
    this.category=null;
    
  }
  onSubmitClicked() {
    this.addNewCategory.emit({
     
      category: this.category
      
    });
  }

}
