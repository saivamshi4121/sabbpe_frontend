(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Navbar/ProductsMegaMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductsMegaMenu",
    ()=>ProductsMegaMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
/**
 * Product categories displayed in the left sidebar
 */ const categories = [
    {
        id: "offline",
        label: "Offline Payments"
    },
    {
        id: "online",
        label: "Online Payments"
    },
    {
        id: "banking",
        label: "Banking Suite"
    },
    {
        id: "payroll",
        label: "Payroll & HR"
    }
];
/**
 * Mega menu content organized by category
 * Each category contains 3 columns of menu items
 */ const megaMenuContent = {
    offline: [
        {
            title: "UPI & Assisted",
            items: [
                {
                    name: "UPI Payments"
                },
                {
                    name: "SabbPe Minis",
                    tag: "Popular"
                },
                {
                    name: "VAS"
                }
            ]
        },
        {
            title: "Collections & Recurring",
            items: [
                {
                    name: "UPI Collections"
                },
                {
                    name: "UPI AutoPay"
                },
                {
                    name: "BBPS Services"
                }
            ]
        },
        {
            title: "Assisted Solutions",
            items: [
                {
                    name: "Payment Gateway"
                },
                {
                    name: "Payment Links"
                },
                {
                    name: "Payment Forms"
                },
                {
                    name: "Subscriptions"
                },
                {
                    name: "Payouts"
                },
                {
                    name: "SabbPe Integration"
                }
            ]
        }
    ],
    online: [
        {
            title: "Payment Processing",
            items: [
                {
                    name: "Credit/Debit Cards"
                },
                {
                    name: "Digital Wallets"
                },
                {
                    name: "Net Banking"
                }
            ]
        },
        {
            title: "Settlement & Reporting",
            items: [
                {
                    name: "Instant Settlement"
                },
                {
                    name: "Real-time Reports"
                },
                {
                    name: "Reconciliation"
                }
            ]
        },
        {
            title: "Integration",
            items: [
                {
                    name: "API Integration"
                },
                {
                    name: "Plugins"
                },
                {
                    name: "Custom Solutions"
                }
            ]
        }
    ],
    banking: [
        {
            title: "Account Services",
            items: [
                {
                    name: "Business Accounts"
                },
                {
                    name: "Savings Accounts"
                },
                {
                    name: "Compliance Suite"
                }
            ]
        },
        {
            title: "Lending Solutions",
            items: [
                {
                    name: "Quick Loans"
                },
                {
                    name: "Credit Lines"
                },
                {
                    name: "Invoice Financing"
                }
            ]
        },
        {
            title: "Treasury Management",
            items: [
                {
                    name: "Cash Management"
                },
                {
                    name: "FX Services"
                },
                {
                    name: "Hedging Tools"
                }
            ]
        }
    ],
    payroll: [
        {
            title: "Payroll Processing",
            items: [
                {
                    name: "Automated Payroll"
                },
                {
                    name: "Compliance Filing"
                },
                {
                    name: "Tax Calculations"
                }
            ]
        },
        {
            title: "HR Management",
            items: [
                {
                    name: "Leave Management"
                },
                {
                    name: "Attendance Tracking"
                },
                {
                    name: "Performance Reviews"
                }
            ]
        },
        {
            title: "Employee Benefits",
            items: [
                {
                    name: "Insurance Plans"
                },
                {
                    name: "Retirement Plans"
                },
                {
                    name: "Wellness Programs"
                }
            ]
        }
    ]
};
function MenuItemComponent({ item }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
        className: "relative px-3 py-2.5 text-white no-underline rounded-md text-sm font-normal leading-[1.4] transition-all duration-200 flex items-center gap-2 cursor-pointer hover:bg-[rgba(37,99,235,0.15)] hover:text-turquoise hover:pl-4",
        whileHover: {
            x: 4
        },
        transition: {
            duration: 0.15
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#",
            className: "text-inherit no-underline flex items-center gap-2 w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: item.name
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar/ProductsMegaMenu.tsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, this),
                item.tag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center px-2 py-0.5 bg-gradient-to-br from-[rgba(37,99,235,0.3)] to-[rgba(46,230,214,0.2)] border border-[rgba(46,230,214,0.4)] rounded text-xs font-semibold text-turquoise capitalize ml-auto flex-shrink-0 tracking-wide",
                    children: item.tag
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar/ProductsMegaMenu.tsx",
                    lineNumber: 165,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar/ProductsMegaMenu.tsx",
            lineNumber: 162,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Navbar/ProductsMegaMenu.tsx",
        lineNumber: 157,
        columnNumber: 5
    }, this);
}
_c = MenuItemComponent;
function CategoryButtonComponent({ category, isActive, onHover }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
        className: `relative px-4 py-3 bg-transparent text-text-secondary border-none rounded-lg text-sm font-medium text-left cursor-pointer transition-all duration-200 overflow-hidden hover:text-white hover:bg-[rgba(37,99,235,0.1)] ${isActive ? "text-primary-blue bg-[rgba(37,99,235,0.15)]" : ""}`,
        onClick: ()=>onHover(category.id),
        onMouseEnter: ()=>onHover(category.id),
        whileHover: {
            x: 4
        },
        transition: {
            duration: 0.15
        },
        children: [
            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary-blue to-turquoise rounded-r",
                layoutId: "productActiveBar",
                transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar/ProductsMegaMenu.tsx",
                lineNumber: 199,
                columnNumber: 9
            }, this),
            category.label
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navbar/ProductsMegaMenu.tsx",
        lineNumber: 189,
        columnNumber: 5
    }, this);
}
_c1 = CategoryButtonComponent;
function ProductsMegaMenu() {
    _s();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("offline");
    const content = megaMenuContent[activeCategory] || megaMenuContent.offline;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-[200px_1fr] gap-8 max-lg:grid-cols-[160px_1fr] max-lg:gap-6 max-md:grid-cols-1 max-md:gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-1 max-md:flex-row max-md:gap-2 max-md:overflow-x-auto max-md:pb-2",
                children: [
                    categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CategoryButtonComponent, {
                            category: category,
                            isActive: activeCategory === category.id,
                            onHover: setActiveCategory
                        }, category.id, false, {
                            fileName: "[project]/src/components/Navbar/ProductsMegaMenu.tsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[120px] bg-gradient-to-br from-[rgba(37,99,235,0.1)] to-[rgba(46,230,214,0.05)] border border-[rgba(96,165,250,0.15)] rounded-lg flex items-center justify-center text-text-secondary text-xs mt-4 max-md:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: "Scan & Pay"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar/ProductsMegaMenu.tsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar/ProductsMegaMenu.tsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar/ProductsMegaMenu.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-6 max-lg:gap-4 max-md:gap-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: 4
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        exit: {
                            opacity: 0,
                            x: -4
                        },
                        transition: {
                            duration: 0.2,
                            ease: "easeOut"
                        },
                        className: "grid grid-cols-3 gap-6 overflow-hidden max-lg:grid-cols-2 max-lg:gap-4 max-md:grid-cols-1 max-md:gap-3",
                        children: content.map((column, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xs font-semibold text-text-secondary uppercase tracking-wider pb-2 border-b border-[rgba(255,255,255,0.05)]",
                                        children: column.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar/ProductsMegaMenu.tsx",
                                        lineNumber: 255,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "flex flex-col gap-2 list-none m-0 p-0",
                                        children: column.items.map((item, itemIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuItemComponent, {
                                                item: item
                                            }, itemIdx, false, {
                                                fileName: "[project]/src/components/Navbar/ProductsMegaMenu.tsx",
                                                lineNumber: 260,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar/ProductsMegaMenu.tsx",
                                        lineNumber: 258,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/src/components/Navbar/ProductsMegaMenu.tsx",
                                lineNumber: 254,
                                columnNumber: 15
                            }, this))
                    }, activeCategory, false, {
                        fileName: "[project]/src/components/Navbar/ProductsMegaMenu.tsx",
                        lineNumber: 245,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar/ProductsMegaMenu.tsx",
                    lineNumber: 244,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar/ProductsMegaMenu.tsx",
                lineNumber: 243,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navbar/ProductsMegaMenu.tsx",
        lineNumber: 224,
        columnNumber: 5
    }, this);
}
_s(ProductsMegaMenu, "HIoAOQkwPR38LmRtIs7zS7JDfYE=");
_c2 = ProductsMegaMenu;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "MenuItemComponent");
__turbopack_context__.k.register(_c1, "CategoryButtonComponent");
__turbopack_context__.k.register(_c2, "ProductsMegaMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Navbar/TechnologyMegaMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TechnologyMegaMenu",
    ()=>TechnologyMegaMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
/**
 * Technology categories displayed in the left sidebar
 */ const categories = [
    {
        id: "capabilities",
        label: "Technology Capabilities"
    },
    {
        id: "advanced",
        label: "Advanced Technologies"
    }
];
/**
 * Mega menu content organized by category
 * Each category contains 3 columns of menu items
 */ const megaMenuContent = {
    capabilities: [
        {
            title: "Development",
            items: [
                {
                    name: "Custom App Development"
                },
                {
                    name: "Digital Transformation"
                },
                {
                    name: "Enterprise Mobility"
                }
            ]
        },
        {
            title: "Design & Strategy",
            items: [
                {
                    name: "UI/UX Design Thinking"
                },
                {
                    name: "Technology Consulting"
                },
                {
                    name: "IT Staff Augmentation"
                }
            ]
        },
        {
            title: "Recruitment",
            items: [
                {
                    name: "Managed Recruitment"
                },
                {
                    name: "Talent Solutions"
                },
                {
                    name: "Strategic Staffing"
                }
            ]
        }
    ],
    advanced: [
        {
            title: "AI & Data",
            items: [
                {
                    name: "Artificial Intelligence"
                },
                {
                    name: "Machine Learning"
                },
                {
                    name: "Big Data & Analytics"
                }
            ]
        },
        {
            title: "Infrastructure",
            items: [
                {
                    name: "Cloud Computing"
                },
                {
                    name: "Blockchain Development"
                },
                {
                    name: "Internet of Things"
                }
            ]
        },
        {
            title: "Next-Gen Tech",
            items: [
                {
                    name: "Chatbot Development"
                },
                {
                    name: "Progressive Web Apps"
                },
                {
                    name: "Metaverse & AR/VR"
                }
            ]
        }
    ]
};
function MenuItemComponent({ item }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
        className: "relative px-3 py-2.5 text-white no-underline rounded-md text-sm font-normal leading-[1.4] transition-all duration-200 flex items-center gap-2 cursor-pointer hover:bg-[rgba(37,99,235,0.15)] hover:text-turquoise hover:pl-4",
        whileHover: {
            x: 4
        },
        transition: {
            duration: 0.15
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#",
            className: "text-inherit no-underline flex items-center gap-2 w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: item.name
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar/TechnologyMegaMenu.tsx",
                lineNumber: 105,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar/TechnologyMegaMenu.tsx",
            lineNumber: 104,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Navbar/TechnologyMegaMenu.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_c = MenuItemComponent;
function CategoryButtonComponent({ category, isActive, onHover }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
        className: `relative px-4 py-3 bg-transparent text-text-secondary border-none rounded-lg text-sm font-medium text-left cursor-pointer transition-all duration-200 overflow-hidden hover:text-white hover:bg-[rgba(37,99,235,0.1)] ${isActive ? "text-primary-blue bg-[rgba(37,99,235,0.15)]" : ""}`,
        onClick: ()=>onHover(category.id),
        onMouseEnter: ()=>onHover(category.id),
        whileHover: {
            x: 4
        },
        transition: {
            duration: 0.15
        },
        children: [
            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary-blue to-turquoise rounded-r",
                layoutId: "techActiveBar",
                transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar/TechnologyMegaMenu.tsx",
                lineNumber: 136,
                columnNumber: 9
            }, this),
            category.label
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navbar/TechnologyMegaMenu.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_c1 = CategoryButtonComponent;
function TechnologyMegaMenu() {
    _s();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("capabilities");
    const content = megaMenuContent[activeCategory] || megaMenuContent.capabilities;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-[200px_1fr] gap-8 max-lg:grid-cols-[160px_1fr] max-lg:gap-6 max-md:grid-cols-1 max-md:gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-1 max-md:flex-row max-md:gap-2 max-md:overflow-x-auto max-md:pb-2",
                children: [
                    categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CategoryButtonComponent, {
                            category: category,
                            isActive: activeCategory === category.id,
                            onHover: setActiveCategory
                        }, category.id, false, {
                            fileName: "[project]/src/components/Navbar/TechnologyMegaMenu.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[140px] bg-gradient-to-br from-[rgba(37,99,235,0.1)] to-[rgba(46,230,214,0.05)] border border-[rgba(96,165,250,0.15)] rounded-lg flex items-center justify-center text-text-secondary text-xs mt-4 max-md:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: "SabbPe Tech Graph"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar/TechnologyMegaMenu.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar/TechnologyMegaMenu.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar/TechnologyMegaMenu.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-6 max-lg:gap-4 max-md:gap-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: 4
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        exit: {
                            opacity: 0,
                            x: -4
                        },
                        transition: {
                            duration: 0.2,
                            ease: "easeOut"
                        },
                        className: "grid grid-cols-3 gap-6 overflow-hidden max-lg:grid-cols-2 max-lg:gap-4 max-md:grid-cols-1 max-md:gap-3",
                        children: content.map((column, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xs font-semibold text-text-secondary uppercase tracking-wider pb-2 border-b border-[rgba(255,255,255,0.05)]",
                                        children: column.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar/TechnologyMegaMenu.tsx",
                                        lineNumber: 192,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "flex flex-col gap-2 list-none m-0 p-0",
                                        children: column.items.map((item, itemIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuItemComponent, {
                                                item: item
                                            }, itemIdx, false, {
                                                fileName: "[project]/src/components/Navbar/TechnologyMegaMenu.tsx",
                                                lineNumber: 197,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar/TechnologyMegaMenu.tsx",
                                        lineNumber: 195,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/src/components/Navbar/TechnologyMegaMenu.tsx",
                                lineNumber: 191,
                                columnNumber: 15
                            }, this))
                    }, activeCategory, false, {
                        fileName: "[project]/src/components/Navbar/TechnologyMegaMenu.tsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar/TechnologyMegaMenu.tsx",
                    lineNumber: 181,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar/TechnologyMegaMenu.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navbar/TechnologyMegaMenu.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
_s(TechnologyMegaMenu, "uxspoRoLrbXzieeW1E8rowSCGHs=");
_c2 = TechnologyMegaMenu;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "MenuItemComponent");
__turbopack_context__.k.register(_c1, "CategoryButtonComponent");
__turbopack_context__.k.register(_c2, "TechnologyMegaMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Navbar/SaaSMegaMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SaaSMegaMenu",
    ()=>SaaSMegaMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
/**
 * Icon Components - Minimal SVG icons for SaaS items
 */ const PaymentIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "5",
                width: "20",
                height: "14",
                rx: "2",
                stroke: "currentColor",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
                lineNumber: 11,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "2",
                y1: "10",
                x2: "22",
                y2: "10",
                stroke: "currentColor",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
                lineNumber: 12,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "18",
                cy: "16",
                r: "1.5",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
                lineNumber: 13,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = PaymentIcon;
const GiftIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2V10",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
                lineNumber: 19,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 8H22V21C22 22.1046 21.1046 23 20 23H4C2.89543 23 2 22.1046 2 21V8Z",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
                lineNumber: 20,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 8V6C8 4.89543 8.89543 4 10 4H14C15.1046 4 16 4.89543 16 6V8",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
                lineNumber: 21,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = GiftIcon;
const HeartIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
            lineNumber: 27,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
        lineNumber: 26,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = HeartIcon;
const ChartIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M3 12V21M3 3V5M9 6V21M9 3V6M15 12V21M15 3V12M21 9V21M21 3V9",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
            lineNumber: 33,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
        lineNumber: 32,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = ChartIcon;
const saasCards = [
    {
        title: "SaaS Payment Platforms",
        subtitle: "Integrated billing and invoicing",
        href: "/saas/payment-platforms",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PaymentIcon, {}, void 0, false, {
            fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
            lineNumber: 49,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Gift Card Systems",
        subtitle: "Issuance and redemption management",
        href: "/saas/gift-cards",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GiftIcon, {}, void 0, false, {
            fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
            lineNumber: 55,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Loyalty Platforms",
        subtitle: "Reward engines for retention",
        href: "/saas/loyalty",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeartIcon, {}, void 0, false, {
            fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
            lineNumber: 61,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Analytics Dashboards",
        subtitle: "Real-time insights and reporting",
        href: "/saas/analytics",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartIcon, {}, void 0, false, {
            fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
            lineNumber: 67,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    }
];
/**
 * SaaSCard Component
 */ function SaaSCardItem({ card }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: card.href,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "group relative p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-blue-400/40 cursor-pointer transition-all duration-300",
            whileHover: {
                y: -2
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/5 transition-all duration-300"
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 flex items-start gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 flex-shrink-0 mt-1",
                            children: card.icon
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-semibold text-white text-sm leading-tight group-hover:text-cyan-100 transition-colors duration-300",
                                    children: card.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-400 mt-1 group-hover:text-gray-300 transition-colors duration-300",
                                    children: card.subtitle
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
            lineNumber: 77,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c4 = SaaSCardItem;
function SaaSMegaMenu() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "w-[920px] max-w-[920px] max-lg:w-[92vw] max-lg:max-w-[92vw] rounded-2xl backdrop-blur-2xl p-6 md:p-8",
        style: {
            background: "rgba(15, 23, 42, 0.88)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.4)"
        },
        initial: {
            opacity: 0,
            y: -10
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: -10
        },
        transition: {
            duration: 0.25
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:gap-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "flex flex-col justify-between",
                    initial: {
                        opacity: 0,
                        x: -10
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: 0.3,
                        delay: 0.05
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-semibold text-blue-300 uppercase tracking-wide",
                                        children: "SabbPe Enterprise"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl md:text-3xl font-bold text-white mb-3 leading-tight",
                                    children: "SaaS Platforms"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-400 leading-relaxed mb-6",
                                    children: "Enterprise-grade digital infrastructure built for scale and reliability. Empower your institution with our trusted fintech solutions."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/saas/payment-platforms",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                className: "group inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors duration-300",
                                whileHover: {
                                    x: 4
                                },
                                whileTap: {
                                    scale: 0.95
                                },
                                children: [
                                    "View SaaS Platforms",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        initial: {
                                            x: 0
                                        },
                                        whileHover: {
                                            x: 2
                                        },
                                        transition: {
                                            duration: 0.2
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M5 12H19M19 12L12 5M19 12L12 19",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4",
                    initial: {
                        opacity: 0,
                        x: 10
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: 0.3,
                        delay: 0.1
                    },
                    children: saasCards.map((card, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.25,
                                delay: 0.15 + idx * 0.05
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SaaSCardItem, {
                                card: card
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
                                lineNumber: 194,
                                columnNumber: 15
                            }, this)
                        }, idx, false, {
                            fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
                            lineNumber: 188,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
                    lineNumber: 181,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
            lineNumber: 127,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Navbar/SaaSMegaMenu.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_c5 = SaaSMegaMenu;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "PaymentIcon");
__turbopack_context__.k.register(_c1, "GiftIcon");
__turbopack_context__.k.register(_c2, "HeartIcon");
__turbopack_context__.k.register(_c3, "ChartIcon");
__turbopack_context__.k.register(_c4, "SaaSCardItem");
__turbopack_context__.k.register(_c5, "SaaSMegaMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Navbar/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-navigation-menu/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$ProductsMegaMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar/ProductsMegaMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$TechnologyMegaMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar/TechnologyMegaMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$SaaSMegaMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar/SaaSMegaMenu.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function Navbar() {
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 20);
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    // Handle escape key to close dropdown
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleEscape = {
                "Navbar.useEffect.handleEscape": (e)=>{
                    if (e.key === "Escape") {
                        setValue("");
                    }
                }
            }["Navbar.useEffect.handleEscape"];
            window.addEventListener("keydown", handleEscape);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("keydown", handleEscape)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    // Close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleClickOutside = {
                "Navbar.useEffect.handleClickOutside": (e)=>{
                    const target = e.target;
                    // Keep menu open if clicking on trigger or menu content
                    if (target.closest("[data-navigation-menu-trigger]") || target.closest("[data-navigation-menu-content]")) {
                        return;
                    }
                    setValue("");
                }
            }["Navbar.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "Navbar.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("sticky top-0 z-[1000] w-full overflow-visible transition-all duration-300", "bg-[rgba(14,26,43,0.85)] backdrop-blur-glass backdrop-saturate-180", "border-b border-[rgba(96,165,250,0.15)]", isScrolled && "bg-[rgba(14,26,43,0.95)] backdrop-blur-[24px] backdrop-saturate-200 shadow-[0_4px_24px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.08)] border-[rgba(255,255,255,0.1)]"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1600px] mx-auto px-16 grid grid-cols-[auto_1fr_auto] gap-12 h-[72px] items-center overflow-visible relative max-xl:px-12 max-xl:gap-10 max-md:px-6 max-md:gap-6 max-md:grid-cols-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "flex items-center flex-shrink-0 cursor-pointer",
                    whileHover: {
                        scale: 1.02
                    },
                    transition: {
                        duration: 0.2
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-2xl font-bold text-white tracking-tight",
                        children: "SabbPe"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar/Navbar.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar/Navbar.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
                    value: value,
                    onValueChange: setValue,
                    delayDuration: 150,
                    skipDelayDuration: 500,
                    className: "flex-1",
                    suppressHydrationWarning: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
                        className: "flex items-center justify-center list-none m-0 p-0 gap-3 relative max-md:hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
                                value: "products",
                                className: "relative overflow-visible",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("relative", value === "products" && "text-white bg-[rgba(37,99,235,0.2)] border-[rgba(37,99,235,0.6)] shadow-[0_0_24px_rgba(37,99,235,0.25),inset_0_0_20px_rgba(37,99,235,0.1)]"),
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        transition: {
                                            duration: 0.2
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("flex items-center justify-center relative px-5 py-2.5 text-text-secondary text-sm font-medium tracking-wide", "bg-transparent border border-[rgba(160,174,192,0.3)] rounded-full cursor-pointer", "transition-all duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] whitespace-nowrap overflow-visible", "hover:text-white hover:bg-[rgba(37,99,235,0.1)] hover:border-[rgba(37,99,235,0.4)]", "hover:shadow-[0_0_20px_rgba(37,99,235,0.2),inset_0_0_20px_rgba(37,99,235,0.1)]", value === "products" && "text-white bg-[rgba(37,99,235,0.2)] border-[rgba(37,99,235,0.6)] shadow-[0_0_24px_rgba(37,99,235,0.25),inset_0_0_20px_rgba(37,99,235,0.1)]"),
                                            "data-navigation-menu-trigger": "products",
                                            children: "Products"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar/Navbar.tsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar/Navbar.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("fixed top-[72px] left-1/2 -translate-x-1/2", "w-[1200px] max-w-[calc(100vw-32px)]", "bg-[rgba(20,35,60,0.95)] backdrop-blur-xl backdrop-saturate-180", "border border-[rgba(96,165,250,0.15)] rounded-3xl p-0 mt-3", "shadow-[0_30px_80px_rgba(0,0,0,0.35)] z-[1001] overflow-visible pointer-events-auto", "before:content-[''] before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:h-3 before:pointer-events-auto"),
                                        "data-navigation-menu-content": "products",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            children: value === "products" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: -3
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                exit: {
                                                    opacity: 0,
                                                    y: -3
                                                },
                                                transition: {
                                                    duration: 0.2,
                                                    ease: "easeOut"
                                                },
                                                className: "p-8 w-full max-lg:p-6 max-md:p-5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$ProductsMegaMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductsMegaMenu"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/Navbar/Navbar.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar/Navbar.tsx",
                                                lineNumber: 126,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar/Navbar.tsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar/Navbar.tsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar/Navbar.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
                                value: "saas",
                                className: "relative overflow-visible",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("relative", value === "saas" && "text-white bg-[rgba(37,99,235,0.2)] border-[rgba(37,99,235,0.6)] shadow-[0_0_24px_rgba(37,99,235,0.25),inset_0_0_20px_rgba(37,99,235,0.1)]"),
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        transition: {
                                            duration: 0.2
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("flex items-center justify-center relative px-5 py-2.5 text-text-secondary text-sm font-medium tracking-wide", "bg-transparent border border-[rgba(160,174,192,0.3)] rounded-full cursor-pointer", "transition-all duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] whitespace-nowrap overflow-visible", "hover:text-white hover:bg-[rgba(37,99,235,0.1)] hover:border-[rgba(37,99,235,0.4)]", "hover:shadow-[0_0_20px_rgba(37,99,235,0.2),inset_0_0_20px_rgba(37,99,235,0.1)]", value === "saas" && "text-white bg-[rgba(37,99,235,0.2)] border-[rgba(37,99,235,0.6)] shadow-[0_0_24px_rgba(37,99,235,0.25),inset_0_0_20px_rgba(37,99,235,0.1)]"),
                                            "data-navigation-menu-trigger": "saas",
                                            children: "SaaS"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar/Navbar.tsx",
                                            lineNumber: 150,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar/Navbar.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-max min-w-[800px]", "bg-[rgba(20,35,60,0.9)] backdrop-blur-glass backdrop-saturate-180", "border border-[rgba(96,165,250,0.15)] rounded-xl p-0 mt-[-8px]", "shadow-[0_20px_64px_rgba(0,0,0,0.3)] z-[1001] overflow-visible pointer-events-auto", "before:content-[''] before:absolute before:bottom-full before:left-0 before:right-0 before:h-4 before:pointer-events-auto", "max-lg:min-w-[700px] max-md:min-w-[calc(100vw-48px)]"),
                                        "data-navigation-menu-content": "saas",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            children: value === "saas" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: -3
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                exit: {
                                                    opacity: 0,
                                                    y: -3
                                                },
                                                transition: {
                                                    duration: 0.2,
                                                    ease: "easeOut"
                                                },
                                                className: "p-0 w-full max-lg:p-0 max-md:p-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$SaaSMegaMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SaaSMegaMenu"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/Navbar/Navbar.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar/Navbar.tsx",
                                                lineNumber: 177,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar/Navbar.tsx",
                                            lineNumber: 175,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar/Navbar.tsx",
                                        lineNumber: 164,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar/Navbar.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
                                value: "technology",
                                className: "relative overflow-visible",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("relative", value === "technology" && "text-white bg-[rgba(37,99,235,0.2)] border-[rgba(37,99,235,0.6)] shadow-[0_0_24px_rgba(37,99,235,0.25),inset_0_0_20px_rgba(37,99,235,0.1)]"),
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        transition: {
                                            duration: 0.2
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("flex items-center justify-center relative px-5 py-2.5 text-text-secondary text-sm font-medium tracking-wide", "bg-transparent border border-[rgba(160,174,192,0.3)] rounded-full cursor-pointer", "transition-all duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] whitespace-nowrap overflow-visible", "hover:text-white hover:bg-[rgba(37,99,235,0.1)] hover:border-[rgba(37,99,235,0.4)]", "hover:shadow-[0_0_20px_rgba(37,99,235,0.2),inset_0_0_20px_rgba(37,99,235,0.1)]", value === "technology" && "text-white bg-[rgba(37,99,235,0.2)] border-[rgba(37,99,235,0.6)] shadow-[0_0_24px_rgba(37,99,235,0.25),inset_0_0_20px_rgba(37,99,235,0.1)]"),
                                            "data-navigation-menu-trigger": "technology",
                                            children: "Technology"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar/Navbar.tsx",
                                            lineNumber: 201,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar/Navbar.tsx",
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-max min-w-[1000px]", "bg-[rgba(20,35,60,0.9)] backdrop-blur-glass backdrop-saturate-180", "border border-[rgba(96,165,250,0.15)] rounded-xl p-0 mt-[-8px]", "shadow-[0_20px_64px_rgba(0,0,0,0.3)] z-[1001] overflow-visible pointer-events-auto", "before:content-[''] before:absolute before:bottom-full before:left-0 before:right-0 before:h-4 before:pointer-events-auto", "max-lg:min-w-[900px] max-md:min-w-[calc(100vw-48px)]"),
                                        "data-navigation-menu-content": "technology",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            children: value === "technology" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: -3
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                exit: {
                                                    opacity: 0,
                                                    y: -3
                                                },
                                                transition: {
                                                    duration: 0.2,
                                                    ease: "easeOut"
                                                },
                                                className: "p-8 w-full max-lg:p-6 max-md:p-5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2f$TechnologyMegaMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TechnologyMegaMenu"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/Navbar/Navbar.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar/Navbar.tsx",
                                                lineNumber: 228,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar/Navbar.tsx",
                                            lineNumber: 226,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar/Navbar.tsx",
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar/Navbar.tsx",
                                lineNumber: 192,
                                columnNumber: 13
                            }, this),
                            [
                                {
                                    label: "Services",
                                    value: "services"
                                },
                                {
                                    label: "About Us",
                                    value: "about"
                                },
                                {
                                    label: "Contact Us",
                                    value: "contact"
                                }
                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
                                    value: item.value,
                                    className: "relative overflow-visible",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("relative flex items-center", value === item.value && "text-white bg-[rgba(37,99,235,0.2)] border-[rgba(37,99,235,0.6)] shadow-[0_0_24px_rgba(37,99,235,0.25),inset_0_0_20px_rgba(37,99,235,0.1)]"),
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        transition: {
                                            duration: 0.2
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("flex items-center justify-center relative px-5 py-2.5 text-text-secondary text-sm font-medium tracking-wide", "bg-transparent border border-[rgba(160,174,192,0.3)] rounded-full cursor-pointer", "transition-all duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] whitespace-nowrap overflow-visible", "hover:text-white hover:bg-[rgba(37,99,235,0.1)] hover:border-[rgba(37,99,235,0.4)]", "hover:shadow-[0_0_20px_rgba(37,99,235,0.2),inset_0_0_20px_rgba(37,99,235,0.1)]", value === item.value && "text-white bg-[rgba(37,99,235,0.2)] border-[rgba(37,99,235,0.6)] shadow-[0_0_24px_rgba(37,99,235,0.25),inset_0_0_20px_rgba(37,99,235,0.1)]"),
                                            "data-navigation-menu-trigger": item.value,
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar/Navbar.tsx",
                                            lineNumber: 261,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar/Navbar.tsx",
                                        lineNumber: 253,
                                        columnNumber: 17
                                    }, this)
                                }, item.value, false, {
                                    fileName: "[project]/src/components/Navbar/Navbar.tsx",
                                    lineNumber: 248,
                                    columnNumber: 15
                                }, this)),
                            "          "
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar/Navbar.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar/Navbar.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar/Navbar.tsx",
            lineNumber: 69,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Navbar/Navbar.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(Navbar, "OuyleqyqO+Z7EnKAKpCEXvH+qvI=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Navbar/Navbar.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/Navbar/Navbar.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_Navbar_8d70ce3e._.js.map