import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import * as Aos from 'aos';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus-detail',
  templateUrl: './aboutus-detail.component.html',
  styleUrls: ['./aboutus-detail.component.scss']
})
export class AboutusDetailComponent implements OnInit {
  @Output() select_lang = new EventEmitter();
  
  public name: string = "";
  public social_media: object = {};
  public projects: string[] = [];
  public text: string = "";

  constructor(private translate_s: TranslateService, private router: Router) {
    this.name = this.router.url.split("/")[2];

  }

  ngOnInit(): void {
    Aos.init();
  }

  select_info_user(name: string) {
    if (name.toLowerCase() == "rudahee") {
      this.social_media = [
        {
          url: "https://angular.io/guide/inputs-outputs",
          class: "icon-ig"  
        }
      ]
      this.projects = ['Metallics Arts Mod', 'Game']
      this.text = 'parrafo_rudahee';
    }
  }

  selectLang(event: string) {
    this.translate_s.use(event);
  }
}
