import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'news-core',
  template: `
  <div class="row">
  <div class="col-sm-12">
    <div class="card">
      <div class="card-header">
       <div class="framework"><img alt="..." src="assets/img/angular.png" class="avatar"
       /></div> <h5 class="card-category">NEWS Micro App</h5>
        <h3 class="card-title">NEWS</h3>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-md-8">
    <router-outlet></router-outlet>
  </div>
  <div class="col-md-4">
  <div class="row">
  <div class="col-md-6">
  <div class="framework-JS"><img alt="..." src="assets/img/javascript.png" class="avatar"
  /></div>
  <card-stats label="ranking" value="8" icon="fa-trophy"></card-stats>
  </div>
  <div class="col-md-6">
  <div class="framework-JS"><img alt="..." src="assets/img/javascript.png" class="avatar"
  /></div>
  <card-stats label="standing" value="3" icon="fa-futbol"></card-stats>
  </div>
  </div>
  <news-widget title="Maecenas congue, ante quis dignissim imperdiet" content=" Proin maximus sapien eu interdum pharetra. In sit amet urna vitae orci luctus porttitor vitae lacinia ligula. Suspendisse molestie justo a ante iaculis, a dignissim lectus pulvinar. Integer fermentum urna at odio commodo, non vehicula lacus mattis. Pellentesque congue neque ac justo ultricies fermentum." author="John Deo"></news-widget>
  </div>
</div>
  `,
  styles: [`

  .framework-JS{
    position: absolute;
    z-index: 2;
  }
  .framework-JS .avatar{
    width: 25px;
    height: 25px;
    overflow: hidden;
    border-radius: 0px;
    margin-bottom: 15px;
  }
  .framework{
    float:left;
    width:30px;
    height:60px;
    position: relative;
    left: -10px;
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
