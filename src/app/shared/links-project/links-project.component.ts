import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-links-project',
  templateUrl: './links-project.component.html',
  styleUrls: ['./links-project.component.scss']
})
export class LinksProjectComponent implements OnInit {

  @Input() media_project: any[] = [];

  constructor() {

  }

  ngOnInit(): void {
    
  }
}
