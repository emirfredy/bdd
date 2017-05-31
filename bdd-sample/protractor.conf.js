// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts



exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    'features/**/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://todomvc.com',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  cucumberOpts: {
    require: [ 'features/**/*.ts', 
    'spec/**/*.ts' ],
    format: 'pretty',            // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    compiler: 'ts:ts-node/register'
  }  
};
