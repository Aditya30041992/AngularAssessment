import { Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() openCategoryformOnButtonClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  onCategoryButtonClick(){
    this.openCategoryformOnButtonClicked.emit();
  }
}
