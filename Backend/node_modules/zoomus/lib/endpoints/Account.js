'use strict';

var ZoomResource = require('../ZoomResource');
var zoomRequest = ZoomResource.request;

module.exports = ZoomResource.extend({

    path: 'ma/account',

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
        path: 'update'
    }),

    delete: zoomRequest({
        request: 'POST',
        path: 'delete'
    }),

    planSubscribe: zoomRequest({
        request: 'POST',
        path: 'plan/subscribe'
    }),

    planAdd: zoomRequest({
        request: 'POST',
        path: 'plan/add'
    }),

    planGet: zoomRequest({
        request: 'POST',
        path: 'plan/get'
    }),

    planUpdate: zoomRequest({
        request: 'POST',
        path: 'plan/update'
    }),

    updateBilling: zoomRequest({
        request: 'POST',
        path: 'billing/update'
    })

});