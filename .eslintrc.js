module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier', 'import'],
  rules: {
    'no-console': 'warn',
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        trailingComma: 'es5',
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        arrowParens: 'always',
      },
    ],
    'import/order': ['warn', { 'newlines-between': 'always' }],

    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let'],
      },
    ],
  },
};
