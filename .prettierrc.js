module.exports = {
  extends: [
    "prettier"
  ],
  plugins: ["prettier"],
  rules: {
    "pretter/prettier": [
      "error",
      {
        semi: true,
        singleQuote: true,
        trailingComma: "es5"}
    ]
  }
}