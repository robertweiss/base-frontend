module.exports = {
    root: true,
    parserOptions: {
        parser: "babel-eslint",
        sourceType: "module",
    },
    extends: [
        "eslint:recommended",
        "prettier",
        "prettier/standard",
        "plugin:vue/essential"
    ],
    plugins: ["vue", "prettier", "import"],
    env: {
        browser: true,
        es6: true,
        commonjs: true,
        jest: true
    },
    settings: {
        "import/resolver": [
            "webpack"
        ],
        "import/extensions": [
            ".js",
            ".mjs",
            ".vue",
        ],
        "import/ignore": [
            "node_modules",
            "\\.(coffee|scss|css|less|hbs|svg|json)$",
        ]
    },
    rules: {
        // Prettier
        "prettier/prettier": ["warn", {
            "arrowParens": "always",
            "bracketSpacing": false,
            "printWidth": 160,
            "singleQuote": true,
            "tabWidth": 4,
            "trailingComma": "none",
        }],
        // Vue
        "vue/html-closing-bracket-spacing": ["warn", {
            "startTag": "never",
            "endTag": "never",
            "selfClosingTag": "always"
        }],
        "vue/html-indent": ["warn", 4],
        "vue/html-self-closing": ["warn", {
            "html": {
                "void": "always",
                "normal": "always",
                "component": "always"
            },
            "svg": "always",
            "math": "always"
        }],
        "vue/html-quotes": ["warn", "double"],
        "vue/max-attributes-per-line": ["warn", {
            "singleline": 20,
            "multiline": {
                "max": 1,
                "allowFirstLine": false
            }
        }],
        "vue/mustache-interpolation-spacing": ["warn", "always"],
        "vue/no-spaces-around-equal-signs-in-attribute": "warn",
        "vue/order-in-components": "warn",
        "vue/this-in-template": ["warn", "never"],
        // Import
        "import/extensions": ["warn", "always", {
            js: "never",
            vue: "never"
        }],
        "import/first": "warn",
        "import/order": "warn",
        "import/named": "error",
        "import/newline-after-import": "warn",
        "import/no-cycle": "error",
        "import/no-duplicates": "error",
        "import/no-self-import": "error",
        "import/no-unresolved": "error",
        "import/no-useless-path-segments": "error",
        // ESLint
        "newline-per-chained-call": ["warn", {
            ignoreChainWithDepth: 2
        }],
        "no-var": "error",
        "no-console": "off",
        "no-debugger": "off",
        "prefer-const": "error"
    }
};
