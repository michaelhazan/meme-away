import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  ignore: ['**/node_modules/**'],
  ignoreDependencies: ['commitizen', 'husky'],
};

export default config;
