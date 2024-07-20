module.exports = {
  testEnvironment: "node",
  testTimeout: 30000, // Increase global timeout to 30 seconds
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
};
