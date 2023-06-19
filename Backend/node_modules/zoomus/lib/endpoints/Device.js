'use strict';

var ZoomResource = require('../ZoomResource');
var zoomRequest = ZoomResource.request;

module.exports = ZoomResource.extend({

    path: 'im/group',

    create: zoomRequest({
        request: 'POST',
        path: 'create'
    }),

    list: zoomRequest({
        request: 'POST',
        path: 'list'
    }),

    update: zoomRequest({
        request: 'POST',
        path: 'edit'
    }),

    delete: zoomRequest({
        request: 'POST',
        path: 'delete'
    })

});