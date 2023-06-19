'use strict';

var utils = require('./utils');

function zoomRequest(spec) {
  var commandPath = utils.makeURLInterpolator(spec.path || '');
  var requestMethod = (spec.request || 'GET').toUpperCase();
  var urlParams = spec.urlParams || [];

  return function() {
    var self = this;
    var args = [].slice.call(arguments);

    var callback = typeof args[args.length - 1] == 'function' && args.pop();
    var urlData = this.createUrlData();

    for (var i = 0, l = urlParams.length; i < l; ++i) {
        var param = urlParams[i];
        urlData[param] = args.shift();
    }

    var data = utils.getDataFromArgs(args);

    var requestPath = this.createFullPath(commandPath, urlData);

    return self._request(requestMethod, requestPath, data, callback);
  };
}

module.exports = zoomRequest;
