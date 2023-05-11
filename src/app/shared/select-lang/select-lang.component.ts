import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-select-lang',
  templateUrl: './select-lang.component.html',
  styleUrls: ['./select-lang.component.scss']
})
export class SelectLangComponent implements OnInit {

  @Output() select_lang = new EventEmitter();

  public lang_selected: string = "";
  public langs: string[] = [];

  constructor(private translate_s: TranslateService) { 
    this.langs = ["es", "en", "pl", "ja", "cs"];
  }

  ngOnInit(): void {
    this.selectLang(localStorage.getItem("lang_sct") || 'es');
  }

  selectLang(lang: string) {
    if (this.langs.includes(lang)) {
      this.lang_selected = lang;
      localStorage.setItem("lang_sct", this.lang_selected);
      this.select_lang.emit(this.lang_selected)
    }
  }
}
