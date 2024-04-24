module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { 
    ecmaVersion: 'latest',
    sourceType: 'module', // Include sourceType option within parserOptions
  },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'], // Removed 'prettier' from plugins as it's not necessary
  rules: {
    'prettier/prettier': 'error', // Include prettier rule
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off', // Moved react-in-jsx-scope rule here
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], // Moved jsx-filename-extension rule here
  },
};
