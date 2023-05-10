import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as Aos from 'aos';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Output() select_lang = new EventEmitter();
  public name : string = "";
  public media_project : any[] = [];
  public text : string = "";
  public src_title: string = "";
  public users_involved : any[] = [];
  public hamburguer_active: boolean = false;

  constructor(private translate_s: TranslateService, private router : Router) {
    this.name = this.router.url.split("/")[2];
    
    
  }

  changeMenuStatus() {
    this.hamburguer_active = !this.hamburguer_active;
  }

  ngOnInit(): void {
    
    Aos.init({
      disable: function() {
        var maxWidth = 815;
        return window.innerWidth < maxWidth;
      }
    });

    

    if (this.name.toLowerCase() != "metallics_arts_mod" && this.name.toLowerCase() != "simple_auths_mod" && this.name.toLowerCase() != "awakenings_mod" ) {
      this.router.navigate(["/"]);
    }

    if (this.name.toLowerCase() == "metallics_arts_mod" ) {
      this.text = "parrafo_project_mam";
      this.src_title = "title_mam.svg";

      this.users_involved = [
        {
          type: "type3",
          name: "Rudahee",
          functions: [
            "tipo_colaboracion_10",
            "tipo_colaboracion_2",
          ]
        },
        {
          type: "type3",
          name: "Sregio03",
          functions: [,
            "tipo_colaboracion_2",
          ]
        },
        {
          type: "type3",
          name: "TobibusFate",
          functions: [
            "tipo_colaboracion_1",
            "tipo_colaboracion_10",
          ]
        },
        {
          type: "type3",
          name: "Farck",
          functions: [
            "tipo_colaboracion_3",
            "tipo_colaboracion_10",
          ]
        },
        {
          type: "type3",
          name: "Cuchuwu",
          functions: [
            "tipo_colaboracion_3",
            "tipo_colaboracion_5",
          ]
        },
      ];

      this.media_project = [
        {
          name: "Curseforge",
          icon: "icon-cf-project",
          link: "https://www.curseforge.com/minecraft/mc-mods/metallics-arts"
        },
        {
          name: "Github",
          icon: "icon-gh-project",
          link: "https://github.com/SteelCodeTeam/Metallics-Arts"
        },
      ];
    }

    else if (this.name.toLowerCase() == "simple_auths_mod") {
      this.text = "parrafo_project_simple_auth";
      this.src_title = "simpleauth.gif";

      this.users_involved = [
        {
          type: "type3",
          name: "Rudahee",
          functions: [
            "tipo_colaboracion_1",
            "tipo_colaboracion_2",
          ]
        },
        {
          type: "type3",
          name: "Tobias",
          functions: [
            "tipo_colaboracion_1",
            "tipo_colaboracion_10",
          ]
        },
        {
          type: "type3",
          name: "Farck",
          functions: [
            "tipo_colaboracion_3",
            "tipo_colaboracion_10",
          ]
        },
      ];

      this.media_project = [
        {
          name: "Curseforge",
          icon: "icon-cf-project",
          link: "https://www.curseforge.com/minecraft/mc-mods/simple-auths"
        },
        {
          name: "Github",
          icon: "icon-gh-project",
          link: "https://github.com/SteelCodeTeam/SimpleAuths"
        },
      ];
    }

    else if ( this.name.toLowerCase() == "awakenings_mod") {
      this.text = "parrafo_project_awakenings";
      this.src_title = "commingsoon.jpeg";

      this.users_involved = [
        {
          type: "type3",
          name: "Rudahee",
          functions: [
            "tipo_colaboracion_1",
            "tipo_colaboracion_2",
          ]
        },
        {
          type: "type3",
          name: "Sergi",
          functions: [
            "tipo_colaboracion_1",
            "tipo_colaboracion_2",
          ]
        },
        {
          type: "type3",
          name: "Tobias",
          functions: [
            "tipo_colaboracion_1",
            "tipo_colaboracion_10",
          ]
        },
        {
          type: "type3",
          name: "Farck",
          functions: [
            "tipo_colaboracion_3",
            "tipo_colaboracion_10",
          ]
        },
        {
          type: "type3",
          name: "Felisa",
          functions: [
            "tipo_colaboracion_3",
            "tipo_colaboracion_5",
            
          ]
        },
      ];

      this.media_project = [
        
        {
          name: "Contact us",
          icon: "icon-ex-link-project",
          link: "https://steelcode.team/contact-us"
        },
      ];
    }
  }

  selectLang(event: string) {
    this.translate_s.use(event);
  }
}
