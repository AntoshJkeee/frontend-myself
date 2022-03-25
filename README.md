# Личный сборщик Webpack

### оставлю тут
путь `/plugins/JavaScriptLanguage/languageService/eslint/bin/eslint-plugin.js`

***
1  
**заменить**  
`this.cliEngineCtor = requireInContext(eslintPackagePath + "lib/api", state.packageJsonPath).CLIEngine;`  
**на**  
`this.cliEngineCtor = requireInContext(eslintPackagePath + "lib/cli-engine").CLIEngine;`

***

2  
**заменить**  
this.CliEngine = require(this.basicPath + "lib/cli-engine");  
**на**  
this.CliEngine = require(this.basicPath).CLIEngine;

***


