exports.id = 2787;
exports.ids = [2787];
exports.modules = {

/***/ 5392:
/***/ ((module) => {

// Exports
module.exports = {
	"alert": "Navbar_alert__5jPgr",
	"svg": "Navbar_svg__ALInH",
	"menuItems": "Navbar_menuItems__l27Em"
};


/***/ }),

/***/ 4158:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5392);
/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9915);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__]);
js_cookie__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const NavLinks = ()=>{
    const userId = js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get("user_id");
    const token = js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get("token");
    const isAdmin = js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get("isAdmin");
    console.log(isAdmin);
    // handle logout
    const handleLogout = ()=>{
        js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].remove("token");
        js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].remove("user_id");
        js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].remove("isAdmin");
        next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/");
    };
    if (isAdmin == "false") {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "mt-4 md:mt-0 border-b text-themecolor border-gray-400 md:border-none pb-2 md:pb-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuItems),
                        href: "/",
                        "aria-current": "page",
                        children: "Home"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "mt-4 md:mt-0 border-b text-themecolor border-gray-400 md:border-none pb-2 md:pb-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuItems),
                        href: "/products",
                        "aria-current": "page",
                        children: "Shop"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "mt-4 md:mt-0 border-b text-themecolor border-gray-400 md:border-none pb-2 md:pb-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuItems),
                        href: "/story",
                        "aria-current": "page",
                        children: "Our Story"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "mt-4 md:mt-0 border-b border-gray-400 md:border-none pb-2 md:pb-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuItems),
                        href: "/contact",
                        "aria-current": "page",
                        children: "Contact"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "mt-4 md:mt-0 border-b border-gray-400 md:border-none pb-2 md:pb-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuItems),
                        href: "/profile/orders",
                        "aria-current": "page",
                        children: "Orders"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "mt-4 md:mt-0 border-b border-gray-400 md:border-none pb-2 md:pb-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuItems),
                        onClick: handleLogout,
                        "aria-current": "page",
                        children: "Logout"
                    })
                })
            ]
        });
    } else if (isAdmin == "true") {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "mt-4 md:mt-0 border-b text-themecolor border-gray-400 md:border-none pb-2 md:pb-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuItems),
                        href: "/admin",
                        "aria-current": "page",
                        children: "Home"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "mt-4 md:mt-0 border-b text-themecolor border-gray-400 md:border-none pb-2 md:pb-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuItems),
                        href: "/products",
                        "aria-current": "page",
                        children: "Shop"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "mt-4 md:mt-0 border-b text-themecolor border-gray-400 md:border-none pb-2 md:pb-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuItems),
                        href: "/story",
                        "aria-current": "page",
                        children: "Our Story"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "mt-4 md:mt-0 border-b border-gray-400 md:border-none pb-2 md:pb-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuItems),
                        href: "/contact",
                        "aria-current": "page",
                        children: "Contact"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "mt-4 md:mt-0 border-b border-gray-400 md:border-none pb-2 md:pb-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuItems),
                        href: "/login",
                        "aria-current": "page",
                        children: "Login"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "mt-4 md:mt-0 border-b border-gray-400 md:border-none pb-2 md:pb-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuItems),
                        href: "/admin/crudProducts",
                        "aria-current": "page",
                        children: "Products"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "mt-4 md:mt-0 border-b border-gray-400 md:border-none pb-2 md:pb-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuItems),
                        href: "/admin/viewUsers",
                        "aria-current": "page",
                        children: "Users"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "mt-4 md:mt-0 border-b border-gray-400 md:border-none pb-2 md:pb-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuItems),
                        href: "/admin/alert",
                        "aria-current": "page",
                        children: "Alert"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "mt-4 md:mt-0 border-b border-gray-400 md:border-none pb-2 md:pb-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuItems),
                        href: "/admin/tranding",
                        "aria-current": "page",
                        children: "Tranding"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "mt-4 md:mt-0 border-b border-gray-400 md:border-none pb-2 md:pb-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuItems),
                        href: "/admin/category",
                        "aria-current": "page",
                        children: "Category"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "mt-4 md:mt-0 border-b border-gray-400 md:border-none pb-2 md:pb-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuItems),
                        href: "/admin/projects",
                        "aria-current": "page",
                        children: "Projects"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "mt-4 md:mt-0 border-b border-gray-400 md:border-none pb-2 md:pb-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuItems),
                        href: "/admin/orders",
                        "aria-current": "page",
                        children: "Orders"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "mt-4 md:mt-0 border-b border-gray-400 md:border-none pb-2 md:pb-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuItems),
                        href: "/admin/discount",
                        "aria-current": "page",
                        children: "Discount"
                    })
                })
            ]
        });
    } else {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "mt-4 md:mt-0 border-b text-themecolor border-gray-400 md:border-none pb-2 md:pb-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuItems),
                        href: "/",
                        "aria-current": "page",
                        children: "Home"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "mt-4 md:mt-0 border-b text-themecolor border-gray-400 md:border-none pb-2 md:pb-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuItems),
                        href: "/products",
                        "aria-current": "page",
                        children: "Shop"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "mt-4 md:mt-0 border-b text-themecolor border-gray-400 md:border-none pb-2 md:pb-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuItems),
                        href: "/story",
                        "aria-current": "page",
                        children: "Our Story"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "mt-4 md:mt-0 border-b border-gray-400 md:border-none pb-2 md:pb-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuItems),
                        href: "/contact",
                        "aria-current": "page",
                        children: "Contact"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "mt-4 md:mt-0 border-b border-gray-400 md:border-none pb-2 md:pb-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuItems),
                        href: "/login",
                        "aria-current": "page",
                        children: "Login"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "mt-4 md:mt-0 border-b border-gray-400 md:border-none pb-2 md:pb-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuItems),
                        href: "/signup",
                        "aria-current": "page",
                        children: "SignUp"
                    })
                })
            ]
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavLinks);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2787:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5392);
/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2782);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9915);
/* harmony import */ var _NavLinks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4158);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, js_cookie__WEBPACK_IMPORTED_MODULE_4__, _NavLinks__WEBPACK_IMPORTED_MODULE_5__, axios__WEBPACK_IMPORTED_MODULE_6__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, js_cookie__WEBPACK_IMPORTED_MODULE_4__, _NavLinks__WEBPACK_IMPORTED_MODULE_5__, axios__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Navbar = ()=>{
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [alertMessage, setAlertMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [subscriberEmail, setSubscriberEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // handle sucribers
    const handleSubscribe = async ()=>{
        try {
            // Send the subscriber email to the API
            const response = await axios__WEBPACK_IMPORTED_MODULE_6__["default"].post("/api/mails/subscribe", {
                email: subscriberEmail
            });
        // Handle the API response as needed
        } catch (error) {
            // Handle any errors
            console.error(error);
        }
    };
    // get alert message
    const alert = async ()=>{
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_6__["default"].get("/api/admin/alert");
            setAlertMessage(response.data.data[0].alert);
        } catch (error) {
            setAlertMessage("Something went Wrong. ");
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        alert();
    }, []);
    function handleSearchChange(event) {
        const value = event.target.value;
        setQuery(value);
        context.setQuery(value);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().alert)} bg-themecolor text-white px-4 py-2`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "animate-pulse font-bold tracking-wider",
                    children: alertMessage
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                className: `${(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().nav)} shadow-lg z-10 sticky top-0 mb-16 md:mb-0 w-full md:border-b border-grey-400 mr flex justify-between px-8 md:px-20 py-7 items-center bg-white z-501`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().searchbox)}
          w-[95%] md:w-[25%] bg-white flex absolute top-24 left-1/2 transform -translate-x-1/2 md:static md:top-0 md:-translate-x-0 border border-grey-400 md:flex justify-between align-center p-3`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                className: "ml-2 outline-none bg-transparent font-",
                                type: "text",
                                name: "search",
                                id: "search",
                                placeholder: "Search...",
                                value: query,
                                onChange: handleSearchChange
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5 pt-0.5 text-gray-600",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: `${(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().logo)} text-xl text-gray-800 font-bold`,
                            children: "Inferno."
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-center"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "flex items-center space-x-6",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: "/signup",
                                        className: "md:flex font-semibold text-gray-700",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "px-1 hidden md:block",
                                                children: "Account"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().svg),
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 64 64",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M32,2A30.034,30.034,0,0,0,2,32a29.6307,29.6307,0,0,0,1.1387,8.1758,1,1,0,1,0,1.9218-.5518A27.64,27.64,0,0,1,4,32a28,28,0,0,1,56,0,27.64,27.64,0,0,1-1.06,7.624,1,1,0,1,0,1.9218.5518A29.6307,29.6307,0,0,0,62,32,30.034,30.034,0,0,0,32,2Z"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M37.8383,35.5991a13,13,0,1,0-11.6766,0,28.89,28.89,0,0,0-16.5474,9.97,5.0514,5.0514,0,0,0,.1484,6.564,29.9923,29.9923,0,0,0,44.4746,0,5.0514,5.0514,0,0,0,.1484-6.564A28.89,28.89,0,0,0,37.8383,35.5991Z"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: "/cart",
                                        className: "flex font-semibold text-gray-700",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "px-1 hidden md:block",
                                                children: "Cart"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().svg),
                                                xmlns: "http://www.w3.org/2000/svg",
                                                "data-name": "Layer 2",
                                                viewBox: "0 0 35 35",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M27.47,23.93H14.92A5.09,5.09,0,0,1,10,20L8,11.87a5.11,5.11,0,0,1,5-6.32h16.5a5.11,5.11,0,0,1,5,6.32l-2,8.15A5.1,5.1,0,0,1,27.47,23.93ZM12.94,8.05a2.62,2.62,0,0,0-2.54,3.23l2,8.15a2.6,2.6,0,0,0,2.54,2H27.47a2.6,2.6,0,0,0,2.54-2l2-8.15a2.61,2.61,0,0,0-2.54-3.23Z"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M9.46 14a1.25 1.25 0 0 1-1.21-1L6.46 5.23A3.21 3.21 0 0 0 3.32 2.75H1.69a1.25 1.25 0 0 1 0-2.5H3.32A5.71 5.71 0 0 1 8.9 4.66l1.78 7.77a1.24 1.24 0 0 1-.93 1.5A1.43 1.43 0 0 1 9.46 14zM15.11 34.75a4 4 0 1 1 4-4A4 4 0 0 1 15.11 34.75zm0-5.54a1.52 1.52 0 1 0 1.52 1.52A1.52 1.52 0 0 0 15.11 29.21zM28.93 34.75a4 4 0 1 1 4-4A4 4 0 0 1 28.93 34.75zm0-5.54a1.52 1.52 0 1 0 1.53 1.52A1.52 1.52 0 0 0 28.93 29.21z"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M28.93,29.21H12.27a3.89,3.89,0,1,1,0-7.78h2.65a1.25,1.25,0,1,1,0,2.5H12.27a1.39,1.39,0,1,0,0,2.78H28.93a1.25,1.25,0,0,1,0,2.5Z"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "bg-themecolor font-bold-900 text-white p-3 rounded-full w-5 h-5 text-[0.8rem] flex items-center justify-center mt-[-0.5rem] ml-[-0.4rem]",
                                                children: context.cartNumber
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        onClick: ()=>{
                                            setIsOpen(!isOpen);
                                        // window.scrollTo(0, 0);
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img/menu.png",
                                            className: "w-8",
                                            alt: "menu"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition, {
                show: isOpen,
                enter: "transition ease-out duration-500",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "transition ease-in duration-300",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "md:block md:mt-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "z-20 bg-milky shadow-md transform translate-y-2 fixed top-[22%] md:top-[17%] right-[0%] w-[80%] ml-[10%] md:border-0 md:bg-white h-full md:h-12 md:w-full",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: "md:flex justify-evenly flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium h-[70%] md:h-12 md:overflow-visible overflow-y-scroll scroll-smooth",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavLinks__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex mt-16 md:hidden justify-center mb-6",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#!",
                                                type: "button",
                                                className: "rounded-full border-2 border-gray-400 text-gray-400 leading-normal uppercase hover:bg-grey-400 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    "aria-hidden": "true",
                                                    focusable: "false",
                                                    "data-prefix": "fab",
                                                    "data-icon": "facebook-f",
                                                    className: "w-2 h-full mx-auto",
                                                    role: "img",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 320 512",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        fill: "currentColor",
                                                        d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#!",
                                                type: "button",
                                                className: "rounded-full border-2 border-grey-400 text-gray-400 leading-normal uppercase hover:bg-grey-400 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    "aria-hidden": "true",
                                                    focusable: "false",
                                                    "data-prefix": "fab",
                                                    "data-icon": "twitter",
                                                    className: "w-3 h-full mx-auto",
                                                    role: "img",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 512 512",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        fill: "currentColor",
                                                        d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#!",
                                                type: "button",
                                                className: "rounded-full border-2 border-grey-400 text-gray-400 leading-normal uppercase hover:bg-grey hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    "aria-hidden": "true",
                                                    focusable: "false",
                                                    "data-prefix": "fab",
                                                    "data-icon": "google",
                                                    className: "w-3 h-full mx-auto",
                                                    role: "img",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 488 512",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        fill: "currentColor",
                                                        d: "M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#!",
                                                type: "button",
                                                className: "rounded-full border-2 border-grey-400 text-gray-400 leading-normal uppercase hover:bg-grey hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    "aria-hidden": "true",
                                                    focusable: "false",
                                                    "data-prefix": "fab",
                                                    "data-icon": "instagram",
                                                    className: "w-3 h-full mx-auto",
                                                    role: "img",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 448 512",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        fill: "currentColor",
                                                        d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#!",
                                                type: "button",
                                                className: "rounded-full border-2 border-grey-400 text-gray-400 leading-normal uppercase hover:bg-grey hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    "aria-hidden": "true",
                                                    focusable: "false",
                                                    "data-prefix": "fab",
                                                    "data-icon": "linkedin-in",
                                                    className: "w-3 h-full mx-auto",
                                                    role: "img",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 448 512",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        fill: "currentColor",
                                                        d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#!",
                                                type: "button",
                                                className: "rounded-full border-2 border-grey-400 text-gray-400 leading-normal uppercase hover:bg-grey hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    "aria-hidden": "true",
                                                    focusable: "false",
                                                    "data-prefix": "fab",
                                                    "data-icon": "github",
                                                    className: "w-3 h-full mx-auto",
                                                    role: "img",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 496 512",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        fill: "currentColor",
                                                        d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "md:hidden",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                            action: "",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "grid md:grid-cols-3 gird-cols-1 gap-4 justify-center items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "md:ml-auto md:mb-6",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                children: "Sign up for our newsletter"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                className: " my-1 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ",
                                                                type: "text",
                                                                name: "email",
                                                                id: "email",
                                                                placeholder: "Enter your email",
                                                                value: subscriberEmail,
                                                                onChange: (event)=>setSubscriberEmail(event.target.value),
                                                                required: true
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                onClick: handleSubscribe,
                                                                className: "bg-themecolor hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
                                                                children: "Subscribe"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppContext);


/***/ })

};
;