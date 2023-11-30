module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'no-plusplus': 'off',
    'no-debugger': 'off',
    'no-alert': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
    'linebreak-style': 'off',
    'no-multi-assign': 'off',
    'no-prototype-builtins': 'off',
    'vue/no-mutating-props': 'off',
    'no-irregular-whitespace': 0,
    'vue/no-deprecated-slot-attribute': 'off',
    'vue/no-deprecated-dollar-listeners-api': 'off',
    'vue/no-deprecated-v-on-native-modifier': 'off',
    'arrow-parens': 'off',
    'no-return-assign': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-nested-ternary': 'off',
    'no-confusing-arrow': 'off',
    'no-bitwise': 'off',
    camelcase: 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.vue'],
      },
    },
  },
};
