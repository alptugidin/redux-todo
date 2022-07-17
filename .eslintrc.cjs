module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        "no-unused-vars": "warn",
        "import/prefer-default-export": "off",
        "no-param-reassign": 0,
        "no-mixed-spaces-and-tabs": 0,
        "react/prop-types": "off",
        "no-tabs": 0,
        "no-console" : 0
    },
};
