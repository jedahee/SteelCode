import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import * as Aos from 'aos';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() type: string = "";
  @Output() select_lang = new EventEmitter();

  public home:string = "/";
  public about_us:string = "/about-us";
  public projects: string[] = ["/projects/metallics_arts_mod", "/projects/simple_auths_mod", "/projects/awakenings_mod"]

  public contact_us:string = "/contact-us";

  constructor() {

  }

  outputSelectLang(event: string) {
    this.select_lang.emit(event)
  }

  ngOnInit() {
    Aos.init();
  }
}
