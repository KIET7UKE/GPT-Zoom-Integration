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

    get: zoomRequest({
        request: 'POST',
        path: 'get'
    }),

    update: zoomRequest({
        request: 'POST',
        path: 'edit'
    }),

    delete: zoomRequest({
        request: 'POST',
        path: 'delete'
    }),

    memberList: zoomRequest({
        request: 'POST',
        path: 'member/list'
    }),

    memberAdd: zoomRequest({
        request: 'POST',
        path: 'member/add'
    }),

    memberDelete: zoomRequest({
        request: 'POST',
        path: 'member/delete'
    })

});