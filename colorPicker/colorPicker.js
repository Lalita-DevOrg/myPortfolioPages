import { LightningElement } from "lwc";

export default class ColorPicker extends LightningElement {
  colors;
  handleColorPicker(event) {
    this.colors = event.target.value;
    /* this.name1 = this.template.querySelector(".colorMeClass");
    this.name1.style.backgroundColor = this.colors;*/
    //Used CSS custom properties (variables)
    this.template.host.style.setProperty("--my-text-bg-colour", this.colors);
  }
}
