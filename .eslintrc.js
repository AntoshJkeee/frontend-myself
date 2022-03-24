module.exports = {
  parser: '@babel/eslint-parser',
  rules: {
    "no-unused-vars": "warn",
    "no-console": "warn",
    "semi": "warn",
    "no-var": "warn",
  },
  env: {
    "es6": true,
    "browser": true,
    "node": true,
  },
  extends: [
    "eslint:recommended"
  ],
  parserOptions: {
    requireConfigFile: false,
  }
};
