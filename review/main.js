var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function tick() {
    tickAsync();
}
var App = (function () {
    function App() {
    }
    App.prototype.get = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        api.get(path, resolve);
                    })];
            });
        });
    };
    App.prototype.display = function () {
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        this.displayArray(data);
    };
    App.prototype.displayArray = function (data) {
        api.display(data);
    };
    App.prototype.displayText = function (text) {
        this.display(new TextFragment(text));
    };
    return App;
}());
var app = new App();
var refreshInterval = 0;
var TextFragment = (function () {
    function TextFragment(value) {
        this.kind = "text";
        this.value = value;
    }
    return TextFragment;
}());
var ChartFragment = (function () {
    function ChartFragment(value) {
        this.kind = "chart";
        this.value = value;
    }
    return ChartFragment;
}());
var ReviewData = (function () {
    function ReviewData() {
        this.values = [];
    }
    ReviewData.prototype.parse = function (html) {
        this.parseStatus(html);
        this.parseChart(html);
    };
    ReviewData.prototype.parseStatus = function (html) {
        var regex = /<strong>iOS App Store<\/strong> (.*)<\/h4>/;
        var result = regex.exec(html);
        if (result == null) {
            this.status = "error";
            return;
        }
        this.status = result[1];
    };
    ReviewData.prototype.parseChart = function (html) {
        var regex = /points\.push\( .*, (.*)]\);/g;
        var match;
        while (match = regex.exec(html)) {
            this.values.push(+match[1]);
            if (this.values.length >= 14) {
                break;
            }
        }
        this.values = this.values.reverse();
    };
    return ReviewData;
}());
function tickAsync() {
    return __awaiter(this, void 0, void 0, function () {
        var html, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, app.get("http://appreviewtimes.com")];
                case 1:
                    html = _a.sent();
                    data = new ReviewData();
                    data.parse(html);
                    app.display(new TextFragment("Review times: " + data.status));
                    return [2 /*return*/];
            }
        });
    });
}
refreshInterval = 3600;
