import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-lang',
  templateUrl: './select-lang.component.html',
  styleUrls: ['./select-lang.component.scss']
})
export class SelectLangComponent implements OnInit {

  public lang_selected: string = "";
  public langs: string[] = [];

  constructor() { 
    this.langs = ["es", "en"];
  }

  ngOnInit(): void {
    this.selectLang("es");
  }

  selectLang(lang: string) {
    if (this.langs.includes(lang)) 
      this.lang_selected = lang;
    
  }
}
