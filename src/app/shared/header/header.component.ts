import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public home:string = "/";
  public about_us:string = "/about-us";
  public projects_mod:string = "/projects/metallics_arts_mod";
  public projects_game:string = "/projects/game";
  public contact_us:string = "/contact-us";

  constructor() {

  }
}
