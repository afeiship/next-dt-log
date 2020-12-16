(function () {
  const NxDtLog = require('../src/index');
  const logger = new NxDtLog();

  describe('NxDtLog.methods', function () {
    test('use std api: date/time/datetime', function () {
      logger.time('i will print current time');
      logger.date('i will print', 'current', 'date');
      logger.dt('i will', 'print current datetime');
    });

    test('use customize api: log', () => {
      logger.log(['a', 'b', 'c', 'yy-mm-dd']);
    });

    test.only('static methods:', () => {
      NxDtLog.info.dt('i am info');
      NxDtLog.log.dt('i am log but use short datetime');
      // this will stop jest
      // NxDtLog.error.datetime('aaa');
    });
  });
})();
