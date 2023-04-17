import { Component, ElementRef, ViewChild, OnInit, Input, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arrow-scroll',
  templateUrl: './arrow-scroll.component.html',
  styleUrls: ['./arrow-scroll.component.scss']
})
export class ArrowScrollComponent implements AfterViewInit {
  @ViewChild('arrowScroll') arrowScrollElem: ElementRef = <ElementRef>{};

  public isInTop: boolean = true; 

  constructor(private router: Router) {
    let url = this.router.url.substring(1, this.router.url.length);
    
    if (url == '#video') {
      this.isInTop = true;
    } else if (url == '#info') {
      this.isInTop = false;
    }
  }

  ngAfterViewInit() : void {
    this.scrollArrow();
  }
  
  scrollArrow() {
    console.log(this.arrowScrollElem);
    if (this.isInTop) {
      //this.arrowScrollElem.nativeElement.hash = "#info";
      
    } else {
      //this.arrowScrollElem.nativeElement.hash = "#video";
      
    }

    this.isInTop = !this.isInTop;
  }
}
