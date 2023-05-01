module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@components': './src/components',
          '@config': './src/config',
          '@reducers': './src/reducers',
          '@screens': './src/screens',
          '@hooks': './src/hooks',
          '@__mocks__': './__mocks__',
          '@interfaces': './src/interfaces',
          '@providers': './src/providers',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
