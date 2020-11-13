(function() {
  var nx = require('@jswork/next');
  var NxDtLog = require('../src/index');

  describe('NxDtLog.methods', function() {
    test('date/time/datetime', function() {
      NxDtLog.time('i will print current time');
      NxDtLog.date('i will print', 'current', 'date');
      NxDtLog.datetime('i will','print current datetime');
    });
  });
})();
