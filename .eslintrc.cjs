module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'prettier', 'react-refresh', 'eslint-plugin-react-refresh'], // Add 'eslint-plugin-react-refresh' here
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
        tabWidth: 2,
        jsxSingleQuote: true,
        printWidth: 100,
        bracketSpacing: true,
        jsxBracketSameLine: true,
        arrowParens: 'always',
      },
    ],
  },
  settings: {
    react: {
      version: '18.2.0',
    },
  },
}
