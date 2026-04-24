module.exports = {
    root: true,
    extends: [
        'airbnb-base',
        'plugin:json/recommended',
        'plugin:xwalk/recommended',
    ],
    env: {
        browser: true,
    },
    parser: '@babel/eslint-parser',
    parserOptions: {
        allowImportExportEverywhere: true,
        sourceType: 'module',
        requireConfigFile: false,
    },
    rules: {
        curly: ['warn', 'all'], // enforce curly braces for all control statements
        'function-paren-newline': ['warn', 'consistent'], // enforce consistent line breaks inside function parentheses
        'implicit-arrow-linebreak': ['warn', 'beside'], // enforce single-line arrow functions to be on the same line as the arrow
        'import/extensions': ['error', { js: 'always' }], // require js file extensions in imports
        indent: ['warn', 4], // enforce 4 space indentation
        'linebreak-style': ['error', 'unix'], // enforce unix linebreaks
        'no-confusing-arrow': ['warn', { allowParens: true }], // allow arrow functions to be confused with comparisons if they are enclosed in parentheses
        'no-console': 'off', // allow console logs
        'no-param-reassign': [2, { props: false }], // allow modifying properties of param
        'no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // allow unused variables if they start with an underscore
        'no-use-before-define': ['error', { functions: false }], // allow using functions before they are defined
        'nonblock-statement-body-position': ['warn', 'beside'], // enforce single-line statements to be on the same line as the control statement
        'operator-linebreak': ['warn', 'after'], // enforce linebreak after operator
        'quote-props': ['warn', 'consistent'], // enforce consistent quoting of object properties
        quotes: ['warn', 'single'], // enforce single quotes
    },
};
