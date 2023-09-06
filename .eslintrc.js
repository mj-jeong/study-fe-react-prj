module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true, // 'module' is not defined. 에러가 발생하면 기입
  },
  extends: ["prettier"],
  plugins: ["prettier"],
  ignorePatterns: [".eslintrc.js"],
  parserOptions: {
    sourceType: "module",
  },
  rules: {},
};
