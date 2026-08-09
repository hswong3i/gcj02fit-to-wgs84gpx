export default [
  {
    rules: {
      "consistent-return": "off",
      curly: "error",
      indent: ["error", 4],
      "key-spacing": "off",
      "linebreak-style": ["off", "unix"],
      "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
      "no-unused-expressions": [
        "error",
        {
          allowShortCircuit: true,
        },
      ],
      "spaced-comment": "error",
      strict: "off",
      "wrap-iife": "off",
    },
  },
];
