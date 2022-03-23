module.exports = {
  parser: '@babel/eslint-parser',
  rules: {
    "no-unused-vars": "warn"
  },
  env: {
    "es6": true,
    "browser": true
  },
  extends: [
    "eslint:recommended"
  ],
  parserOptions: {
    requireConfigFile: false,
  }
}
