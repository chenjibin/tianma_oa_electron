module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  globals: {
    __static: true
  },
  plugins: [
    'html'
  ],
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'indent': 0,
    'semi': 0,
    'no-unused-vars': 0,
    'no-new': 0,
    'no-undef': 0,
    'one-var': 0,
    'eqeqeq': 0,
    'no-mixed-operators': 0,
    'no-throw-litera': 0,
    'no-throw-literal': 0,
    'handle-callback-err': 0,
    'no-dupe-keys': 0,
    'no-sequences': 0,
    'no-unused-expressions': 0,
    'no-use-before-define': 0,
    'object-curly-even-spacing': 0
  }
}
