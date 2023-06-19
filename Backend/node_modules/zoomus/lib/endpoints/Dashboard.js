'use strict';

var ZoomResource = require('../ZoomResource');
var zoomRequest = ZoomResource.request;

module.exports = ZoomResource.extend({

    path: 'metrics',

    meetings: zoomRequest({
        request: 'POST',
        path: 'meetings'
    }),

    meeting: zoomRequest({
        request: 'POST',
        path: 'meetingdetail'
    }),

    webinars: zoomRequest({
        request: 'POST',
        path: 'webinars'
    }),

    webinar: zoomRequest({
        request: 'POST',
        path: 'webinardetail'
    }),

    rooms: zoomRequest({
        request: 'POST',
        path: 'zoomrooms'
    }),

    room: zoomRequest({
        request: 'POST',
        path: 'zoomroomdetail'
    }),

    qos: zoomRequest({
        request: 'POST',
        path: 'qos'
    }),

    crc: zoomRequest({
        request: 'POST',
        path: 'crc'
    }),

    im: zoomRequest({
        request: 'POST',
        path: 'im'
    })

});