import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-users',
  templateUrl: './slider-users.component.html',
  styleUrls: ['./slider-users.component.scss']
})
export class SliderUsersComponent implements OnInit {
  

  public names : string[] = [];

  @Output() name_clicked = new EventEmitter();

  ngOnInit(): void {
    
  }

  constructor() {
    this.names = [
      "Rudahee",
      "Tobias"
    ]
  }

  setInfoName(name:string) {
    this.name_clicked.emit(name);
  }
}
