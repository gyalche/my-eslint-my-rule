module.exports = {
  plugins: ['@stylistic/js'],
  rules: {
    '@stylistic/js/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
    '@stylistic/js/indent': ['error', 2, { SwitchCase: 1 }],
    '@stylistic/js/comma-dangle': ['error', 'always-multiline'],
    '@stylistic/js/object-curly-spacing': ['error', 'always'],
    '@stylistic/js/array-bracket-spacing': ['error', 'never'],
    '@stylistic/js/arrow-parens': ['error', 'as-needed'],
    '@stylistic/js/no-confusing-arrow': 'off',
    '@stylistic/js/newline-per-chained-call': 'error',
  }
};
