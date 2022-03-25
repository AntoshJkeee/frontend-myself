module.exports = {
  "parser": "@babel/eslint-parser",
  "rules": {
    "no-unused-vars": "warn",
    "no-console": "error",
    "semi": "warn",
    "no-var": "warn"
  },
  "plugins": [
    "eslint-webpack-plugin"
  ],
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:eslint-webpack-plugin"
  ],
  "parserOptions": {
    "requireConfigFile": false
  }
}
