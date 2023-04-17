import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-decorate',
  templateUrl: './decorate.component.html',
  styleUrls: ['./decorate.component.scss']
})
export class DecorateComponent {
  @Input() name_img: string = "";
  @Input() class_type: string = "";

  constructor() {

  }
}
