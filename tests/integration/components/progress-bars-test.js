import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | progress-bars', function(hooks) {
  setupRenderingTest(hooks);

  test('should render with the default values', async function(assert) {
    await render(hbs`<ProgressBars />`);

    assert.dom('#progress-bars').exists();
    assert.dom('#progress-bars__bar').hasAttribute('role', 'progressbar');
    assert.dom('#progress-bars__bar').hasAttribute('aria-valuenow', '0');
    assert.dom('#progress-bars__bar').hasAttribute('aria-valuemin', '0');
    assert.dom('#progress-bars__bar').hasAttribute('aria-valuemax', '100');
    assert.dom('#progress-bars__bar').hasClass('progress-bars__bar');
    assert.dom('#progress-bars__bar').doesNotHaveClass('progress-bars__bar--secondary');
  });

  test('should render with value equal 50', async function(assert) {
    await render(hbs`<ProgressBars @value={{50}} />`);

    assert.dom('#progress-bars__bar').hasAttribute('aria-valuenow', '50');
  });

  test('should render the secondary version', async function(assert) {
    await render(hbs`<ProgressBars @secondary={{true}} />`);

    assert.dom('#progress-bars__bar').hasClass('progress-bars__bar--secondary');
  });
});
