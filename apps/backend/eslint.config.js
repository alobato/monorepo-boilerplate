import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import globals from 'globals';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      'eslint.config.js',
      'node_modules',
      'build',
      'yarn.lock',
      'pnpm-lock.yaml',
      'package-lock.json',
      'package.json'
    ],
    files: ['**/*.ts', '**/*.tsx', '**/*.js'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module'
      },
      globals: {
        ...globals.node,
        ...globals.es2022
      }
    },
    plugins: {
      "@stylistic": stylistic
    },
    rules: {
      "@stylistic/semi": ["error", "always"],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/indent": ["error", 2],
      "@stylistic/comma-dangle": ["error", "never"],
      "@stylistic/object-curly-spacing": ["error", "always"],
      "@stylistic/arrow-parens": ["error", "always"],
      "@stylistic/brace-style": ["error", "1tbs"],
      "@stylistic/no-multiple-empty-lines": ["error", { max: 1 }],
      "no-console": ["warn", { allow: ["warn", "error"] }]
    }
  }
];