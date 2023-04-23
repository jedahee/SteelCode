import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-title-page',
  templateUrl: './user-title-page.component.html',
  styleUrls: ['./user-title-page.component.scss']
})
export class UserTitlePageComponent implements OnInit {

  @Input() name: string = "";

  constructor() {
  }

  ngOnInit() {

  }
}
