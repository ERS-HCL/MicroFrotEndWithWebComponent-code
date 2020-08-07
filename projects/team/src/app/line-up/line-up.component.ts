import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'team-line-up',
  templateUrl: './line-up.component.html',
  styleUrls: ['./line-up.component.scss']
})
export class LineUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadWebComponentLibrary();
  }
  loadWebComponentLibrary() {
    const content = document.getElementById('playerLoader');
    const cardStatsScript = document.createElement('script');
    cardStatsScript.src = 'assets/webComponentLibraries/soccer-player.js';
    content.appendChild(cardStatsScript);
  }

}
