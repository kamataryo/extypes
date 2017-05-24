module.exports = {
  env: {
    browser  : true,
    commonjs : true,
    es6      : true,
    node     : true,
  },
  plugins: [
    'import',
    'ava',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    }
  },
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': ['off'],
    'keyword-spacing': ['error'],
    'linebreak-style': ['error', 'unix'],
    'no-console': ['warn'],
    'no-const-assign': ['error'],
    'no-dupe-args': ['error'],
    'no-trailing-spaces': ['error'],
    'no-unused-vars': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'valid-jsdoc': ['error'],
    'require-jsdoc': ['error', {
      'require': {
        'FunctionDeclaration': true,
        'ClassDeclaration': true,
        'MethodDefinition': true,
        'ArrowFunctionExpression': true      }
    }],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'spaced-comment': [
      'error',
      'always', {
        'line': {
          'markers': ['/'],
          'exceptions': ['-', '+']
        },
        'block': {
          'markers': ['!'],
          'exceptions': ['*'],
          'balanced': true
        }
      }
    ],
    'space-unary-ops': ['error'],
    'space-infix-ops': ['error', { 'int32Hint': false }],
    'sort-imports': ['off'],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [
          'src',
        ],
        extensions: [
          '.js',
        ]
      }
    }
  }
}
