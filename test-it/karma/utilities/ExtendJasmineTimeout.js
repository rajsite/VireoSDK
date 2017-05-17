(function () {
    'use strict';

    // The PID test takes between 4-6 seconds on PhantomJS
    // The PI calc tests on IE11 on Sauce Labs take 10-12 seconds
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
}());
