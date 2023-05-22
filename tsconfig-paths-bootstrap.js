// eslint-disable-next-line @typescript-eslint/no-var-requires
const tsConfig = require('./tsconfig.json');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const tsConfigPaths = require('tsconfig-paths');

tsConfigPaths.register({
  baseUrl: tsConfig.compilerOptions.outDir,
  paths: tsConfig.compilerOptions.paths,
});
