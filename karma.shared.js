(function () {
    'use strict';

    module.exports = {
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            // 3rd party resources
            // None
            // source files

            // TODO mraj So far core.js is only used for es6 Map support for PhantomJS, can remove with PhantomJS 2.5
            'node_modules/core-js/client/core.js',
            'node_modules/whatwg-fetch/fetch.js',
            'node_modules/jasmine-expect/dist/jasmine-matchers.js',
            'node_modules/setimmediate/setImmediate.js',
            'dist/vireo.js',
            'source/core/module_*.js',
            'source/io/module_*.js',
            'source/core/vireo.loader.js',
            // test assets
            'test-it/karma/utilities/TestHelpers.*.js',
            {
                pattern: 'test-it/ViaTests/*.via',
                included: false
            },
            {
                pattern: 'test-it/ExpectedResults/*.vtr',
                included: false
            },
            {
                pattern: 'test-it/karma/fixtures/**/*.*',
                included: false
            },
            {
                pattern: 'test-it/testList.json',
                included: false
            }
        ],

        // list of files to exclude
        exclude: [
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['verbose', 'kjhtml'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: [],

        // Hostname to be used when capturing browsers.
        // This seems to reduce intermittent hangs on Windows 7 using IE 11
        hostname: '127.0.0.1',

        // Aliases for launchers that provide custom settings
        customLaunchers: {
            PhantomJS_Debug: {
                base: 'PhantomJS',
                debug: true
            },

            // To use Sauce Labs locally set the SAUCE_SERNAME and SAUCE_ACCESS_KEY environment variables
            SauceLabs_IE11: {
                base: 'SauceLabs',
                browserName: 'Internet Explorer',
                platform: 'Windows 10',
                version: '11',
                timeZone: 'Chicago'
            },
            SauceLabs_EDGE: {
                base: 'SauceLabs',
                browserName: 'microsoftedge',
                platform: 'Windows 10',
                version: '14',
                timeZone: 'Chicago'
            },
            SauceLabs_SAFARI_IOS: {
                base: 'SauceLabs',
                browserName: 'iphone',
                platform: 'OS X 10.9',
                version: '7.1'
            }
        },

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // How long will Karma wait for a message from a browser before disconnecting from it (in ms).
        // default: 10000
        // browserNoActivityTimeout: 60000,

        // Sauce Labs recommended timeout settings
        // https://support.saucelabs.com/hc/en-us/articles/225104707-Karma-Tests-Disconnect-Particularly-When-Running-Tests-on-Safari
        browserDisconnectTimeout: 10000, // default 2000
        browserDisconnectTolerance: 1, // default 0
        browserNoActivityTimeout: 4 * 60 * 1000, // default 10000
        captureTimeout: 4 * 60 * 1000, // default 60000

        // Enable or disable failure on running empty test-suites. If disabled the program will return exit-code 0 and display a warning.
        failOnEmptyTestSuite: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: 1
    };

    if (process.env.TRAVIS !== undefined) {
        module.exports.sauceLabs = {
            recordVideo: true,
            recordScreenshots: true,
            tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER,
            startConnect: false
        };
    }
}());
