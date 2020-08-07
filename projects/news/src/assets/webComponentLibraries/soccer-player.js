const SoccerPlayerTemplate = document.createElement('template');
SoccerPlayerTemplate.innerHTML = `
<style>'

svg{
    width: 56px;
    height: 56px;
}
div{
    width: 56px;
    height: 56px;
    position: relative;
}
.player-number{
    font-weight: 300;
    font-size: 12px;
    color: #000000;
    font-family: "Poppins", sans-serif;
    position: absolute;
    top: 10px;
    left: 20px;
    width: 14px;
    height: 14px;
    text-align: center;
}
.player-name{
    font-weight: 100;
    font-size: 14px;
    margin: 5px 0;
    color: rgba(255, 255, 255, 0.8);
    font-family: "Poppins", sans-serif;
    position: absolute;
    top: 32px;
    left: 3px;
    width: 60px;
}

</style>
<div class="soccer-player">
<svg>
          <radialGradient
            id="SVGID_1_"
            cx="-132.8827"
            cy="37.7079"
            r="26.1309"
            gradientTransform="matrix(0.92 0 0 0.3053 151.275 23.3399)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.1403" style="stop-color:#1A181D"></stop>
            <stop
              offset="0.7601"
              style="stop-color:#1A181D;stop-opacity:0"
            ></stop>
          </radialGradient>
          <ellipse
            opacity="0.4"
            fill="url(#SVGID_1_)"
            cx="29"
            cy="34.9"
            rx="23.8"
            ry="6.9"
          ></ellipse>
          <path
            fill="#c00000"
            stroke="#FFFFFF"
            stroke-miterlimit="10"
            d="M40.2,3.9c-1-1.8-2.5-2-4-2.2s-4.5-1-4.7-1.1c-1.2-0.4-2.2,0.1-3.2,0.1c-1,0-2-0.5-3.2-0.1c-0.2,0.1-3.2,0.9-4.7,1.1c-1.5,0.2-3,0.4-4,2.2c-1,1.8-5.6,9.5-5.6,9.5l6,3l2.4-3.3c0,0,0.6,5.3,0.6,8.1s-0.7,9.5-0.3,12c0,0,0.4,1.2,8.3,1.2h0.9c7.9,0,8.3-1.2,8.3-1.2c0.4-2.5-0.2-9.2-0.2-12s0.6-8.1,0.6-8.1l2.4,3.3l6-3.1C45.8,13.4,41.2,5.7,40.2,3.9z"
          ></path>
          <rect
            x="11.7"
            y="12.7"
            transform="matrix(0.891 0.454 -0.454 0.891 7.5123 -5.4519)"
            fill="#010101"
            width="6.9"
            height="0.4"
          ></rect>
          <rect
            x="41.3"
            y="9.5"
            transform="matrix(0.4535 0.8913 -0.8913 0.4535 34.193 -29.9195)"
            fill="#010101"
            width="0.4"
            height="6.9"
          ></rect>
          <path
            fill="#010101"
            d="M28.7,32.5h-0.9c-7.7,0-8.4-1.1-8.5-1.3l0.4-0.2c0,0,0.8,1.1,8.1,1.1h0.9c7.4,0,8.1-1,8.1-1.1l0.4,0.2C37.1,31.3,36.4,32.5,28.7,32.5z"
          ></path>
          <path
            fill="none"
            stroke="#010101"
            stroke-miterlimit="10"
            d="M40.2,3.9c-1-1.8-2.5-2-4-2.2s-4.5-1-4.7-1.1c-1.2-0.4-2.2,0.1-3.2,0.1c-1,0-2-0.5-3.2-0.1c-0.2,0.1-3.2,0.9-4.7,1.1c-1.5,0.2-3,0.4-4,2.2c-1,1.8-5.6,9.5-5.6,9.5l6,3l2.4-3.3c0,0,0.6,5.3,0.6,8.1s-0.7,9.5-0.3,12c0,0,0.4,1.2,8.3,1.2h0.9c7.9,0,8.3-1.2,8.3-1.2c0.4-2.5-0.2-9.2-0.2-12s0.6-8.1,0.6-8.1l2.4,3.3l6-3.1C45.8,13.4,41.2,5.7,40.2,3.9z"
          ></path>
        </svg>
<span class="player-name"></span>
<span class="player-number"></span>
</div>
`;
class SoccerPlayer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(SoccerPlayerTemplate.content.cloneNode(true));
    this.shadowRoot.querySelector(
      'span.player-name'
    ).innerText = this.getAttribute('name');
    this.shadowRoot.querySelector(
      'span.player-number'
    ).innerText = this.getAttribute('number');
  }
}

customElements.define('soccer-player', SoccerPlayer);
