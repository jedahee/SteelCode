import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent implements OnInit {

  @Input() projects : string[] = [];
  @Input() social_media : any = {};

  constructor() { }

  ngOnInit(): void {
    
  }
}
