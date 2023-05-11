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

  public allowed_users = [
    "rudahee",
    "sregio03",
    "tobibusfate",
    "farck",
    "cuchuwu"
  ];

  constructor(private translate_s: TranslateService, private router: Router) {
    this.name = this.router.url.split("/")[2];
  }

  ngOnInit(): void {
    Aos.init({
      disable: function() {
        var maxWidth = 875;
        return window.innerWidth < maxWidth;
      }
    });

    if (!this.allowed_users.includes(this.name.toLowerCase()) ) {
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
          url: "https://www.github.com/rudahee/",
          class: "icon-gh"  
        },
        {
          url: "https://www.twitter.com/rudahee/",
          class: "icon-tw"
        },
        {
          url: "https://www.linkedin.com/in/joserubendazahernandez/",
          class: "icon-lk"
        },
        {
          url: "mailto:ruben@steelcode.team",
          class: "icon-gmail"
        },
        {
          url: "https://www.discord.com/",
          class: "icon-dc",
          title: "RuDaHee#3048"
        },
        {
          url: "https://es.stackoverflow.com/users/136302/rudahee",
          class: "icon-stackoverflow"
        }
      ]
      this.projects = ['Metallics Arts Mod', 'SimpleAuths Mod', 'Awakenings Mod']
      this.text = 'parrafo_rudahee';
    } else if (name.toLowerCase() == "sregio03") { 
      this.social_media = [
        {
          url: "https://www.instagram.com/sergi_blanes/",
          class: "icon-ig"  
        },
        {
          url: "https://twitter.com/sregio2/",
          class: "icon-tw"
        },
        {
          url: "https://www.linkedin.com/in/sergi-b-201730112/",
          class: "icon-lk"
        },
        {
          url: "mailto:sergi.blanes.perez@gmail.com",
          class: "icon-gmail"
        },
        {
          url: "https://www.discord.com/",
          class: "icon-dc",
          title: "Sergio03#3270"
        },
      ]
      this.projects = ['Metallics Arts Mod']
      this.text = 'parrafo_sergi';
    } else if (name.toLowerCase() == "tobibusfate") { 
      this.social_media = [
        {
          url: "https://github.com/TobibusFate",
          class: "icon-gh"  
        },
        {
          url: "https://www.linkedin.com/in/burger-tobias/",
          class: "icon-lk"
        },
        {
          url: "mailto:tobibusfate@steelcode.team",
          class: "icon-gmail"
        },
        {
          url: "https://www.discord.com/",
          class: "icon-dc",
          title: "TobibusFate#9148"
        },
      ]
      this.projects = ['Metallics Arts Mod', 'SimpleAuths Mod', 'Awakenings Mod']
      this.text = 'parrafo_tobias';
    } else if (name.toLowerCase() == "farck") { 
      this.social_media = [
        {
          url: "https://www.twitter.com/Farck17/",
          class: "icon-tw"
        },
        {
          url: "mailto:farck@steelcode.team",
          class: "icon-gmail"
        },
        {
          url: "https://www.discord.com/",
          class: "icon-dc",
          title: "Farck#6576"
        },
      ]
      this.projects = ['Metallics Arts Mod', 'SimpleAuths Mod', 'Awakenings Mod']
      this.text = 'parrafo_farck';
    } else if (name.toLowerCase() == "cuchuwu") { 
      this.social_media = [
        {
          url: "https://github.com/CuchUwU",
          class: "icon-gh"
        },
        {
          url: "mailto:cuchuwu@steelcode.team",
          class: "icon-gmail"
        },
        {
          url: "https://www.discord.com/",
          class: "icon-dc",
          title: "CuchUwU#1782"
        },
      ]
      this.projects = ['Metallics Arts Mod', 'Awakenings Mod']
      this.text = 'parrafo_felisa';
    } else {
      this.router.navigate(["/"]);

    }
    
    
  }

  selectLang(event: string) {
    this.translate_s.use(event);
  }
}
