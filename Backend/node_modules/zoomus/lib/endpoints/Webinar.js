'use strict';

var ZoomResource = require('../ZoomResource');
var zoomRequest = ZoomResource.request;

module.exports = ZoomResource.extend({

    path: 'webinar',

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

    listRegistration: zoomRequest({
        request: 'POST',
        path: 'list/registration'
    }),

    register: zoomRequest({
        request: 'POST',
        path: 'register'
    }),

    listRegistrations: zoomRequest({
        request: 'POST',
        path: 'registrants/list'
    }),

    approveRegistration: zoomRequest({
        request: 'POST',
        path: 'registrants/approve'
    }),

    getRegistration: zoomRequest({
        request: 'POST',
        path: 'registration'
    }),

    cancelRegistration: zoomRequest({
        request: 'POST',
        path: 'registration/cancel'
    }),

    listPanelists: zoomRequest({
        request: 'POST',
        path: 'panelists'
    }),

    getUUID: zoomRequest({
        request: 'POST',
        path: 'uuid/list'
    }),

    getAttendees: zoomRequest({
        request: 'POST',
        path: 'attendees/list'
    }),

    getPolls: zoomRequest({
        request: 'POST',
        path: 'polls'
    }),

    getQuestions: zoomRequest({
        request: 'POST',
        path: 'questions'
    })
});