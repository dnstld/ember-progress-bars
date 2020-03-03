import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";

export default class ProgressBarsComponent extends Component {
  tagName = '';

  @tracked progress = this.args.progress || 0;

  get translateX() {
    let translateValue = 100 - this.progress;
    return `transform: translateX(-${translateValue}%)`;
  }
}
