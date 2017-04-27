'use strict';

const {checkedRun} = require('./util');

describe('Coherence', () => {
    it('Passing an empty URL list should generate an empty HAR object', (done) => {
        checkedRun(done, [], {}, {
            nLoad: 0,
            nDone: 0,
            nFail: 0,
            nPreHook: 0,
            nPostHook: 0,
            nPages: 0,
            nEntries: 0
        });
    });
    it('Using wrong connection parameters should generate an empty HAR object and notify URL errors', (done) => {
        checkedRun(done, [
            'a',
            'b',
            'c'
        ], {
            port: 1
        }, {
            nLoad: 3,
            nDone: 0,
            nFail: 3,
            nPreHook: 0,
            nPostHook: 0,
            nPages: 0,
            nEntries: 0
        });
    });
    it('Using wrong URLs should generate an empty HAR object and notify URL errors', (done) => {
        checkedRun(done, [
            'a',
            'b',
            'c'
        ], {}, {
            nLoad: 3,
            nDone: 0,
            nFail: 3,
            nPreHook: 3,
            nPostHook: 0,
            nPages: 0,
            nEntries: 0
        });
    });
    it('Should generate a non-empty HAR object valid URLs', (done) => {
        checkedRun(done, [
            'http://localhost:9222/json/list',
            'a',
            'b',
            'c',
            'http://localhost:9222/json/version',
        ], {}, {
            nLoad: 5,
            nDone: 2,
            nFail: 3,
            nPreHook: 5,
            nPostHook: 2,
            nPages: 2,
            nEntries: 2
        });
    });
});
