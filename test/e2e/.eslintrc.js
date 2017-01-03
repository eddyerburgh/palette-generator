module.exports = {
    parser: 'babel-eslint',
    extends: 'airbnb-base',
    // required to lint *.vue files
    env: {
        browser: true,
    },
    // add your custom rules here
    rules: {
        // don't require .vue extension when importing
        'import/extensions': ['error', 'always', {
            'js': 'never',
            'vue': 'never'
        }],
        'import/no-extraneous-dependencies': 'off',
        'no-unused-expressions': 'off'
    }
};
