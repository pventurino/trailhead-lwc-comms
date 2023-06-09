import { LightningElement } from "lwc";

export default class Augmentor extends LightningElement {
  startCounter = 0;
  handleStartChange(event) {
    this.startCounter = parseInt(event.target.value, 10);
  }
  handleMaximizeCounter(event) {
    const factor = event.target.dataset.factor;
    this.template.querySelector("c-numerator").maximizeCounter(factor);
  }
}
