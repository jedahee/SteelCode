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
  public hamburguer_active: boolean = false;

  constructor(private translate_s: TranslateService, private router: Router) {
    this.name = this.router.url.split("/")[2];
  }

  ngOnInit(): void {
    Aos.init();

    if (this.name.toLowerCase() != "rudahee" && this.name.toLowerCase() != "tobias" /*or*/ ) {
      this.router.navigate(["/"]);
    }
  }

  changeMenuStatus() {
    this.hamburguer_active = !this.hamburguer_active;
  }

  select_info_user(name: string) {
    this.name = name;
    if (name.toLowerCase() == "rudahee") {
      this.social_media = [
        {
          url: "https://angular.io/guide/inputs-outputs",
          class: "icon-ig"  
        }
      ]
      this.projects = ['Metallics Arts Mod', 'Game']
      this.text = 'parrafo_rudahee';
    } else if (name.toLowerCase() == "tobias") { 
      this.social_media = [
        {
          url: "https://angular.io/guide/inputs-outputs",
          class: "icon-ig"  
        },
        {
          url: "https://angular.io/guide/inputs-outputs",
          class: "icon-yt"  
        },
      ]
      this.projects = ['Metallics Arts Mod']
      this.text = 'parrafo_project_mam';
    } else {
      this.router.navigate(["/"]);

    }
    
    
  }

  selectLang(event: string) {
    this.translate_s.use(event);
  }
}
