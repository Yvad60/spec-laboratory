"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = exports.expect = void 0;
var expect = function (actual) {
    return {
        toBe: function (expected) {
            if (expected !== actual)
                throw new Error("Expected ".concat(expected, " but received ").concat(actual));
        },
    };
};
exports.expect = expect;
var test = function (testTitle, callback) {
    try {
        callback();
        console.log("\u2705 ".concat(testTitle));
    }
    catch (error) {
        console.error("\u274C ".concat(testTitle));
        console.error(error);
    }
};
exports.test = test;
