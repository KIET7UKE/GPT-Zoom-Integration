'use strict';

var ZoomResource = require('../ZoomResource');
var zoomRequest = ZoomResource.request;

module.exports = ZoomResource.extend({

    path: 'user',

    create: zoomRequest({
        request: 'POST',
        path: 'create'
    }),

    autoCreate: zoomRequest({
        request: 'POST',
        path: 'autocreate'
    }),

    custCreate: zoomRequest({
        request: 'POST',
        path: 'custcreate'
    }),

    ssoCreate: zoomRequest({
        request: 'POST',
        path: 'ssocreate'
    }),

    list: zoomRequest({
        request: 'POST',
        path: 'list'
    }),

    pending: zoomRequest({
        request: 'POST',
        path: 'pending'
    }),

    get: zoomRequest({
        request: 'POST',
        path: 'get'
    }),

    getByEmail: zoomRequest({
        request: 'POST',
        path: 'getbyemail'
    }),

    update: zoomRequest({
        request: 'POST',
        path: 'update'
    }),

    updatePassword: zoomRequest({
        request: 'POST',
        path: 'updatePassword'
    }),

    uploadPicture: zoomRequest({
        request: 'POST',
        path: 'uploadpicture'
    }),

    deactivate: zoomRequest({
        request: 'POST',
        path: 'deactivate'
    }),

    delete: zoomRequest({
        request: 'POST',
        path: 'delete'
    }),

    permanentDelete: zoomRequest({
        request: 'POST',
        path: 'permanentdelete'
    }),

    revokeToken: zoomRequest({
        request: 'POST',
        path: 'revoketoken'
    }),

    setAssistant: zoomRequest({
        request: 'POST',
        path: 'assistant/set'
    }),

    deleteAssistant: zoomRequest({
        request: 'POST',
        path: 'assistant/delete'
    }),

    schedulers: zoomRequest({
        request: 'POST',
        path: 'scheduleforhost'
    }),

    checkEmail: zoomRequest({
        request: 'POST',
        path: 'checkemail'
    }),

    checkZPK: zoomRequest({
        request: 'POST',
        path: 'checkzpk'
    })
});