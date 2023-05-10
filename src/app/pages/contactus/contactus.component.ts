import { Component, OnInit, ViewChild } from '@angular/core';
import * as Aos from 'aos';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  public hamburguer_active: boolean = false;

  constructor(private translate_s: TranslateService) { }

  ngOnInit(): void {
    Aos.init({
      disable: function() {
        var maxWidth = 930;
        return window.innerWidth < maxWidth;
      }
    });  
  }

  changeMenuStatus() {
    this.hamburguer_active = !this.hamburguer_active;
  }
  
  selectLang(event: string) {
    this.translate_s.use(event);
  }
}
