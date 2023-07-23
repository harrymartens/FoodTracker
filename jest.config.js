module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  maxWorkers: 1,

  transform: {
    '^.+\\.(ts|tsx|js)$': 'ts-jest'
  },
  // Ignore it02 functions tests
  testPathIgnorePatterns: [
    //'/Project_Tests/It02/'
  ],
};
