import { Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() openCategorylistOnButtonClicked = new EventEmitter();
  @Output() openToDolistOnButtonClicked = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  
  onToDoButtonClick(){
    this.openToDolistOnButtonClicked.emit();
  }
  onCategoryButtonClick(){
    this.openCategorylistOnButtonClicked.emit();
  }
}
