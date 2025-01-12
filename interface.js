"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ola = {
    id: 1,
    name: "Ola",
    // googleId: "abc123"  // This property is optional,
    startTrial: function () {
        return "Trial started";
    },
    getCoupon: function (couponname) {
        return 10;
    },
    githubToken: "abc123" // This property is not defined in the interface
};
var Admin1 = {
    id: 1,
    name: "Ola",
    // googleId: "abc123"  // This property is optional,
    startTrial: function () {
        return "Trial started";
    },
    getCoupon: function (couponname) {
        return 10;
    },
    role: "admin",
    githubToken: "abc123" // This property is not defined in the interface
};
