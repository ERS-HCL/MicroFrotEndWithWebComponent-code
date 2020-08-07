import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // selector: 'news-root',
  template: `
    <div>
      <router-outlet></router-outlet>
    </div>
  `,
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {
  title: any;
  @Input('state')
  set state(state: any) {
    // this.title = state;
    console.log(`News received new state: ${state}`);
    console.log(state);
    this.title = state;
  }

  @Output() messageToClub = new EventEmitter<any>();
  constructor(
    private router: Router
  ) {}
  ngOnInit() {

    this.router.initialNavigation(); // Manually triggering initial navigation for @angular/elements ?
    this.router.navigate(['/news/newsPage']);

    // just for demonstration!
    setTimeout(() => {
      console.log(
        `NEWS sending signal after 2000ms! ${this.title} -----------------------------------`
      );
      this.messageToClub.next(`NEWS initialized!`);
    }, 2000);
  }
}
