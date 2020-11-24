(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var dateFormat = require('dateformat');
  var DEFAULT_FORMAT = ['yyyy-mm-dd', 'HH:MM:ss', 'yyyy-mm-dd HH:MM:ss'];
  var DEFAULT_OPTIONS = { type: 'log' };

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
