/*!
 * name: @jswork/next-dt-log
 * description: Datetime log for next.
 * homepage: https://github.com/afeiship/next-dt-log
 * version: 1.1.1
 * date: 2020-12-16 17:56:01
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var dateFormat = require('dateformat');
  var DEFAULT_FORMAT = ['yyyy-mm-dd', 'HH:MM:ss', 'yyyy-mm-dd HH:MM:ss'];
  var DEFAULT_OPTIONS = { type: 'log' };
  var TYPES = ['log', 'error', 'info'];

  var NxDtLog = nx.declare('nx.DtLog', {
    methods: {
      init: function (inOptions) {
        this.options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
      },
      log: function (inArgment, inFmt) {
        var log = console[this.options.type];
        var args = nx.slice(inArgment);
        var dataStr = '[' + dateFormat(new Date(), inFmt) + ']';
        args.unshift(dataStr);
        console.log(log, args);
        log.apply(log, args);
      },
      'date,time,dt': function (_, index) {
        return function () {
          return this.log(arguments, DEFAULT_FORMAT[index]);
        };
      }
    }
  });

  // inMember, inTarget, inObject, inIsStatic
  TYPES.forEach(function (name) {
    nx.defineProperty(
      NxDtLog,
      name,
      function () {
        return new NxDtLog({ type: name });
      },
      true
    );
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxDtLog;
  }
})();
