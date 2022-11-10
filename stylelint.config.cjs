const config = {
    plugins: [],
    extends: [
        'stylelint-config-recommended',
        'stylelint-config-concentric-order',
    ],
    rules: {
        indentation: 4,
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['global'],
            },
        ],
        'no-descending-specificity': null,
    },
};

module.exports = config;
