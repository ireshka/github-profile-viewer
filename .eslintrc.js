module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    /**
     * @info General
     */
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jest/all',
    'plugin:jest-dom/recommended',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    /**
     * @info React
     */
    'airbnb',
    'airbnb/hooks',
    'plugin:testing-library/react',
    /**
     * @info Typescript
     */
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    /**
     * @info Prettier
     */
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    /**
     * @info General eslint plugins
     */
    'jest',
    'jest-dom',
    'prettier',
    'promise',
    'simple-import-sort',
    'unicorn',
    /**
     * @info React eslint plugins
     */
    'testing-library',
    'better-styled-components',
    /**
     * @info Typescript
     */
    '@typescript-eslint',
  ],
  rules: {
    /**
     * @info eslint-plugin-import
     */
    'import/prefer-default-export': 'off',
    /**
     * @info better-styled-components rules
     */
    'better-styled-components/sort-declarations-alphabetically': 'error',
    /**
     * @info fix errors
     */
    'testing-library/no-await-sync-events': 'off',
    /**
     * @info unicorn rules
     */
    'unicorn/filename-case': 'off',
    'unicorn/import-index': 'off',
    'unicorn/import-style': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-reduce': 'off',
    'unicorn/numeric-separators-style': 'off',
    'unicorn/prefer-ternary': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        checkFilenames: false,
        checkProperties: true,
        replacements: {
          props: {
            properties: false,
          },
        },
      },
    ],
    /**
     * @info simple-import-sort
     */
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    /**
     * @info for React 17+
     */
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    /**
     * @info quick fixes
     */
    'no-console': 'off',
    'react/prop-types': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['src'],
      },
    },
    jest: {
      version: 'detect',
    },
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['.eslintrc.js', '*.config.js'],
      rules: {
        'unicorn/prevent-abbreviations': 'off',
      },
    },
  ],
};
