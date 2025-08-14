import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default [
  { ignores: ['**/node_modules/**', '**/dist/**', '**/.next/**', '**/.turbo/**'] },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  ...compat.config({
    extends: ['next/core-web-vitals'],
  }),

  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
      globals: { ...globals.node, ...globals.browser },
    },
    rules: {},
  },
];
