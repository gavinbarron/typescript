module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
    ],
    plugins: ["react", "@typescript-eslint", "prettier"],
    env: {
        browser: true,
        jasmine: true,
        jest: true
    },
    globals: {
        process: "readable"
    },
    rules: {
        "prettier/prettier": ["error", { singleQuote: true }],
        "react/react-in-jsx-scope": "off",
        "react/no-unknown-property": ["error", { ignore: ["class", "for"] }],
        "@typescript-eslint/no-unused-vars": [
            "error",
            { varsIgnorePattern: "^h$" }
        ]
    },
    settings: {
        react: {
            pragma: "React",
            version: "16.8"
        }
    },
    parser: "@typescript-eslint/parser"
};
