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

  public hamburguer_active: boolean = false;

  constructor(private translate_s: TranslateService) {
  }

  changeMenuStatus() {
    this.hamburguer_active = !this.hamburguer_active;
  }

  ngOnInit(): void {
    Aos.init({
      disable: function() {
        var maxWidth = 875;
        return window.innerWidth < maxWidth;
      }
    });
  }

  selectLang(event: string) {
    this.translate_s.use(event);

  }
}
