module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'prettier'
    ],
    extends: [
        'prettier',
        'prettier/react',
        'plugin:@typescript-eslint/recommended',
        'eslint-config-prettier'
    ],
    rules: {
        'prettier/prettier': [
            'error',
            {
                useTabs: true,
                printWidth: 80,
                tabWidth: 4,
                singleQuote: true,
                trailingComma: 'es5',
                jsxBracketSameLine: false,
                semi: false,
            },
        ],
    }
}
