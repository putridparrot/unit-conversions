module.exports = {
    collectCoverage: true,
    coverageReporters: ['text', 'cobertura', 'html', 'lcov'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/$1',
      '^~/(.*)$': '<rootDir>/$1'
    },
    moduleFileExtensions: ['ts', 'js', 'json'],
    transform: {
      '^.+\\.ts$': 'ts-jest'
    },
    testPathIgnorePatterns: ['<rootDir>/dist']
  };
  