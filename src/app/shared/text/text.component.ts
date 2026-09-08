import { Component, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent {
  @Input() text: string = "";

  constructor() { }
}
