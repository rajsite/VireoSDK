// Karma configuration

(function () {
    'use strict';

    process.env.CHROME_BIN = undefined;

    module.exports = function (config) {
        var getSharedConfig = require('./karma.shared.js');
        var sharedConfig = getSharedConfig(config);

        sharedConfig.files = [
            ...sharedConfig.filesPolyfills,
            ...sharedConfig.filesInfrastructure,
            ...sharedConfig.filesSource,
            {
                pattern: 'dist/wasm32-unknown-emscripten/release/vireo.core.js',
                included: false
            },
            {
                pattern: 'source/**/*.js',
                included: false
            },
            {
                pattern: 'test-it/karma/utilities/MainModule.js',
                included: false
            },
            'test-it/karma/utilities/MainModuleScript.js',
            ...sharedConfig.filesFixtures,
            ...sharedConfig.filesSpecs
        ];

        sharedConfig.proxies = {
            '/vireo.core.wasm': '/base/dist/wasm32-unknown-emscripten/release/vireo.core.wasm'
        };

        config.set(sharedConfig);
    };
}());
