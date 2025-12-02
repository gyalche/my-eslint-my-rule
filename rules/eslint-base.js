module.exports = {
  parser: '@babel/eslint-parser',
  extends: ['eslint:recommended', 'airbnb'],
  plugins: ['import', '@stylistic/js'],
  globals: {
    MyGlobal: true
  },
  rules: {
    'max-len': ['error', { code: 150 }],
    'arrow-body-style': ['error', 'as-needed'],
    'prefer-template': 'error',
    'no-var': 'error',
    'class-methods-use-this': 'off',
    'arrow-parens': 'off',
    'import/imports-first': 'error',
    'import/newline-after-import': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-unresolved': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-cycle': 'warn',
    'import/order': ['warn', { groups: ['builtin', 'external', 'internal'], 'newlines-between': 'always' }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-use-before-define': 'error',
    'no-param-reassign': ['error', { props: false }],
    'no-underscore-dangle': ['error', { allow: ['_id'] }]
  }
};
