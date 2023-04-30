import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users-in-project',
  templateUrl: './users-in-project.component.html',
  styleUrls: ['./users-in-project.component.scss']
})
export class UsersInProjectComponent implements OnInit {

  @Input() users_involved : any[] = [];

  ngOnInit(): void {
    
  }

}
