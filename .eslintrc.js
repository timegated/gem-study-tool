module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es2020': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 11
    },
    'rules': {
        'semi': ['error', 'always'],
        'quotes':['error', 'single']
    }
};
