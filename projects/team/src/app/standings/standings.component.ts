import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeamService } from '../team.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'team-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(private teamService: TeamService) {

  }

  ngOnInit(): void {
    this.subscription = this.teamService.getState().subscribe(data => {
      console.log('Init ' + data);
    });
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
