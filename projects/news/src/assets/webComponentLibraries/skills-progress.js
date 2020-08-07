const skillProgressTemplate = document.createElement("template");
skillProgressTemplate.innerHTML = `
<style>
h2{
  font-weight: 100;
  font-size: 10px;
  margin: 5px 0;
  color: rgba(255, 255, 255, 0.8);
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: left;
}
hr {
    margin: 5px 0 10px 0;
    height: 6px;
    border-radius: 3px;
    border: 0px;
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
        <h2></h2>
        <hr class="deafult">
        </div>`;
class SkillProgress extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(skillProgressTemplate.content.cloneNode(true));
    this.shadowRoot.querySelector("h2").innerText = this.getAttribute("label");
    this.shadowRoot.querySelector("hr").style.width =
      this.getAttribute("progress") + "%";
  }
  connectedCallback() {
    const value = parseInt(this.getAttribute("progress"));
    this.shadowRoot.querySelector("hr").className = setProgressColor(value);
  }
}

customElements.define("skill-progress", SkillProgress);

function setProgressColor(value) {
  switch (true) {
    case value <= 30:
      return "danger";
      break;
    case value > 30 && value <= 50:
      return "warning";
      break;
    case value > 50 && value <= 80:
      return "primary";
      break;
    case value > 80:
      return "success";
      break;
    default:
        return "default";
      break;
  }
}
