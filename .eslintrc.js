module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  plugins: ["react", "react-hooks", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
