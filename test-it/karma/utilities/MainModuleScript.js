(function () {
    'use strict';
    window.karmaLoadedSaved = window.__karma__.loaded.bind(window.__karma__);
    window.__karma__.loaded = function () {
        // Intentionally blank
    };

    var scriptModule = document.createElement('script');
    scriptModule.src = '/base/test-it/karma/utilities/MainModule.js';
    scriptModule.type = 'module';
    document.body.appendChild(scriptModule);
}());
