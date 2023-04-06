module.exports = {
  extends: "@rocketseat/eslint-config/react",
  pluguins: ["eslint-plugin-import-helpers"],
  rules: {
    "prettier/prettier": ["error", {
      "singleQuote": false,
    }],
  "import-helpers/order-imports": [
    "warn",
    {
      "newlinesBetween": "always",
      "groups": [
        ['/^react/', '/^@next/', '/^next/'],
        'module',
        ['/^@components/', '/^@hooks/', '/^@utils/',],
        ['parent', 'sibling', 'index', '/^style/', '/^css/']
      ],
      "alphabetize": {
        "order": "asc",
        "ignoreCase": true
      }
    }
  ]
  }
}