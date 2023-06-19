'use strict';

Zoom.DEFAULT_PROTOCOL = 'https';
Zoom.DEFAULT_HOST = 'api.zoom.us';
Zoom.DEFAULT_PORT = '443';
Zoom.DEFAULT_BASE_PATH = '/v1/';

Zoom.PACKAGE_VERSION = require('../package.json').version;

var endpoints = {
    account: require('./endpoints/Account'),
    chat: require('./endpoints/ArchivedChatMessages'),
    recording: require('./endpoints/CloudRecording'),
    dashboard: require('./endpoints/Dashboard'),
    device: require('./endpoints/Device'),
    group: require('./endpoints/Group'),
    imGroup: require('./endpoints/IMGroup'),
    meeting: require('./endpoints/Meeting'),
    report: require('./endpoints/Report'),
    user: require('./endpoints/User'),
    webinar: require('./endpoints/Webinar')
};

Zoom.ZoomResource = require('./ZoomResource');
Zoom.endpoints = endpoints;

function Zoom(config) {
    if (!(this instanceof Zoom)) {
        return new Zoom(config);
    }

    this._config = {
        key: config.key,
        secret: config.secret,
        protocol: config.protocol || Zoom.DEFAULT_PROTOCOL,
        host: config.host || Zoom.DEFAULT_HOST,
        port: config.port || Zoom.DEFAULT_PORT,
        basePath: config.basepath || Zoom.DEFAULT_BASE_PATH
    };

    for (var name in endpoints) {
        this[ name ] = new endpoints[name](this);
    }
}

Zoom.prototype = {

    getConfig: function(key) {
        return this._config[key];
    },

    getConstant: function(c) {
        return Zoom[c];
    }
};

module.exports = Zoom;
