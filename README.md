# eslint-config-myconfig
This package provides eslint configuration for front end apps

eslint-config-myconfig
A shareable ESLint configuration for React projects.
Installation

# easy-eslint

A shareable ESLint configuration for React projects.

## Installation

Install the package and its peer dependencies:

```bash
npm install easy-eslint
```

## Usage

### With ESLint >=8.21.0 (Flat Config)

Create an `eslint.config.js` file in your project root:

```javascript
import myconfig from "easy-eslint";

export default [
  ...myconfig
];
```

### With Traditional ESLint Config

Create an `.eslintrc.json` file in your project root:

```json
{
  "extends": ["myconfig"]
}
```

## Features

- Extends Airbnb's ESLint configuration
- Supports React and React Hooks
- Includes accessibility rules (jsx-a11y)
- Enforces import/export best practices
- Adds stylistic rules for consistency
- Supports custom global variables

## License

This project is licensed under the [MIT License](LICENSE).
