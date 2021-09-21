module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'es6': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    'react-hooks',
    'import',
  ],
  'ignorePatterns': ['build'],
  'rules': {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'require-jsdoc': 0,
    'object-curly-spacing': ['error', 'always'],
    'linebreak-style': 0,
    'semi': [2, 'always'],
    'indent': ['error', 2, { 'SwitchCase': 1 }],
  },
};
