module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/src/config/setupTests.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-vector-icons)/)',
  ],
};
