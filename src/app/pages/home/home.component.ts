import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import * as Aos from 'aos';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild("video") video: ElementRef = <ElementRef>{};
  @Output() select_lang = new EventEmitter();
  
  public hamburguer_active: boolean = false;

  constructor(private translate_s: TranslateService) {

  }

  changeMenuStatus() {
    this.hamburguer_active = !this.hamburguer_active;
  }

  ngOnInit(): void {
    Aos.init();
  }

  selectLang(event: string) {
    this.translate_s.use(event);
  }

  changeStatusVideo($event: string) {
    if ($event == "play") {
      this.video.nativeElement.play();
    } else if ($event == "pause") {
      this.video.nativeElement.pause();
    }
  }
}
