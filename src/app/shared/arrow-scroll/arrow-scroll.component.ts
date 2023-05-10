import { Component, ElementRef, ViewChild, Output, AfterViewInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arrow-scroll',
  templateUrl: './arrow-scroll.component.html',
  styleUrls: ['./arrow-scroll.component.scss']
})
export class ArrowScrollComponent implements AfterViewInit {
  @ViewChild('arrowScroll') arrowScrollElem: ElementRef = <ElementRef>{};
  @Output() videoPlayEvent = new EventEmitter<string>();

  public isInTop: boolean = true; 

  constructor(private router: Router) {

  }

  ngAfterViewInit() : void {
    let url = this.router.url.substring(1, this.router.url.length);
    
    if (url == '#info')
      this.isInTop = false;
    
    if (localStorage.getItem("isVideoViewed") == "true")
      this.isInTop = false;
    

    this.scrollArrow(false);
  }
  
  scrollArrow(isClicking: boolean) {
    if (this.isInTop)
      this.arrowScrollElem.nativeElement.href = "#info";
    else 
      this.arrowScrollElem.nativeElement.href = "#video";  

    if (isClicking) {       
      this.isInTop = !this.isInTop;

      if (this.isInTop)
        this.changeStatusVideo("play");
      else    
        this.changeStatusVideo("pause");
    } 
  }


  changeStatusVideo(value: string) {
    this.videoPlayEvent.emit(value);
  }


}
