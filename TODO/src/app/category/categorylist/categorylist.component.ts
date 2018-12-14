import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {
  
  @Input() categories;
  

  constructor() { }

  ngOnInit() {
  }

 

}
