const core = require('../dist/index.js');

console.log('========================================');
console.log('[Test A] Survival-Kit-Core Loaded Successfully!');
console.log('Current Core Version:', core.version);
console.log('Test Kit Output:', core.createKit({ appName: 'Survival-App', debug: true }));
console.log('========================================');
