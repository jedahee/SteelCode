import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-header',
  templateUrl: './link-header.component.html',
  styleUrls: ['./link-header.component.scss']
})
export class LinkHeaderComponent {
  @Input() text: string = "";
  @Input() style_type: string = "";
  @Input() link: string = "";

  constructor() {
  }
}
