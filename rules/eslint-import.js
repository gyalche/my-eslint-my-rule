module.exports = {
  rules: {
    'import/imports-first': 'error',
    'import/newline-after-import': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-unresolved': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-cycle': 'warn',
    'import/order': [
      'warn',
      { groups: ['builtin', 'external', 'internal'], 'newlines-between': 'always' },
    ],
  },
};
