module.exports = {
    tabWidth: 4,
    jsxSingleQuote: true,
    jsxBracketSameLine: true,
    printWidth: 200,
    // proseWrap:always,
    singleQuote: true,
    bracketSpacing: true,
    semi: false,
    overrides: [
        {
            files: '*.json',
            options: {
                printWidth: 200,
            },
        },
    ],
    arrowParens: 'always',
}
