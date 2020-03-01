/* eslint-disable no-undef */
module.exports = {
  extends: 'stylelint-config-standard',
  plugins: [
    'stylelint-scss',
    'stylelint-order',
    'stylelint-high-performance-animation',
    'stylelint-a11y',
    'stylelint-selector-bem-pattern'
  ],
  rules: {
    // Enable SCSS linting
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,

    // Config
    'string-quotes': 'double',
    'function-url-quotes': 'always',
    'color-hex-length': 'long',
    'max-nesting-depth': 2,
    'number-leading-zero': 'never',
    'order/properties-alphabetical-order': true,
    'a11y/media-prefers-reduced-motion': true,
    'a11y/no-outline-none': true,
    'a11y/selector-pseudo-class-focus': true,
    'plugin/selector-bem-pattern': {
      'componentName': '[A-Z]+',
      'componentSelectors': {
        'initial': '^\\.{componentName}(?:-[a-z]+)?$',
        'combined': '^\\.combined-{componentName}-[a-z]+$'
      },
      'utilitySelectors': '^\\.util-[a-z]+$'
    }
  }
};
