module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    '@amatias/eslint-config-ts',
    '@amatias/eslint-config-jsx'
  ],
  settings: {
    react: {
      version: '17.0'
    }
  },
  rules: {
    'jsx-quotes': [
      'error',
      'prefer-double'
    ],
    'react/react-in-jsx-scope': 'off'
  }
}
