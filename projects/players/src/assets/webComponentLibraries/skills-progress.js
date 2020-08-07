class SkillProgress extends HTMLElement {
  label;
  width;
  color;
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.label = this.getAttribute('label');
    const value = parseInt(this.getAttribute("progress"));
    this.color = setProgressColor(value);
    this.width = this.getAttribute('progress') + '%';
    this.update();
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.label = this.getAttribute('label');
    const value = parseInt(this.getAttribute("progress"));
    this.color = setProgressColor(value);
    this.width = this.getAttribute('progress') + '%';
    this.update();
  }
  update() {
    const template = `  
      <style>  
      h2{
        font-weight: 100;
        font-size: 10px;
        margin: 5px 0;
        color: rgba(255, 255, 255, 0.8);
        font-family: "Poppins", sans-serif;
        text-transform: uppercase;
        letter-spacing: 2px;
    }
    hr {
        margin: 5px 0 10px 0;
        height: 6px;
        border-radius: 3px;
        border: 0px;
        width: ${this.width};
    }
    
    hr.primary {
        background-color: #e14eca
    }
    
    hr.info {
        background-color: #1d8cf8
    }
    
    hr.success {
        background-color: #00f2c3
    }
    
    hr.warning {
        background-color: #ff8d72
    }
    
    hr.danger {
        background-color: #fd5d93
    }
    
    hr.deafult {
        background-color: #344675
    }
      </style>  
      <div class='skill-progress'>
        <h2>${this.label}</h2>
        <hr class="${this.color}">
        </div>
    `;
    this.shadowRoot.innerHTML = template;
  }
}

customElements.define('skill-progress', SkillProgress);

function setProgressColor(value) {
  switch (true) {
    case value <= 30:
      return 'danger';
      break;
    case value > 30 && value <= 50:
      return 'warning';
      break;
    case value > 50 && value <= 80:
      return 'primary';
      break;
    case value > 80:
      return 'success';
      break;
    default:
      return 'default';
      break;
  }
}
