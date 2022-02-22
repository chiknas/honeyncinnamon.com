module.exports = {
  roots: ['<rootDir>'],
  modulePaths: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/testing/jestAfterEnv.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['./components/**'],
  //   TODO: Enable coverage threshhold when reached
  //   coverageThreshold: {
  //     global: {
  //       statements: 74,
  //       branches: 51,
  //       functions: 65,
  //       lines: 75,
  //     },
  //   },
};
