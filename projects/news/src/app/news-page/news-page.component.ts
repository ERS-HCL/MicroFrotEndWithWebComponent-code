import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'news-page',
  template: `
  <div class="row">
  <div class="col-sm-12">
    <div class="card card-blog card-plain blog-horizontal">
      <div class="row">
        <div class="col-lg-4">
          <div class="card-image">
            <a href="javascript:void(0)"
              ><img class="img rounded" src="assets/img/news2.jpg"
            /></a>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="card-body">
            <h3 class="card-title">
              <a href="javascript:void(0)">
                Donec maximus sapien eget libero fringilla
              </a>
            </h3>
            <p class="card-description">
              Etiam iaculis dapibus malesuada. Suspendisse rhoncus mi quis arcu
              aliquet, eget tincidunt dui hendrerit. Proin molestie enim urna, a
              venenatis risus porttitor vitae. Sed ac sollicitudin neque. Proin
              scelerisque ornare convallis. Nulla facilisi. Pellentesque
              ultricies rhoncus sollicitudin. Nunc id iaculis ligula, sed
              aliquam risus. Etiam nec dui eros....
              <a href="javascript:void(0)"> Read More </a>
            </p>
            <div class="author">
              <img
                alt="..."
                class="avatar img-raised"
                src="assets/img/james.jpg"
              />
              <div class="text">
                <span class="name">James Cliff</span>
                <div class="meta">2h</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card card-blog card-plain blog-horizontal">
      <div class="row">
        <div class="col-lg-4">
          <div class="card-image">
            <a href="javascript:void(0)"
              ><img class="img rounded" src="assets/img/news3.jpg"
            /></a>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="card-body">
            <h3 class="card-title">
              <a href="javascript:void(0)">
                Aliquam orci nec, cursus leo
              </a>
            </h3>
            <p class="card-description">
              Nunc non gravida quam. Phasellus commodo elit a erat consectetur
              ullamcorper. Ut porta congue risus, vel egestas arcu dignissim
              non. Donec aliquam nunc non lacus suscipit blandit. Morbi vel
              lacus lobortis, imperdiet felis sed, rutrum diam. Curabitur
              pulvinar lorem sit amet sem fringilla, sit amet pulvinar quam
              sagittis. Sed sagittis ipsum at iaculis viverra....
              <a href="javascript:void(0)"> Read More </a>
            </p>
            <div class="author">
              <img
                alt="..."
                class="avatar img-raised"
                src="assets/img/mike.jpg"
              />
              <div class="text">
                <span class="name">Mike Hogan </span>
                <div class="meta">3 day ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `,
  styles: [
    `
    .card-blog.blog-horizontal .author .avatar {
      width: 40px;
      height: 40px;
      position: absolute;
  }
    .card-blog.blog-horizontal .author {
      position: relative;
      display: inline-block;
      text-align: left;
      margin: 20px auto 0;
  }
  .card-blog.blog-horizontal .author .text {
    position: relative;
    left: 55px;
    top: 1px;
  }
    `
  ],
})
export class NewsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
