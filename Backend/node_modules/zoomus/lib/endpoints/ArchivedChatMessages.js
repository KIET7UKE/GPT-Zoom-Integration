'use strict';

var ZoomResource = require('../ZoomResource');
var zoomRequest = ZoomResource.request;

module.exports = ZoomResource.extend({

    path: 'chat',

    list: zoomRequest({
        request: 'POST',
        path: 'list'
    }),

    get: zoomRequest({
        request: 'POST',
        path: 'get'
    })

});