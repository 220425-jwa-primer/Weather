// @ts-check

const { SpecReporter } = require('jasmine-spec-reporter')

/**
 * @type { import("protractor").Config }
 */
exports.config = {
    allScriptsTimeout: 5000,
    specs: [
        './src/**/*.e2e-spec.ts'
    ],
    capabilities: {
        browserName: 'chrome'
    },
    directConnect: true,
    baseUrl: 'http://localhost:4444',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function() {}
    },
    onPrepare() {
        require('ts-node').register({
            project: require('path').join(__dirname, './tsconfig.json')
        })
        // @ts-ignore
        jasmine.getEnv().addReporter(new SpecReporter({ 
            spec: { 
                displayStacktrace: true 
            }
        }))
    }
}