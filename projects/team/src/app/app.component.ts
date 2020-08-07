import { TeamService } from './team.service';
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
  // selector: 'team-root',
  template: `
    <div>
      <router-outlet></router-outlet>
    </div>
  `,
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {
  @Input('state')
  set state(state: any) {
    console.log(`Team received new state: ${state}`);
    console.log(state);
    this.teamService.setState(state);
  }

  @Output() messageToClub = new EventEmitter<any>();
  constructor(
    private router: Router,
    private teamService: TeamService
  ) {}
  ngOnInit() {

    this.router.initialNavigation(); // Manually triggering initial navigation for @angular/elements ?
    // this.router.navigate(['/team/fixture']);

    // just for demonstration!
    setTimeout(() => {
      console.log(
        `Team sending signal after 2000ms! ${this.state} -----------------------------------`
      );
      this.messageToClub.next(`Team initialized!`);
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
