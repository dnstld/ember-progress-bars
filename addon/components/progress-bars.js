import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',

  secondary: false,

  progressValue: computed('progress', function() {
    return (100 - this.progress) || 0;
  }),

  cssProperty: computed('progressValue', function() {
    return `transform: translateX(-${this.progressValue}%)`;
  })
});
