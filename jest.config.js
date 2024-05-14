module.exports = {
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    testEnvironment: 'node',
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json',
        isolatedModules: true,
      },
    },
    transformIgnorePatterns: [
      '/node_modules/',
    ],
  };
  