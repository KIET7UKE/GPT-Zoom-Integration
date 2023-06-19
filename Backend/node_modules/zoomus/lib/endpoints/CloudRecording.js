'use strict';

var ZoomResource = require('../ZoomResource');
var zoomRequest = ZoomResource.request;

module.exports = ZoomResource.extend({

    path: 'recording',

    list: zoomRequest({
        request: 'POST',
        path: 'list'
    }),

    get: zoomRequest({
        request: 'POST',
        path: 'get'
    }),

    delete: zoomRequest({
        request: 'POST',
        path: 'delete'
    })

//  meeting connector not supported currently

});