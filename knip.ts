import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  ignore: ['**/node_modules/**'],
  ignoreDependencies: ['commitizen', 'husky', 'cspell'],
};

export default config;
