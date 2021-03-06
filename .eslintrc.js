module.exports = {
  "env": {
    "es6": true,
    "shared-node-browser": true
  },
  "parserOptions": {
    "sourceType": "module"
  }
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "plugins": [
    "react-hooks",
    "react"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "indent": [
      "error",
      2,
      {
        "flatTernaryExpressions": true,
        "SwitchCase": 1
      }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^ignored",
        "varsIgnorePattern": "^ignored"
      }
    ],
    "react/display-name": 0,
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "quotes": [
      "error",
      "single",
      {
        "allowTemplateLiterals": true
      }
    ],
    "block-spacing": [
      "error",
      "always"
    ],
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "semi": [
      "error"
    ]
  }
}
