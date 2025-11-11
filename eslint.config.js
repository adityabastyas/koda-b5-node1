import globals from 'globals';
import { defineConfig } from 'eslint/config';
import stylistic from '@stylistic/eslint-plugin';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: globals.node,
    },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      semi: 'error',
      'no-var': 'error',
      '@stylistic/quotes': ['error'],
      'prefer-const': 'error', // ubah ke const
      'no-dupe-else-if': 'error', // jangan duplikat
      // 'id-length': 'error',
      // "for-direction": "error",
      // "no-case-declarations": "error",
    },
  },
]);
