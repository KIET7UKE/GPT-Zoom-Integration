'use strict';

var http = require('http');
var https = require('https');
var path = require('path');

var utils = require('./utils');

var hasOwn = {}.hasOwnProperty;

ZoomResource.extend = utils.extender;
ZoomResource.request = require('./ZoomRequest');


function ZoomResource(zoom, urlData) {
  this._zoom = zoom;
  this._urlData = urlData || {};

  this.basePath = utils.makeURLInterpolator(zoom.getConfig('basePath'));
  this.path = utils.makeURLInterpolator(this.path);

  this.initialize.apply(this, arguments);
}

ZoomResource.prototype = {

  path: '',

  initialize: function() {},

  createFullPath: function(commandPath, urlData) {
    return path.join(
      this.basePath(urlData),
      this.path(urlData),
      typeof commandPath == 'function' ?
        commandPath(urlData) : commandPath
    ).replace(/\\/g, '/'); // ugly workaround for Windows
  },

  createUrlData: function() {
    var urlData = {};
    // Merge in baseData
    for (var i in this._urlData) {
      if (hasOwn.call(this._urlData, i)) {
        urlData[i] = this._urlData[i];
      }
    }

    return urlData;
  },

  _responseHandler: function(req, callback) {
    var self = this;
    return function(res) {

      var response = '';

      res.setEncoding('utf8');
      res.on('data', function(chunk) {
        response += chunk;
      });
      res.on('end', function() {
        var headers = res.headers || {};

        response = JSON.parse(response);

        callback.call(self, response);
      });
    };
  },

  _request: function(request, path, data, callback) {
    var self = this;
    var requestData;

    data['api_key'] = this._zoom.getConfig('key');
    data['api_secret'] = this._zoom.getConfig('secret');

    requestData = utils.stringifyRequestData(data || {});

    var headers = {
      // Use specified auth token or use default from this zoom instance:
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': requestData.length,
      'User-Agent': 'Zoom/v1 NodeBindings/' + this._zoom.getConstant('PACKAGE_VERSION'),
    };

    makeRequest();

    function makeRequest() {
      var isInsecureConnection = self._zoom.getConfig('protocol') == 'http';

      var host = self._zoom.getConfig('host');

      var req = (
        isInsecureConnection ? http : https
      ).request({
        host: host,
        port: self._zoom.getConfig('port'),
        path: path,
        method: request,
        headers: headers
      });

      req.on('response', self._responseHandler(req, callback));

      req.on('socket', function(socket) {
        socket.on((isInsecureConnection ? 'connect' : 'secureConnect'), function() {
          // Send payload; we're safe:
          req.write(requestData);
          req.end();
        });
      });
    }
  }
};

module.exports = ZoomResource;
