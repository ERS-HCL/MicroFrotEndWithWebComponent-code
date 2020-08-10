import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation
} from '@angular/core';
import { Router } from '@angular/router';
import { PlayersService } from './players.service';

@Component({
  // selector: 'player-root',
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
    console.log(`Team received new state: ${state}`);
    console.log(state);
    this.title = state;
    this.playersService.setState(state);
  }

  @Output() messageToClub = new EventEmitter<any>();
  constructor(
    private router: Router,
    private playersService: PlayersService
  ) {}
  ngOnInit() {

    /* this will be called once user select a book for adding into the cart */
    this.playersService.data.subscribe(data => {
      this.messageToClub.next(data);
    });
    this.playersService.getInvite().subscribe(data => {
      this.messageToClub.next(data);
    });

    this.router.initialNavigation(); // Manually triggering initial navigation for @angular/elements ?
    // this.router.navigate(['/players/cards']);

    // just for demonstration!
    setTimeout(() => {
      console.log(
        `Player sending signal after 2000ms! ${this.title} -----------------------------------`
      );
      this.messageToClub.next(`Player initialized!`);
    }, 2000);
  }

  /* sendMessageToClub(msg) {
    this.teamService.setState(msg);
    console.log(
      `Team sending through click! state: ${msg} -----------------------------------`
    );
    this.messageToClub.next(msg);
  } */
}

