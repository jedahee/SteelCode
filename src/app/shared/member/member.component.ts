import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  @Input() style_type : string = "";
  @Input() name : string = "";
  @Input() functions : string[] = [];

  constructor() { }

  ngOnInit() : void {

  }

}
