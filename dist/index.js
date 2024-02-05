"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jest_1 = require("./jest");
var math_1 = require("./math");
(0, jest_1.test)("add 2 to 3 to be 6", function () {
    (0, jest_1.expect)((0, math_1.add)(2, 3)).toBe(5);
});
