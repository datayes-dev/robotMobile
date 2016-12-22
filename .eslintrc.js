'use strict';

// http://eslint.org/docs/user-guide/configuring.html#configuring-rules
const OFF = 0;
const WARNING = 1;
const ERROR = 2;

const eslintrc = {
    extends: 'eslint-config-airbnb',
    parser: 'babel-eslint',
    env: {
        es6: true,
        node: true,
        browser: true
    },
    parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true,
        }
    },
    rules: {
        indent: [ERROR, 4, { SwitchCase: 1 }],
        quotes: [ERROR, 'single'],
        'linebreak-style': [ERROR, 'unix'],
        semi: [ERROR, 'always'],

        // overwrite eslint-config-airbnb-base
        'import/no-extraneous-dependencies': OFF,
        'import/no-unresolved': OFF,
        'max-len': OFF,
        'global-require': OFF,
        'no-param-reassign': [ERROR, { props: false }],

        // overwrite eslint-airbnb
        'comma-dangle': OFF,
        'react/jsx-indent': OFF,
        'react/jsx-filename-extension': [WARNING, { extensions: ['.js', '.jsx'] }]
    },
    plugins: [
        'react'
    ],
    globals: {
        React: true,
        ReactDOM: true,
        mountNode: true
    }
}

module.exports = eslintrc;