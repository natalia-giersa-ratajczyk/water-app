module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'next',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
  ],
  plugins: ['simple-import-sort', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/prop-types': 'off',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-empty-function': 'off',
  },
};
