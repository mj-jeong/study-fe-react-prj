module.exports={
  root: true,
  env: {
    jest: true,
    node: true,
    es2020: true,
  },
  extends: ["react-app"],
  plugins: ["prettier"],
  ignorePatterns: [".eslintrc.js"],
  rules: {
    // General
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    camelcase: "off",
    "no-nested-ternary": "off",
    "react-hooks/exhaustive-deps": "warn",
    "no-param-reassign": 0,
    "no-console": "off",
    "no-shadow": "off",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-arrow-callback": "error",
    "no-prototype-builtins": "error",
    "prefer-object-spread": "error",
    indent: [
      "warn",
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ["ConditionalExpression *", "TemplateLiteral > *"],
      },
    ],
    "key-spacing": ["warn", { afterColon: true }],
    "comma-spacing": "warn",
    "arrow-spacing": "warn",

    // jsx
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",

    // React
    "react/no-unknown-property": 1,
    "react/jsx-key": 1,
    "react/jsx-indent": [1, 2, { indentLogicalExpressions: true }],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "react/require-default-props": "off",
    "react/prop-types": [
      0,
      {
        ignore: ["ignore"],
      },
    ],
    "react/jsx-handler-names": [2],
    "react/jsx-props-no-spreading": "off",
    "react/destructuring-assignment": "off",

    // React Hooks
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
  },
}