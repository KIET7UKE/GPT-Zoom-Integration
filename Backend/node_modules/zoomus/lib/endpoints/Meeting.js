'use strict';

var ZoomResource = require('../ZoomResource');
var zoomRequest = ZoomResource.request;

module.exports = ZoomResource.extend({

    path: 'meeting',

    create: zoomRequest({
        request: 'POST',
        path: 'create'
    }),

    list: zoomRequest({
        request: 'POST',
        path: 'list'
    }),

    listLive: zoomRequest({
        request: 'POST',
        path: 'live'
    }),

    get: zoomRequest({
        request: 'POST',
        path: 'get'
    }),

    update: zoomRequest({
        request: 'POST',
        path: 'update'
    }),

    delete: zoomRequest({
        request: 'POST',
        path: 'delete'
    }),

    end: zoomRequest({
        request: 'POST',
        path: 'end'
    }),

    register: zoomRequest({
        request: 'POST',
        path: 'register'
    })
});