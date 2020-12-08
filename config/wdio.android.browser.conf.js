const { config } = require('./wdio.shared.conf');

// ============
// Specs
// ============
config.specs = [
    './src/specs/*.ts',
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        maxInstances: 10,
        browserName: 'Chrome',
        automationName: 'UiAutomator1',
        deviceName: 'emulator-5554',
        platformVersion: '8.0',
        platformName: 'Android',
        eventTimings: true,
        ensureWebviewsHavePages: true,
        showIOSLog: true,
        nativeWebScreenshot: true,
        path: '/wd/hub',
        port: 4723,
        newCommandTimeout: 30 * 60000
    },
];

exports.config = config;
