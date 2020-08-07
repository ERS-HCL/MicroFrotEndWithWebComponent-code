import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NewsConfig } from '../news.interface';
import { NgElement, NgElementStrategy } from '@angular/elements';
import { Subscription } from 'rxjs';

@Component({
  // selector: 'team-news',
  template: `

  <div class="card card-plain card-blog">
  <div class="card-body">
    <h6 class="category text-info">NEWS WIDGET FROM TEAMS</h6>
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
      border-bottom:1px solid rgba(255, 255, 255, 0.6);
      border-radius:0px;
    }
    `
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class NewsComponent implements OnInit {
  /* ngElementStrategy: NgElementStrategy;
  protected ngElementEventsSubscription: Subscription | null;
  newsMessage: string; */
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
  /*   connectedCallback(){
    console.log(`news connectedCallback`);
  }
  disconnectedCallback(){
    console.log(`news disconnectedCallback`);
  }
  attributeChangedCallback(name, oldValue, newValue) {
    console.log(
      `Custom News element attributes changed. ${name} / ${oldValue} / ${newValue} `
    );
  } */
}
