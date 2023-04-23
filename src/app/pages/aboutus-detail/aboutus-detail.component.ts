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

  constructor(private translate_s: TranslateService, private router: Router) {
    this.name = this.router.url.split("/")[2];
  }

  ngOnInit(): void {
    Aos.init();
  }

  selectLang(event: string) {
    this.translate_s.use(event);
  }
}
