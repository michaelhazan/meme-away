import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  ignore: ['**/node_modules/**', '**/dist/**', '*.js', '*.mjs', '*.cjs'],
  ignoreDependencies: ['commitizen', 'husky'],
};

export default config;
