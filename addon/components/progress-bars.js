import classic from 'ember-classic-decorator';
import Component from '@ember/component';

@classic
class ProgressBarsComponent extends Component {
  tagName = '';

  value = this.value || 0;

  get translateX() {
    let translateValue = 100 - this.value;
    return `transform: translateX(-${translateValue}%)`;
  }
}

export default ProgressBarsComponent;
