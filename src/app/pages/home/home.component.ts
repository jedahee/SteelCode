import { Component, ViewChild, ElementRef, Output, EventEmitter, AfterViewInit } from '@angular/core';
import * as Aos from 'aos';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild("video") video: ElementRef = <ElementRef>{};
  @Output() select_lang = new EventEmitter();
  
  public hamburguer_active: boolean = false;
  public isVideoViewed: string = "true";

  constructor(private scroller: ViewportScroller, private translate_s: TranslateService, private router: Router) {
    
  }

  changeMenuStatus() {
    this.hamburguer_active = !this.hamburguer_active;
  }

  ngAfterViewInit(): void {
    Aos.init();
    if (localStorage.getItem("isVideoViewed") == undefined) {
      localStorage.setItem("isVideoViewed", this.isVideoViewed)
    } else if (localStorage.getItem("isVideoViewed") == "true") {
      this.scroller.scrollToAnchor("info");
      this.router.navigate([], {fragment: "info"})
    }
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
