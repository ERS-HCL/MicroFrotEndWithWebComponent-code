const carsStatsTemplate = document.createElement("template");
carsStatsTemplate.innerHTML = `
<style>
p.profile-description {
  /*     font-weight: 100;
  font-size: 36px;
  line-height: 36px; */
  max-width: 450px;
  font-size: 36px;
  line-height: 36px;
  font-weight: 100;
}
/*  .card-header {
  width: 200px;
} */
.card-stats {
  margin-bottom: 0;
}
.card .card-body {
  padding: 15px;
}
.card-stats .icon-big {
  font-size: 3em;
  min-height: 64px;
}
.card-stats .card-body .numbers {
  text-align: right;
  font-size: 2em;
}
.card-stats .card-body .numbers p {
  margin-bottom: 0;
}
.profile{
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    margin-bottom: 15px;
}

</style>
<div class="card card-stats ">
<div class="card-body">
  <div class="row">
    <div class="col-5 col-md-4">
      <div class="icon-big text-center icon-warning">
        <i class="fas"></i>
      </div>
    </div>
    <div class="col-7 col-md-8">
      <div class="numbers">
        <p class="card-title"></p>
        <p></p>
        <p class="card-category"></p>
      </div>
    </div>
  </div>
</div>
</div>
`;
class CardStats extends HTMLElement {
  constructor() {
    super();
    // this.attachShadow({ mode: 'closed' });
    this.appendChild(carsStatsTemplate.content.cloneNode(true));
    this.querySelector("p.card-category").innerText = this.getAttribute(
      "label"
    );
    this.querySelector("p.card-title").innerText = this.getAttribute("value");
    const icon = this.getAttribute("icon");
    const color = this.getAttribute("color");
    this.querySelector("i").className += " " + icon + " " + color;
  }
}

customElements.define("card-stats", CardStats);
