/*!
 * name: @jswork/next-dt-log
 * description: Datetime log for next.
 * homepage: https://github.com/afeiship/next-dt-log
 * version: 1.0.0
 * date: 2020-11-13T08:14:37.497Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var dateFormat = require('dateformat');
  var DEFAULT_FORMAT = ['yyyy-mm-dd', 'HH:MM:ss', 'yyyy-mm-dd HH:MM:ss'];
  var log = console.log;

  var NxDtLog = nx.declare('nx.DtLog', {
    statics: {
      log: function (inArgment, inFmt) {
        var args = nx.slice(inArgment);
        var dataStr = '[' + dateFormat(new Date(), inFmt) + ']';
        args.unshift(dataStr);
        log.apply(log, args);
      },
      'date,time,datetime': function (_, index) {
        return function () {
          return this.log(arguments, DEFAULT_FORMAT[index]);
        };
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxDtLog;
  }
})();
