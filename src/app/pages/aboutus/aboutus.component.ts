import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import * as Aos from 'aos';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

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
