import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  // selector: 'team-news',
  template: `

  <div class="card card-plain card-blog">
  <div class="card-body">
  <div class="framework"><img alt="..." src="assets/img/angular.png" class="avatar"
       /></div>    <h6 class="category text-info">NEWS Web Component from project: news</h6>
    <h4 class="card-title">
      <a href="javascript:void(0)">
      {{ title }}
      </a>
    </h4>
    <p class="card-description">
    {{ content }}
    </p>
    <div class="author">
      <span> {{ author }} </span>
    </div>
  </div>
</div>
  `,
  styles: [
    `
    .card-blog{
      border-bottom:1px solid rgba(255, 255, 255, 0.3);
      border-radius:0px;
    }
    .framework{
      float:left;
      width:30px;
      height:30px;
      position: relative;
      left: -10px;
    }
    `
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class NewsComponent implements OnInit {
  newsMessage: string;
  @Input() title: string;
  @Input() content: string;
  @Input() author: string;
  @Input()
  set message(message: string) {
    this.newsMessage = message;
    this.hurray(message);
  }
  get message(): string {
    return this.newsMessage;
  }
  ngOnInit() {}

  /* constructor() {
    // super();
   } */

  hurray(message) {
    console.log(`I got a MSG ${message}`);
  }
}
