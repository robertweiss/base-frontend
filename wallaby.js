module.exports = function(wallaby) {
    const compiler = wallaby.compilers.babel();

    return {
        files: [
            {
                pattern: 'src/**/*',
                load: false
            },
            'jest.config.js'
        ],

        tests: ['tests/**/*.test.js'],

        env: {
            type: 'node',
            runner: 'node'
        },

        compilers: {
            '**/*.js': compiler,
            '**/*.vue': require('wallaby-vue-compiler')(compiler)
        },

        preprocessors: {
            '**/*.vue': (file) => require('vue-jest').process(file.content, file.path)
        },

        setup: function(wallaby) {
            const jestConfig = require('./jest.config');
            jestConfig.transform = {};
            wallaby.testFramework.configure(jestConfig);
        },

        testFramework: 'jest'
    };
};
