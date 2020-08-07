import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  // selector: 'team-core',
  template: `
  <div class="row">
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">
      <div class="framework">
        <img alt="..." src="assets/img/angular.png" class="avatar"/>
      </div>
        <h5 class="card-category">Team Micro App</h5>
        <h3 class="card-title">Team</h3>
      </div>
      <div class="card-body">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a routerLink="fixture" routerLinkActive="active-route" class="nav-link">Fixture</a>
          </li>
          <li class="nav-item">
            <a routerLink="standings" routerLinkActive="active-route" class="nav-link">Standings</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-md-8">
    <router-outlet></router-outlet>
  </div>
  <div class="col-md-4">
  <div class="frameworkJS">
  <img alt="..." src="assets/img/javascript.png" />
</div>
  <h4 class="text-info">Team Overall Performance</h4>
  <skill-progress label="Wins" progress="50"></skill-progress>
  <skill-progress label="Passing" progress="90"></skill-progress>
  <skill-progress label="Shooting" progress="70"></skill-progress>
  <skill-progress label="dribbling" progress="60"></skill-progress>
  <skill-progress label="tackling" progress="40"></skill-progress>
  <news-widget title="Maecenas congue, ante quis dignissim imperdiet" content=" Proin maximus sapien eu interdum pharetra. In sit amet urna vitae orci luctus porttitor vitae lacinia ligula. Suspendisse molestie justo a ante iaculis, a dignissim lectus pulvinar. Integer fermentum urna at odio commodo, non vehicula lacus mattis. Pellentesque congue neque ac justo ultricies fermentum." author="John Deo"></news-widget>
  </div>
</div>
  `,
  styles: [`
  .framework{
    float:left;
    width:30px;
    height:30px;
    position: relative;
    left: -10px;
  }
  .frameworkJS {
    float: left;
    width: 30px;
    height: 30px;
    position: absolute;
    left: 15px;
    top: 0px;
  }
  .text-info{
    margin-left:40px;
  }
  .frameworkJS img {
    border-radius: 0px;
  }
  .navPills {
    border-bottom: 4px solid #c70101;
  }
  .active-route {
    color: #ffffff;
    background-color: transparent;
    border-bottom: 4px solid #e14eca;
  }
  `]
})
export class CoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
