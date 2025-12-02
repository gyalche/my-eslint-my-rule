module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    'airbnb',
    'airbnb/hooks',
    './rules/react',
    './rules/eslint-a11y',
    './rules/react-hooks',
    './rules/eslint-base',
    './rules/eslint-import',
    './rules/stylistic',
  ],
  rules: {
    //since airbnb is overiding this rule
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-boolean-value': ['error', 'always']
  }
};
