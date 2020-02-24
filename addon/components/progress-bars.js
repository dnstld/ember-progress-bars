import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";

export default class ProgressBarsComponent extends Component {
  @tracked value = this.args.value || 0;

  get translateX() {
    let translateValue = 100 - this.value;
    return `transform: translateX(-${translateValue}%)`;
  }
}
