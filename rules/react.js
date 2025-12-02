module.exports = {
  plugins: ['react'],
  extends: ['plugin:react/recommended'],
  rules: {
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-props-no-spreading': 'off',
    'react/forbid-prop-types': 'error',
    'react/self-closing-comp': 'error',
    'react/no-danger': 'warn',
    'react/jsx-no-bind': 'off',
    'react/prop-types': 'error',
    'react/jsx-boolean-value': ['error', 'always'],
    'react/no-unknown-property': 'error',
    'react/jsx-no-useless-fragment': 'warn',
    'react/no-array-index-key': 'warn'
  }
};
