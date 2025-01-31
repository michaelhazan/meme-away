import pluginJs from '@eslint/js';
import nestjsPedantic from 'eslint-plugin-nestjs-pedantic';
import nitpick from 'eslint-plugin-nitpick';
import prettierPlugin from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{ts,tsx}'],
  },
  {
    ignores: ['**/node_modules/**', '**/dist/**', '*.js', '*.mjs', '*.cjs'],
  },
  { languageOptions: { globals: globals.browser } },
  {
    plugins: { prettier: prettierPlugin },
    rules: { 'prettier/prettier': 'warn' },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    rules: { 'react/react-in-jsx-scope': 'off' },
  },
  nitpick.configs.all,
  nestjsPedantic.configs.all,
];
