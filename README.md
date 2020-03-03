[wip] ember-progress-bars [![Build Status](https://travis-ci.org/dnstld/ember-progress-bars.svg?branch=master)](https://travis-ci.org/dnstld/ember-progress-bars) [![npm](https://img.shields.io/npm/v/ember-progress-bars.svg)](https://www.npmjs.com/package/ember-progress-bars) [![Ember Observer Score](http://emberobserver.com/badges/ember-progress-bars.svg)](http://emberobserver.com/addons/ember-progress-bars)
==============================================================================

A simple Ember.js progress bar.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.8 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-progress-bars
```


Usage
------------------------------------------------------------------------------

The way to add the progress bar is with the `<ProgressBars />` component:

```hbs
<ProgressBars />
```

```scss
@import "ember-progress-bars";
```

Custom SCSS variables

```scss
$progress-bars-height: .5rem !default;
$progress-bars-radius: .25rem !default;
$progress-bars-background: #f1f1f1 !default;

$progress-bars__bar-primary: #2c2c34 !default;
$progress-bars__bar-secondary: #6B7F94 !default;
$progress-bars__bar-duration: .3s !default;
$progress-bars__bar-timing: ease-in-out !default;

@import "ember-progress-bars";
```

Options
------------------------------------------------------------------------------

The options are:

#### `value`

| Type   | Default |
|--------|---------|
| Number | 0       |

Defines the progress value

`<ProgressBars @value={{50}} />`

#### `secondary`

| Type    | Default |
|---------|---------|
| Boolean | 0       |

Defines the progress bar color to `#6B7F94`

`<ProgressBars @secondary={{true}} />`

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
