import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {

  @Input() timeline: string;
  @Input() style: string;

  @ViewChild('twitter') el: ElementRef;

  constructor() { }

  ngOnInit() {

    var js = document.createElement("script");
    js.setAttribute("src", "https://platform.twitter.com/widgets.js");
    js.setAttribute("async", "true");
    js.setAttribute("charset", "utf-8");
    document.getElementsByTagName("head").item(0).appendChild(js);

    if (this.style == "grid") {
      this.el.nativeElement.setAttribute("class", "twitter-grid");
    } else if (this.style == "timeline") {
      this.el.nativeElement.setAttribute("class", "twitter-timeline");
    } else {
      this.el.nativeElement.setAttribute("class", "twitter-grid");
    }

    this.el.nativeElement.setAttribute("href", "http://twitter.com/" + this.timeline);

  }

}
