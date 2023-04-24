import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import * as Aos from 'aos';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
  @Output() select_lang = new EventEmitter();
  constructor(private translate_s: TranslateService) {

  }

  ngOnInit(): void {
    Aos.init();
  }
  
  selectLang(event: string) {
    this.translate_s.use(event);
  }
}
