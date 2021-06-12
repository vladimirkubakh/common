module.exports = {
    extends: ['airbnb-typescript'],
    parserOptions: {
        project: './tsconfig.json',
    },
    "rules": {
        "indent": ["error", 4],
        "@typescript-eslint/indent": ["error", 4],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-one-expression-per-line": "error",
        "react/jsx-curly-newline": "error",
        "react/require-default-props": "error",
        "import/prefer-default-export": "error",
        "import/no-extraneous-dependencies": "error",
        "arrow-parens": "error",
        "jsx-a11y/click-events-have-key-events": "error",
        "jsx-a11y/no-static-element-interactions": "error",
        "jsx-a11y/label-has-associated-control": "error",
    },
};
