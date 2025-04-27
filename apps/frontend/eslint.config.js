import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import stylistic from "@stylistic/eslint-plugin";

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      "@stylistic": stylistic
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/indent": ["error", 2],
      "@stylistic/comma-dangle": ["error", "never"],
      "@stylistic/object-curly-spacing": ["error", "always"],
      "@stylistic/arrow-parens": ["error", "always"],
      "@stylistic/brace-style": ["error", "1tbs"],
      "@stylistic/space-before-function-paren": ["error", "never"],
      "@stylistic/no-multiple-empty-lines": ["error", { max: 1 }],
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
  {
    files: ['**/ui/**/*.ts', '**/ui/**/*.tsx', '**/tools/theme-provider.tsx'],
    rules: {
      'react-refresh/only-export-components': 'off',
    }
  }
)
