import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";

export default class ProgressBarsComponent extends Component {
  tagName = '';

  @tracked progressValue = this.args.progress || 0;

  get cssProperty() {
    let value = (100 - this.progressValue);
    return `transform: translateX(-${value}%)`;
  }
}
