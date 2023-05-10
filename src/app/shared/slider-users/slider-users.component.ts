import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-users',
  templateUrl: './slider-users.component.html',
  styleUrls: ['./slider-users.component.scss']
})
export class SliderUsersComponent implements OnInit {
  

  public names : any[] = [];

  @Output() name_clicked = new EventEmitter();

  ngOnInit(): void {
    
  }

  constructor() {
    this.names = [
      {
        name:"Rudahee",
        functions: ['tipo_colaboracion_10', 'tipo_colaboracion_2']
      },
      {
        name:"Sergi",
        functions: ['tipo_colaboracion_2']
      },
      {
        name:"Farck",
        functions: ['tipo_colaboracion_3', 'tipo_colaboracion_10']
      },
      {
        name:"Felisa",
        functions: ['tipo_colaboracion_3', 'tipo_colaboracion_5']
      },
      {
        name:"Tobias",
        functions: ['tipo_colaboracion_1', 'tipo_colaboracion_10']
      },
    ]
  }

  setInfoName(name:string) {
    this.name_clicked.emit(name);
  }
}
