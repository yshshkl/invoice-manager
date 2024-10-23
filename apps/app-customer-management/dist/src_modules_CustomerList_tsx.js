"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkapp_customer_management"] = self["webpackChunkapp_customer_management"] || []).push([["src_modules_CustomerList_tsx"],{

/***/ "./src/modules/CustomerList.tsx":
/*!**************************************!*\
  !*** ./src/modules/CustomerList.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var shared_ui_library_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared-ui-library/components */ \"../../shared/ui-library/dist/components.bundle.js\");\n/* harmony import */ var shared_ui_library_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shared_ui_library_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var shared_ui_library_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared-ui-library/hooks */ \"../../shared/ui-library/dist/hooks.bundle.js\");\n/* harmony import */ var shared_ui_library_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shared_ui_library_hooks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _AddCustomer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddCustomer */ \"./src/modules/AddCustomer.tsx\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"../../node_modules/.pnpm/antd@5.21.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/flex/index.js\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === \"function\" ? Iterator : Object).prototype);\n    return g.next = verb(0), g[\"throw\"] = verb(1), g[\"return\"] = verb(2), typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\n\n\n\n\n\nvar columns = [\n    { header: 'ID', accessor: 'id' },\n    { header: 'Name', accessor: 'name' },\n    { header: 'Email', accessor: 'email' },\n    { header: 'Phone', accessor: 'phone' },\n];\nfunction CustomerList() {\n    var _this = this;\n    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), customers = _a[0], setCustomers = _a[1];\n    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({ isOpen: false }), customerWizard = _b[0], setCustomerWizard = _b[1];\n    var _c = (0,shared_ui_library_hooks__WEBPACK_IMPORTED_MODULE_2__.useCustomerManager)(), getCustomers = _c.getCustomers, deleteCustomer = _c.deleteCustomer;\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n        (function () { return __awaiter(_this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, fetchCustomers()];\n                    case 1:\n                        _a.sent();\n                        return [2 /*return*/];\n                }\n            });\n        }); })();\n    }, []);\n    var fetchCustomers = function () { return __awaiter(_this, void 0, void 0, function () {\n        var customers_1, error_1;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    _a.trys.push([0, 2, , 3]);\n                    return [4 /*yield*/, getCustomers()];\n                case 1:\n                    customers_1 = _a.sent();\n                    setCustomers(function () { return __spreadArray([], customers_1, true); });\n                    manageCustomerWizard({ isOpen: false });\n                    return [3 /*break*/, 3];\n                case 2:\n                    error_1 = _a.sent();\n                    console.error(\"Error fetching customers:\", error_1);\n                    return [3 /*break*/, 3];\n                case 3: return [2 /*return*/];\n            }\n        });\n    }); };\n    var onEditClick = function (id) {\n        var customer = customers.find(function (customer) { return customer.id === id; });\n        manageCustomerWizard({ isOpen: true, mode: 'Edit', data: customer });\n    };\n    var onDeleteClick = function (id) { return __awaiter(_this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, deleteCustomer(id)];\n                case 1:\n                    _a.sent();\n                    return [4 /*yield*/, fetchCustomers()];\n                case 2:\n                    _a.sent();\n                    return [2 /*return*/];\n            }\n        });\n    }); };\n    var manageCustomerWizard = function (data) {\n        setCustomerWizard(function (prev) { return (__assign(__assign({}, prev), data)); });\n    };\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"], { vertical: true, gap: 20 },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"Customers\"),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"], { justify: 'flex-end' },\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(shared_ui_library_components__WEBPACK_IMPORTED_MODULE_1__.Button, { type: 'primary', onClick: function () { return manageCustomerWizard({ isOpen: true, mode: 'Add', data: undefined }); } }, \"Add Customer\")),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(shared_ui_library_components__WEBPACK_IMPORTED_MODULE_1__.Table, { columns: columns, data: customers, showActions: true, onEditClick: onEditClick, onDeleteClick: onDeleteClick }),\n        customerWizard.isOpen && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AddCustomer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { visible: true, onClose: function () { return manageCustomerWizard({ isOpen: false }); }, onAddCustomerComplete: fetchCustomers, mode: customerWizard.mode, customerData: customerWizard.data })));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomerList);\n\n\n//# sourceURL=webpack://app-customer-management/./src/modules/CustomerList.tsx?");

/***/ })

}]);