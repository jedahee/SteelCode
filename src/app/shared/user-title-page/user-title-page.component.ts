import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-title-page',
  templateUrl: './user-title-page.component.html',
  styleUrls: ['./user-title-page.component.scss']
})
export class UserTitlePageComponent implements OnInit {

  @Input() name: string = "";
  @Output() name_output = new EventEmitter<string>();

  public src : string = "";

  constructor() {
  }

  ngOnInit() {

    if (this.name.toLowerCase() == "rudahee") {
      this.src = "../../../assets/images/img_user_aboutus.svg";
      this.name_output.emit(this.name);
    } 
    else if (this.name.toLowerCase() == "rudahee") {
      this.src = ""
    } 
    else if (this.name.toLowerCase() == "rudahee") {
      this.src = ""
    } 
    else if (this.name.toLowerCase() == "rudahee") {
      this.src = ""
    }  
    else if (this.name.toLowerCase() == "rudahee") {
      this.src = ""
    } 
    else if (this.name.toLowerCase() == "rudahee") {
      this.src = ""
    } 


  }
}
