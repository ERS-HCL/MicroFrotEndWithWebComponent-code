import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'team-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.scss']
})
export class FixturesComponent implements OnInit {
  fixtures: any[];
  constructor() {}

  ngOnInit(): void {
    this.fixtures = [{
      date: 'Sat 20 Jun',
      home: 'EDGE FC',
      away: 'DEV FC',
      time: '20:00'
    }, {
      date: 'Sun 21 Jun',
      home: 'Build FC',
      away: 'EDGE FC',
      time: '20:00'
    }, {
      date: 'Sat 27 Jun',
      home: 'EDGE FC',
      away: 'Test FC',
      time: '20:00'
    }, {
      date: 'Sun 28 Jun',
      home: 'Build FC',
      away: 'EDGE FC',
      time: '20:00'
    }];
  }
}
