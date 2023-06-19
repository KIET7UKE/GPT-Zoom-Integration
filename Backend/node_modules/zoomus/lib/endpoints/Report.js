'use strict';

var ZoomResource = require('../ZoomResource');
var zoomRequest = ZoomResource.request;

module.exports = ZoomResource.extend({

    path: 'report',

    getAccount: zoomRequest({
        request: 'POST',
        path: 'getaccountreport'
    }),

    getAudio: zoomRequest({
        request: 'POST',
        path: 'getaudioreport'
    }),

    getDaily: zoomRequest({
        request: 'POST',
        path: 'getdailyreport'
    }),

    getUser: zoomRequest({
        request: 'POST',
        path: 'getuserreport'
    })
});