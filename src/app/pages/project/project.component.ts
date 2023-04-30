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
    Aos.init();

    if (this.name.toLowerCase() != "metallics_arts_mod" /*or*/ ) {
      this.router.navigate(["/"]);
    }

    if (this.name.toLowerCase() == "metallics_arts_mod" /*or*/ ) {
      this.text = "parrafo_project_mam";
      this.src_title = "title_mam.svg";

      this.users_involved = [
        {
          type: "type3",
          name: "Rudahee",
          functions: [
            "tipo_colaboracion_1",
            "tipo_colaboracion_4",
          ]
        },
        {
          type: "type3",
          name: "Tobias",
          functions: [
            "tipo_colaboracion_1",
            "tipo_colaboracion_4",
          ]
        },
        {
          type: "type3",
          name: "Jedahee",
          functions: [
            "tipo_colaboracion_2",
            "tipo_colaboracion_3",
          ]
        },
        {
          type: "type3",
          name: "Tuviejita",
          functions: [
            "tipo_colaboracion_6",
          ]
        },
        {
          type: "type3",
          name: "MiViejita",
          functions: [
            "tipo_colaboracion_7",
            "tipo_colaboracion_2",
            "tipo_colaboracion_9",
          ]
        }
      ];

      this.media_project = [
        {
          name: "Steam",
          icon: "icon-steam-project",
          link: "https://store.steampowered.com/?l=spanish"
        },
        {
          name: "Github",
          icon: "icon-gh-project",
          link: "https://store.steampowered.com/?l=spanish"
        },
        {
          name: "Switch",
          icon: "icon-switch-project",
          link: "https://store.steampowered.com/?l=spanish"
        },
        {
          name: "Otro Portal Web",
          icon: "icon-ex-link-project",
          link: "https://store.steampowered.com/?l=spanish"
        },
      ];
    }
  }

  selectLang(event: string) {
    this.translate_s.use(event);
  }
}
