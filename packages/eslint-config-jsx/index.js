module.exports = {
  plugins: [
    'react'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/react-in-jsx-scope': [0, {}],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-closing-tag-location': [2],
    'react/jsx-curly-brace-presence': [2, 'never'],
    'react/jsx-curly-newline': [2, { multiline: 'consistent', singleline: 'consistent' }],
    'react/jsx-curly-spacing': [2, { when: 'never', children: true }],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-tag-spacing': [2, { beforeSelfClosing: 'always', beforeClosing: 'never' }],
    'react/jsx-max-props-per-line': [2, { when: 'multiline' }],
    'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
    'react/jsx-props-no-multi-spaces': [2],
    'react/jsx-wrap-multilines': [2, { declaration: 'parens-new-line', assignment: 'parens-new-line', return: 'parens-new-line', arrow: 'parens-new-line', condition: 'parens-new-line', logical: 'parens-new-line', prop: 'parens-new-line' }]
  }
}
