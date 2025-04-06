"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCountry = void 0;
var react_1 = require("react");
var data_1 = require("./data");
var useCountry = function (props) {
    var _a = (0, react_1.useState)(null), data = _a[0], setData = _a[1];
    (0, react_1.useEffect)(function () {
        var item = find(props || undefined);
        setData(item);
    }, [props]);
    return data;
};
exports.useCountry = useCountry;
var find = function (data) {
    var item = null;
    if (!data) {
        var timeZone_1 = Intl.DateTimeFormat().resolvedOptions().timeZone;
        item = data_1.phoneCodes.find(function (item) { return item.timezone === timeZone_1; });
    }
    else {
        var key_1 = Object.keys(data)[0];
        // Type assertion to ensure key is a valid property
        item = data_1.phoneCodes.find(function (item) {
            return item[key_1] === data[key_1];
        });
    }
    if (!item) {
        console.warn("Country not found at useCountry");
        return null;
    }
    return __assign({}, item);
};
