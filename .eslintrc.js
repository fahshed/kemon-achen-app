module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': 1,
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
  },
};
