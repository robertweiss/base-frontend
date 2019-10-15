module.exports = {
    testMatch: ['**/tests/**/*.js'],
    moduleFileExtensions: ['js', 'json', 'vue'],
    transform: {
        '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
        '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
    },
    moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/jest.config.js' // Mock CSS import with any valid file
    },
    snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue']
};
