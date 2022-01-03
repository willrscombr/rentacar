module.exports = {
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    bail: 1,
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ['components/**/*.(tsx|ts|js)', 'pages/**/*.(tsx|ts|js)'],
    coverageReporters: ['lcov', 'text'],
    testResultsProcessor: 'jest-sonar-reporter'
  };