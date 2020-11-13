(function () {
  const NxDtLog = require('../src/index');

  describe('NxDtLog.methods', function () {
    test('use std api: date/time/datetime', function () {
      NxDtLog.time('i will print current time');
      NxDtLog.date('i will print', 'current', 'date');
      NxDtLog.datetime('i will', 'print current datetime');
    });

    test('use customize api: log', () => {
      NxDtLog.log(['a', 'b', 'c', 'yy-mm-dd']);
    });
  });
})();
