module.exports = {
  extends: "@rocketseat/eslint-config/node",
  rules: {
    "prettier/prettier": ["error", {
      "singleQuote": false,
    }],
  "import-helpers/order-imports": [
    "warn",
    {
      "newlinesBetween": "always",
      "groups": [
        'module',
        ['parent', 'sibling', 'index']
      ],
      "alphabetize": {
        "order": "asc",
        "ignoreCase": true
      }
    }
  ]
  }
}