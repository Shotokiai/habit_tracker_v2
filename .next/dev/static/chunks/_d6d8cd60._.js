(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/dot-grid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DotGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function DotGrid({ gridSize, spacing, dotSize, dayRecords }) {
    const getRecordType = (x, y)=>{
        // Find if there's a record at this exact coordinate
        const exactRecord = dayRecords.find((record)=>record.x === x && record.y === y);
        if (!exactRecord) return 'none';
        // This coordinate has a record - determine if it's success or miss
        // Look at the previous record to see if progress was made
        if (x > 1) {
            const previousRecord = dayRecords.find((r)=>r.x === x - 1);
            if (previousRecord) {
                // If y increased from previous day = success (black dot)
                if (exactRecord.y > previousRecord.y) {
                    return 'success';
                } else if (exactRecord.y < previousRecord.y) {
                    return 'missed';
                } else {
                    return 'success';
                }
            }
        } else if (x === 1) {
            // First day: if y > 0 = success, if y = 0 = missed
            return exactRecord.y > 0 ? 'success' : 'missed';
        }
        return 'success';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        style: {
            width: gridSize * spacing,
            height: gridSize * spacing
        },
        children: Array.from({
            length: gridSize
        }, (_, i)=>i + 1).map((x)=>Array.from({
                length: gridSize
            }, (_, i)=>i + 1).map((y)=>{
                const posX = x * spacing - spacing / 2;
                const posY = (gridSize - y + 1) * spacing - spacing / 2;
                const recordType = getRecordType(x, y);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute rounded-full transition-all ${recordType === 'success' ? 'scale-150' : recordType === 'missed' ? 'scale-150' : 'bg-muted scale-100'}`,
                    style: {
                        width: dotSize,
                        height: dotSize,
                        left: posX,
                        top: posY,
                        transform: "translate(-50%, -50%)",
                        backgroundColor: recordType === 'success' ? '#10B981' : recordType === 'missed' ? '#D97706' : undefined,
                        boxShadow: recordType === 'success' ? '0 0 8px rgba(16, 185, 129, 0.6), 0 0 16px rgba(16, 185, 129, 0.3)' : recordType === 'missed' ? '0 0 6px rgba(217, 119, 6, 0.5)' : 'none'
                    }
                }, `${x}-${y}`, false, {
                    fileName: "[project]/components/dot-grid.tsx",
                    lineNumber: 60,
                    columnNumber: 14
                }, this);
            }))
    }, void 0, false, {
        fileName: "[project]/components/dot-grid.tsx",
        lineNumber: 48,
        columnNumber: 10
    }, this);
}
_c = DotGrid;
var _c;
__turbopack_context__.k.register(_c, "DotGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/habit-grid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HabitGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dot$2d$grid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dot-grid.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function HabitGrid({ dayRecords }) {
    _s();
    const gridSize = 30;
    const dotSize = 6; // Reduced from 8
    const spacing = 10; // Reduced from 12
    const gridWidth = gridSize * spacing;
    const gridHeight = gridSize * spacing;
    // Calculate completed days
    const completedDays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HabitGrid.useMemo[completedDays]": ()=>{
            if (dayRecords.length === 0) return 0;
            let completed = 0;
            dayRecords.forEach({
                "HabitGrid.useMemo[completedDays]": (record, index)=>{
                    const prevRecord = index > 0 ? dayRecords[index - 1] : null;
                    const prevY = prevRecord ? prevRecord.y : 0;
                    // A day is completed if y value increased from previous day
                    if (record.y > prevY) {
                        completed++;
                    }
                }
            }["HabitGrid.useMemo[completedDays]"]);
            return completed;
        }
    }["HabitGrid.useMemo[completedDays]"], [
        dayRecords
    ]);
    const linePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HabitGrid.useMemo[linePath]": ()=>{
            if (dayRecords.length === 0) return "";
            const points = [];
            dayRecords.forEach({
                "HabitGrid.useMemo[linePath]": (record)=>{
                    // Account for container padding (p-1 = 4px)
                    const x = record.x * spacing - spacing / 2 + 4;
                    const y = (gridSize - record.y + 1) * spacing - spacing / 2 + 4;
                    points.push(`${x},${y}`);
                }
            }["HabitGrid.useMemo[linePath]"]);
            return "M " + points.join(" L ");
        }
    }["HabitGrid.useMemo[linePath]"], [
        dayRecords,
        gridSize,
        spacing
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-2 pl-6 pr-4 py-2 w-full h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex-shrink-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -left-6 top-0 flex flex-col justify-between text-xs font-semibold text-foreground",
                    style: {
                        height: gridHeight + 16,
                        paddingTop: 8,
                        paddingBottom: 8
                    },
                    children: Array.from({
                        length: gridSize
                    }, (_, i)=>{
                        const num = gridSize - i;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-end w-5",
                            style: {
                                height: spacing
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-right text-gray-700",
                                style: {
                                    fontSize: '10px',
                                    lineHeight: '12px',
                                    fontWeight: '600'
                                },
                                children: num % 5 === 0 ? num : ''
                            }, void 0, false, {
                                fileName: "[project]/components/habit-grid.tsx",
                                lineNumber: 61,
                                columnNumber: 17
                            }, this)
                        }, num, false, {
                            fileName: "[project]/components/habit-grid.tsx",
                            lineNumber: 58,
                            columnNumber: 18
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/habit-grid.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative bg-card border border-foreground/20 rounded-lg p-1 shadow-md",
                    style: {
                        width: gridWidth + 16,
                        height: gridHeight + 16
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: gridWidth + 32,
                            height: gridHeight + 32,
                            className: "absolute inset-0 pointer-events-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: 1 * spacing - spacing / 2 + 4,
                                    y1: (gridSize - 1 + 1) * spacing - spacing / 2 + 4,
                                    x2: 30 * spacing - spacing / 2 + 4,
                                    y2: (gridSize - 30 + 1) * spacing - spacing / 2 + 4,
                                    stroke: "black",
                                    strokeWidth: "1"
                                }, void 0, false, {
                                    fileName: "[project]/components/habit-grid.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                dayRecords.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                    points: linePath,
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    className: "text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/components/habit-grid.tsx",
                                    lineNumber: 78,
                                    columnNumber: 39
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/habit-grid.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dot$2d$grid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            gridSize: gridSize,
                            spacing: spacing,
                            dotSize: dotSize,
                            dayRecords: dayRecords
                        }, void 0, false, {
                            fileName: "[project]/components/habit-grid.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/habit-grid.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between mt-1 text-xs font-semibold text-foreground",
                    style: {
                        width: gridWidth + 16,
                        paddingLeft: 8,
                        paddingRight: 8
                    },
                    children: Array.from({
                        length: gridSize
                    }, (_, i)=>{
                        const num = i + 1;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center",
                            style: {
                                width: spacing
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs",
                                style: {
                                    fontSize: '10px'
                                },
                                children: num % 5 === 0 ? num : ''
                            }, void 0, false, {
                                fileName: "[project]/components/habit-grid.tsx",
                                lineNumber: 96,
                                columnNumber: 17
                            }, this)
                        }, num, false, {
                            fileName: "[project]/components/habit-grid.tsx",
                            lineNumber: 93,
                            columnNumber: 18
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/habit-grid.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/habit-grid.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/habit-grid.tsx",
        lineNumber: 47,
        columnNumber: 10
    }, this);
}
_s(HabitGrid, "Dq6732afZ4CGoQ5BpLECblAA8UY=");
_c = HabitGrid;
var _c;
__turbopack_context__.k.register(_c, "HabitGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/habit-header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HabitHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function HabitHeader({ onSave, isSaved, habitData }) {
    _s();
    const [habitName, setHabitName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(habitData.name);
    const handleSave = ()=>{
        if (habitName.trim()) {
            onSave(habitName, "");
            setHabitName("");
        }
    };
    // No compact mode needed, always show main form
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex flex-col items-center justify-center min-h-screen p-4 gap-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-sm bg-card border border-foreground/10 rounded-lg p-6 shadow-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-foreground mb-4 text-center",
                    children: "Create New Habit"
                }, void 0, false, {
                    fileName: "[project]/components/habit-header.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-foreground mb-2",
                                    children: "Habit Name"
                                }, void 0, false, {
                                    fileName: "[project]/components/habit-header.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: habitName,
                                    onChange: (e)=>setHabitName(e.target.value),
                                    placeholder: "e.g., Phone Habit",
                                    className: "w-full px-4 py-2 border border-foreground/20 rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                }, void 0, false, {
                                    fileName: "[project]/components/habit-header.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/habit-header.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSave,
                            disabled: !habitName.trim(),
                            className: "w-full px-4 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity border border-primary disabled:opacity-50 disabled:cursor-not-allowed mt-2",
                            children: "Create Habit"
                        }, void 0, false, {
                            fileName: "[project]/components/habit-header.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/habit-header.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/habit-header.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/habit-header.tsx",
        lineNumber: 27,
        columnNumber: 10
    }, this);
}
_s(HabitHeader, "QbiDZBvgg533ikgPxctCwUS7P6o=");
_c = HabitHeader;
var _c;
__turbopack_context__.k.register(_c, "HabitHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/habit-calendar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HabitCalendar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function HabitCalendar({ dayRecords, habitStartDate }) {
    _s();
    const currentDate = new Date();
    const startDate = new Date(habitStartDate);
    // Calculate the end date (30 days from habit start)
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 29); // 30 days total (including start date)
    // State for current viewing month
    const [viewingMonth, setViewingMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(startDate.getMonth());
    const [viewingYear, setViewingYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(startDate.getFullYear());
    // Month names
    const monthNames = [
        "JANUARY",
        "FEBRUARY",
        "MARCH",
        "APRIL",
        "MAY",
        "JUNE",
        "JULY",
        "AUGUST",
        "SEPTEMBER",
        "OCTOBER",
        "NOVEMBER",
        "DECEMBER"
    ];
    // Calculate remaining days for header
    const today = new Date();
    let remainingDays = 0;
    if (today <= endDate) {
        const timeDiff = endDate.getTime() - today.getTime();
        remainingDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
    }
    // Get day status for a specific calendar date
    const getDayStatus = (date, day)=>{
        // Create date-only versions for proper comparison (remove time component)
        const dateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        const startDateOnly = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
        const endDateOnly = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
        // Check if this day is before habit start or after habit 30-day period
        if (dateOnly < startDateOnly || dateOnly > endDateOnly) {
            return 'inactive';
        }
        // All days from habit start date to end date are active (white background)
        // Calculate which habit day this is (1-30)
        const timeDiff = dateOnly.getTime() - startDateOnly.getTime();
        const habitDay = Math.floor(timeDiff / (1000 * 3600 * 24)) + 1;
        // Find record for this habit day
        const record = dayRecords.find((r)=>r.x === habitDay);
        if (!record) {
            return 'pending'; // No action taken yet - white background
        }
        // Check if this day was completed or missed
        const prevRecord = dayRecords.find((r)=>r.x === habitDay - 1);
        const prevY = prevRecord ? prevRecord.y : 0;
        return record.y > prevY ? 'completed' : 'missed';
    };
    // Generate calendar for current viewing month
    const generateMonthCalendar = ()=>{
        const daysInMonth = new Date(viewingYear, viewingMonth + 1, 0).getDate();
        const firstDayOfMonth = new Date(viewingYear, viewingMonth, 1).getDay();
        const calendarDays = [];
        // Empty cells for days before month starts
        for(let i = 0; i < firstDayOfMonth; i++){
            calendarDays.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-10 h-10"
            }, `empty-${i}`, false, {
                fileName: "[project]/components/habit-calendar.tsx",
                lineNumber: 72,
                columnNumber: 25
            }, this));
        }
        // Days of the month
        for(let day = 1; day <= daysInMonth; day++){
            const date = new Date(viewingYear, viewingMonth, day);
            const status = getDayStatus(date, day);
            const isToday = date.toDateString() === currentDate.toDateString();
            calendarDays.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-10 h-10 flex items-center justify-center text-sm font-medium relative ${isToday ? 'ring-1 ring-blue-400' : ''}`,
                style: {
                    backgroundColor: status === 'inactive' ? '#f3f4f6' : status === 'completed' ? '#22c55e' : '#ffffff',
                    color: status === 'inactive' ? '#9ca3af' : status === 'completed' ? '#ffffff' : '#374151',
                    border: '1px solid #e5e7eb',
                    borderRadius: '2px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${status === 'inactive' ? 'opacity-60' : ''} relative z-10`,
                        children: day
                    }, void 0, false, {
                        fileName: "[project]/components/habit-calendar.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this),
                    status === 'completed' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0.5 right-0.5 text-white text-xs leading-none",
                        style: {
                            fontSize: '10px'
                        },
                        children: "✓"
                    }, void 0, false, {
                        fileName: "[project]/components/habit-calendar.tsx",
                        lineNumber: 89,
                        columnNumber: 38
                    }, this),
                    status === 'missed' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 rounded-sm",
                                style: {
                                    backgroundColor: 'rgba(239, 68, 68, 0.15)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/habit-calendar.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-1 right-1 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold",
                                style: {
                                    backgroundColor: '#ef4444'
                                },
                                children: "✗"
                            }, void 0, false, {
                                fileName: "[project]/components/habit-calendar.tsx",
                                lineNumber: 99,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, day, true, {
                fileName: "[project]/components/habit-calendar.tsx",
                lineNumber: 80,
                columnNumber: 25
            }, this));
        }
        return calendarDays;
    };
    // Handle month navigation
    const navigateMonth = (direction)=>{
        let newMonth = viewingMonth;
        let newYear = viewingYear;
        if (direction === 'next') {
            if (viewingMonth === 11) {
                newMonth = 0;
                newYear = viewingYear + 1;
            } else {
                newMonth = viewingMonth + 1;
            }
        } else {
            if (viewingMonth === 0) {
                newMonth = 11;
                newYear = viewingYear - 1;
            } else {
                newMonth = viewingMonth - 1;
            }
        }
        setViewingMonth(newMonth);
        setViewingYear(newYear);
    };
    // Check if we can navigate to previous month (only if habit days exist in previous months)
    const canNavigatePrev = ()=>{
        const currentViewDate = new Date(viewingYear, viewingMonth, 1);
        const habitStartMonth = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
        return currentViewDate > habitStartMonth;
    };
    // Check if we can navigate to next month (only if habit days exist in next months)
    const canNavigateNext = ()=>{
        const currentViewDate = new Date(viewingYear, viewingMonth, 1);
        const habitEndMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 1);
        return currentViewDate < habitEndMonth;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg p-4 shadow-sm border border-gray-200 max-w-sm mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    canNavigatePrev() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>navigateMonth('prev'),
                        className: "w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600",
                        children: "←"
                    }, void 0, false, {
                        fileName: "[project]/components/habit-calendar.tsx",
                        lineNumber: 149,
                        columnNumber: 30
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8"
                    }, void 0, false, {
                        fileName: "[project]/components/habit-calendar.tsx",
                        lineNumber: 151,
                        columnNumber: 23
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-medium text-gray-600",
                        children: monthNames[viewingMonth]
                    }, void 0, false, {
                        fileName: "[project]/components/habit-calendar.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    canNavigateNext() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>navigateMonth('next'),
                        className: "w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600",
                        children: "→"
                    }, void 0, false, {
                        fileName: "[project]/components/habit-calendar.tsx",
                        lineNumber: 157,
                        columnNumber: 30
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8"
                    }, void 0, false, {
                        fileName: "[project]/components/habit-calendar.tsx",
                        lineNumber: 159,
                        columnNumber: 23
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/habit-calendar.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-7 gap-1 mb-3",
                children: [
                    [
                        'S',
                        'M',
                        'T',
                        'W',
                        'T',
                        'F',
                        'S'
                    ].map((day, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-6 flex items-center justify-center text-xs font-medium text-gray-500",
                            children: day
                        }, day, false, {
                            fileName: "[project]/components/habit-calendar.tsx",
                            lineNumber: 165,
                            columnNumber: 66
                        }, this)),
                    generateMonthCalendar()
                ]
            }, void 0, true, {
                fileName: "[project]/components/habit-calendar.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center gap-4 text-xs text-gray-600",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-3 h-3 rounded",
                                style: {
                                    backgroundColor: '#f3f4f6'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/habit-calendar.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Inactive"
                            }, void 0, false, {
                                fileName: "[project]/components/habit-calendar.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/habit-calendar.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-3 h-3 rounded bg-green-500 text-white text-xs flex items-center justify-center",
                                children: "✓"
                            }, void 0, false, {
                                fileName: "[project]/components/habit-calendar.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Done"
                            }, void 0, false, {
                                fileName: "[project]/components/habit-calendar.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/habit-calendar.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-3 h-3 rounded bg-red-500 text-white text-xs flex items-center justify-center",
                                children: "✗"
                            }, void 0, false, {
                                fileName: "[project]/components/habit-calendar.tsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Missed"
                            }, void 0, false, {
                                fileName: "[project]/components/habit-calendar.tsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/habit-calendar.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/habit-calendar.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/habit-calendar.tsx",
        lineNumber: 146,
        columnNumber: 10
    }, this);
}
_s(HabitCalendar, "NeldxtM+UKZY+abQ+pCTM2N3tZk=");
_c = HabitCalendar;
var _c;
__turbopack_context__.k.register(_c, "HabitCalendar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ManualDotsCanvas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ManualDotsCanvas",
    ()=>ManualDotsCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ManualDotsCanvas({ imagePath, dotsData, completedDays, imageWidth = 600, imageHeight = 600, imageOpacity = 0.35 }) {
    _s();
    const [imageLoaded, setImageLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [imageError, setImageError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!dotsData || dotsData.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-96 flex items-center justify-center border rounded-lg bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600",
                children: "No dot data provided"
            }, void 0, false, {
                fileName: "[project]/components/ManualDotsCanvas.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ManualDotsCanvas.tsx",
            lineNumber: 27,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full overflow-hidden aspect-square",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "100%",
                height: "100%",
                viewBox: `0 0 ${imageWidth} ${imageHeight}`,
                className: "w-full h-full",
                style: {
                    backgroundColor: 'white'
                },
                preserveAspectRatio: "xMidYMid meet",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                            id: "backgroundImage",
                            patternUnits: "userSpaceOnUse",
                            width: imageWidth,
                            height: imageHeight,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("image", {
                                href: imagePath,
                                x: "0",
                                y: "0",
                                width: imageWidth,
                                height: imageHeight,
                                opacity: imageOpacity,
                                onLoad: ()=>{
                                    console.log('✅ Image loaded:', imagePath);
                                    setImageLoaded(true);
                                },
                                onError: (e)=>{
                                    console.error('❌ Ghoda image failed:', imagePath, e);
                                    setImageError(true);
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/ManualDotsCanvas.tsx",
                                lineNumber: 39,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ManualDotsCanvas.tsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ManualDotsCanvas.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: "100%",
                        height: "100%",
                        fill: imageLoaded && !imageError ? "url(#backgroundImage)" : "white"
                    }, void 0, false, {
                        fileName: "[project]/components/ManualDotsCanvas.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    dotsData.map((dot, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: dot.x,
                                    cy: dot.y,
                                    r: "12",
                                    fill: index < completedDays ? "#000000" : "#ffffff",
                                    stroke: "#1f2937",
                                    strokeWidth: "2"
                                }, void 0, false, {
                                    fileName: "[project]/components/ManualDotsCanvas.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: dot.x,
                                    y: dot.y + 5,
                                    textAnchor: "middle",
                                    className: "text-sm font-bold",
                                    fill: "#000000",
                                    fontSize: "12",
                                    children: index + 1
                                }, void 0, false, {
                                    fileName: "[project]/components/ManualDotsCanvas.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/components/ManualDotsCanvas.tsx",
                            lineNumber: 53,
                            columnNumber: 41
                        }, this)),
                    completedDays > 0 && dotsData.slice(0, completedDays + 1).map((dot, index)=>{
                        if (index === 0) return null;
                        const prevDot = dotsData[index - 1];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: prevDot.x,
                            y1: prevDot.y,
                            x2: dot.x,
                            y2: dot.y,
                            stroke: "#000000",
                            strokeWidth: "4",
                            strokeLinecap: "round"
                        }, `line-${index}`, false, {
                            fileName: "[project]/components/ManualDotsCanvas.tsx",
                            lineNumber: 64,
                            columnNumber: 18
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/components/ManualDotsCanvas.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ManualDotsCanvas.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ManualDotsCanvas.tsx",
        lineNumber: 31,
        columnNumber: 10
    }, this);
}
_s(ManualDotsCanvas, "+xC0VhkjkKdKpElgCoBFbVEZSxs=");
_c = ManualDotsCanvas;
var _c;
__turbopack_context__.k.register(_c, "ManualDotsCanvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/treeDots.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "lockDotsData",
    ()=>lockDotsData,
    "treeDotsData",
    ()=>treeDotsData,
    "unicornDotsData",
    ()=>unicornDotsData
]);
const treeDotsData = [
    {
        "x": 227,
        "y": 394
    },
    {
        "x": 180,
        "y": 419
    },
    {
        "x": 118,
        "y": 403
    },
    {
        "x": 74,
        "y": 362
    },
    {
        "x": 55,
        "y": 307
    },
    {
        "x": 84,
        "y": 246
    },
    {
        "x": 87,
        "y": 162
    },
    {
        "x": 128,
        "y": 90
    },
    {
        "x": 202,
        "y": 61
    },
    {
        "x": 278,
        "y": 46
    },
    {
        "x": 317,
        "y": 73
    },
    {
        "x": 382,
        "y": 56
    },
    {
        "x": 452,
        "y": 79
    },
    {
        "x": 480,
        "y": 127
    },
    {
        "x": 476,
        "y": 176
    },
    {
        "x": 460,
        "y": 209
    },
    {
        "x": 526,
        "y": 234
    },
    {
        "x": 540,
        "y": 276
    },
    {
        "x": 542,
        "y": 324
    },
    {
        "x": 513,
        "y": 375
    },
    {
        "x": 458,
        "y": 397
    },
    {
        "x": 417,
        "y": 403
    },
    {
        "x": 335,
        "y": 389
    },
    {
        "x": 325,
        "y": 306
    },
    {
        "x": 286,
        "y": 375
    },
    {
        "x": 228,
        "y": 306
    },
    {
        "x": 230,
        "y": 410
    },
    {
        "x": 227,
        "y": 515
    },
    {
        "x": 192,
        "y": 608
    },
    {
        "x": 288,
        "y": 614
    },
    {
        "x": 386,
        "y": 616
    },
    {
        "x": 347,
        "y": 548
    },
    {
        "x": 332,
        "y": 471
    },
    {
        "x": 327,
        "y": 392
    }
];
const unicornDotsData = [
    {
        "x": 228,
        "y": 118
    },
    {
        "x": 229,
        "y": 180
    },
    {
        "x": 245,
        "y": 158
    },
    {
        "x": 262,
        "y": 116
    },
    {
        "x": 281,
        "y": 74
    },
    {
        "x": 306,
        "y": 35
    },
    {
        "x": 327,
        "y": 90
    },
    {
        "x": 340,
        "y": 134
    },
    {
        "x": 355,
        "y": 172
    },
    {
        "x": 446,
        "y": 232
    },
    {
        "x": 466,
        "y": 317
    },
    {
        "x": 446,
        "y": 403
    },
    {
        "x": 466,
        "y": 457
    },
    {
        "x": 525,
        "y": 455
    },
    {
        "x": 521,
        "y": 475
    },
    {
        "x": 562,
        "y": 490
    },
    {
        "x": 626,
        "y": 423
    },
    {
        "x": 711,
        "y": 391
    },
    {
        "x": 760,
        "y": 429
    },
    {
        "x": 762,
        "y": 490
    },
    {
        "x": 739,
        "y": 556
    },
    {
        "x": 676,
        "y": 532
    },
    {
        "x": 602,
        "y": 541
    },
    {
        "x": 601,
        "y": 587
    },
    {
        "x": 585,
        "y": 640
    },
    {
        "x": 643,
        "y": 680
    },
    {
        "x": 658,
        "y": 720
    },
    {
        "x": 605,
        "y": 748
    },
    {
        "x": 564,
        "y": 693
    },
    {
        "x": 586,
        "y": 749
    },
    {
        "x": 529,
        "y": 771
    },
    {
        "x": 496,
        "y": 731
    },
    {
        "x": 443,
        "y": 707
    },
    {
        "x": 358,
        "y": 714
    },
    {
        "x": 248,
        "y": 662
    },
    {
        "x": 183,
        "y": 709
    },
    {
        "x": 152,
        "y": 739
    },
    {
        "x": 91,
        "y": 704
    },
    {
        "x": 102,
        "y": 686
    },
    {
        "x": 52,
        "y": 658
    },
    {
        "x": 73,
        "y": 615
    },
    {
        "x": 166,
        "y": 518
    },
    {
        "x": 161,
        "y": 485
    },
    {
        "x": 100,
        "y": 460
    },
    {
        "x": 41,
        "y": 401
    },
    {
        "x": 29,
        "y": 323
    },
    {
        "x": 61,
        "y": 267
    },
    {
        "x": 123,
        "y": 260
    },
    {
        "x": 170,
        "y": 248
    },
    {
        "x": 232,
        "y": 294
    },
    {
        "x": 319,
        "y": 292
    },
    {
        "x": 369,
        "y": 262
    },
    {
        "x": 402,
        "y": 307
    },
    {
        "x": 373,
        "y": 346
    },
    {
        "x": 332,
        "y": 358
    },
    {
        "x": 314,
        "y": 410
    },
    {
        "x": 309,
        "y": 467
    },
    {
        "x": 339,
        "y": 529
    },
    {
        "x": 410,
        "y": 562
    },
    {
        "x": 470,
        "y": 543
    }
];
const lockDotsData = [
    {
        "x": 334,
        "y": 458
    },
    {
        "x": 242,
        "y": 414
    },
    {
        "x": 178,
        "y": 320
    },
    {
        "x": 180,
        "y": 230
    },
    {
        "x": 141,
        "y": 203
    },
    {
        "x": 156,
        "y": 148
    },
    {
        "x": 218,
        "y": 150
    },
    {
        "x": 284,
        "y": 109
    },
    {
        "x": 367,
        "y": 84
    },
    {
        "x": 457,
        "y": 98
    },
    {
        "x": 539,
        "y": 137
    },
    {
        "x": 587,
        "y": 208
    },
    {
        "x": 600,
        "y": 304
    },
    {
        "x": 552,
        "y": 408
    },
    {
        "x": 479,
        "y": 450
    },
    {
        "x": 486,
        "y": 474
    },
    {
        "x": 543,
        "y": 494
    },
    {
        "x": 576,
        "y": 544
    },
    {
        "x": 574,
        "y": 623
    },
    {
        "x": 539,
        "y": 680
    },
    {
        "x": 462,
        "y": 711
    },
    {
        "x": 369,
        "y": 709
    },
    {
        "x": 290,
        "y": 674
    },
    {
        "x": 253,
        "y": 597
    },
    {
        "x": 275,
        "y": 518
    },
    {
        "x": 330,
        "y": 483
    },
    {
        "x": 343,
        "y": 540
    },
    {
        "x": 482,
        "y": 524
    },
    {
        "x": 517,
        "y": 577
    },
    {
        "x": 495,
        "y": 645
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/companion-view.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CompanionView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ManualDotsCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ManualDotsCanvas.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$treeDots$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/treeDots.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CompanionView({ habit, dayRecords, onPatternChange, currentPattern = 'unicorn', onComplete, onMiss, onCanvasStateChange }) {
    _s();
    const [selectedIllustration, setSelectedIllustration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(currentPattern);
    // Always start with pattern selection screen, don't auto-show canvas
    const [showCanvas, setShowCanvas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Notify parent when canvas state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CompanionView.useMemo": ()=>{
            if (onCanvasStateChange) {
                onCanvasStateChange(showCanvas);
            }
        }
    }["CompanionView.useMemo"], [
        showCanvas,
        onCanvasStateChange
    ]);
    // Calculate completion progress - count days where y value increased 
    const completedDays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CompanionView.useMemo[completedDays]": ()=>{
            if (dayRecords.length === 0) return 0;
            let completed = 0;
            dayRecords.forEach({
                "CompanionView.useMemo[completedDays]": (record, index)=>{
                    const prevRecord = index > 0 ? dayRecords[index - 1] : null;
                    const prevY = prevRecord ? prevRecord.y : 0;
                    // A day is completed if y value increased from previous day
                    if (record.y > prevY) {
                        completed++;
                    }
                }
            }["CompanionView.useMemo[completedDays]"]);
            return completed;
        }
    }["CompanionView.useMemo[completedDays]"], [
        dayRecords
    ]);
    // Update selectedIllustration when currentPattern prop changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CompanionView.useMemo": ()=>{
            setSelectedIllustration(currentPattern);
        }
    }["CompanionView.useMemo"], [
        currentPattern
    ]);
    const handlePatternChange = (pattern)=>{
        setSelectedIllustration(pattern);
        if (onPatternChange) {
            onPatternChange(pattern);
        }
    };
    const handleContinue = ()=>{
        setShowCanvas(true);
    };
    // Show pattern selection screen
    if (!showCanvas) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col space-y-4 p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg p-4 border border-gray-200 mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-center mb-4",
                            children: "Choose Your Pattern"
                        }, void 0, false, {
                            fileName: "[project]/components/companion-view.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handlePatternChange('unicorn'),
                                    className: `flex-1 p-4 rounded-lg border-2 transition-all ${selectedIllustration === 'unicorn' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-gray-50'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-4xl mb-2",
                                                children: "🦄"
                                            }, void 0, false, {
                                                fileName: "[project]/components/companion-view.tsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-semibold",
                                                children: "Unicorn"
                                            }, void 0, false, {
                                                fileName: "[project]/components/companion-view.tsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-600",
                                                children: "60 dots journey"
                                            }, void 0, false, {
                                                fileName: "[project]/components/companion-view.tsx",
                                                lineNumber: 76,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/companion-view.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/companion-view.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handlePatternChange('lock'),
                                    className: `flex-1 p-4 rounded-lg border-2 transition-all ${selectedIllustration === 'lock' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-gray-50'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-4xl mb-2",
                                                children: "🔒"
                                            }, void 0, false, {
                                                fileName: "[project]/components/companion-view.tsx",
                                                lineNumber: 81,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-semibold",
                                                children: "Lock"
                                            }, void 0, false, {
                                                fileName: "[project]/components/companion-view.tsx",
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-600",
                                                children: "30 dots journey"
                                            }, void 0, false, {
                                                fileName: "[project]/components/companion-view.tsx",
                                                lineNumber: 83,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/companion-view.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/companion-view.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/companion-view.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/companion-view.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleContinue,
                        className: "w-full bg-blue-500 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors",
                        children: "Continue"
                    }, void 0, false, {
                        fileName: "[project]/components/companion-view.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/companion-view.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/companion-view.tsx",
            lineNumber: 67,
            columnNumber: 12
        }, this);
    }
    // Show dotted canvas screen (after Continue is clicked)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg p-4 shadow-sm border border-gray-200 max-w-sm mx-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ManualDotsCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ManualDotsCanvas"], {
            imagePath: selectedIllustration === 'lock' ? "/illustrations/Lock.jpg" : "/illustrations/ghoda.png",
            dotsData: selectedIllustration === 'lock' ? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$treeDots$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lockDotsData"] : __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$treeDots$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unicornDotsData"],
            completedDays: completedDays,
            imageWidth: 800,
            imageHeight: 800,
            imageOpacity: 0.35
        }, void 0, false, {
            fileName: "[project]/components/companion-view.tsx",
            lineNumber: 100,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/companion-view.tsx",
        lineNumber: 99,
        columnNumber: 10
    }, this);
}
_s(CompanionView, "N+twnfLpC/gK+Sl2ktpmBAXWt3I=");
_c = CompanionView;
var _c;
__turbopack_context__.k.register(_c, "CompanionView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/habit-tracker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HabitTracker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$habit$2d$grid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/habit-grid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$habit$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/habit-header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$habit$2d$calendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/habit-calendar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$companion$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/companion-view.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function HabitTracker({ habit, onAddHabit, onUpdateRecords, onDeleteHabit, isNewHabitMode, onUpdateHabit, onViewChange }) {
    _s();
    const [dayRecords, setDayRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSaved, setIsSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showViewDropdown, setShowViewDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentView, setCurrentView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(habit?.preferredView || 'chart');
    const [hasUsedCalendar, setHasUsedCalendar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [companionPattern, setCompanionPattern] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(habit?.companionPattern || 'unicorn');
    const [showPatternSelection, setShowPatternSelection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!habit?.companionPattern);
    const [isCompanionCanvasShowing, setIsCompanionCanvasShowing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Auto-select pattern based on existing progress when switching to companion view
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HabitTracker.useEffect": ()=>{
            if (currentView === 'companion' && !habit?.companionPattern && dayRecords.length > 0) {
                // Show pattern selection instead of auto-selecting
                setShowPatternSelection(true);
            }
        }
    }["HabitTracker.useEffect"], [
        currentView,
        habit?.companionPattern,
        dayRecords,
        onUpdateHabit
    ]);
    // Reset pattern selection when switching views (only if no pattern is saved)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HabitTracker.useEffect": ()=>{
            if (currentView !== 'companion') {
                // Don't reset if habit already has a pattern
                if (!habit?.companionPattern) {
                    setShowPatternSelection(true);
                }
            }
        }
    }["HabitTracker.useEffect"], [
        currentView,
        habit?.companionPattern
    ]);
    // Close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HabitTracker.useEffect": ()=>{
            const handleClickOutside = {
                "HabitTracker.useEffect.handleClickOutside": (event)=>{
                    if (showViewDropdown) {
                        setShowViewDropdown(false);
                    }
                }
            }["HabitTracker.useEffect.handleClickOutside"];
            if (showViewDropdown) {
                document.addEventListener('click', handleClickOutside);
            }
            return ({
                "HabitTracker.useEffect": ()=>{
                    document.removeEventListener('click', handleClickOutside);
                }
            })["HabitTracker.useEffect"];
        }
    }["HabitTracker.useEffect"], [
        showViewDropdown
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HabitTracker.useEffect": ()=>{
            if (habit) {
                const currentMonthYear = new Date().toISOString().slice(0, 7);
                if (habit.monthYear !== currentMonthYear) {
                    // Different month - reset
                    setDayRecords([]);
                    setIsSaved(true);
                } else {
                    setDayRecords(habit.dayRecords);
                    setIsSaved(true);
                }
            } else {
                setDayRecords([]);
                setIsSaved(false);
            }
        }
    }["HabitTracker.useEffect"], [
        habit
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HabitTracker.useEffect": ()=>{
            if (isSaved && habit) {
                onUpdateRecords(dayRecords);
            }
        }
    }["HabitTracker.useEffect"], [
        dayRecords,
        isSaved
    ]);
    const handleLetGo = ()=>{
        setDayRecords((prev)=>{
            const lastRecord = prev[prev.length - 1];
            if (!lastRecord) {
                return [
                    {
                        x: 1,
                        y: 1
                    }
                ];
            }
            const newX = lastRecord.x + 1;
            const newY = lastRecord.y + 1;
            // Set limits based on view type
            let maxDots, maxY;
            if (currentView === 'companion') {
                // Companion view: dynamic limit based on pattern
                maxDots = companionPattern === 'lock' ? 30 : 60;
                maxY = maxDots;
            } else {
                // Chart/Calendar view: always 30x30 grid
                maxDots = 30;
                maxY = 30;
            }
            if (newX <= maxDots && newY <= maxY) {
                return [
                    ...prev,
                    {
                        x: newX,
                        y: newY
                    }
                ];
            }
            return prev;
        });
    };
    const handleStick = ()=>{
        setDayRecords((prev)=>{
            const lastRecord = prev[prev.length - 1];
            if (!lastRecord) {
                return [
                    {
                        x: 1,
                        y: 0
                    }
                ];
            }
            const newX = lastRecord.x + 1;
            const newY = Math.max(0, lastRecord.y - 1);
            // Dynamic limit based on companion pattern - lock: 30 dots, unicorn: 60 dots  
            const maxDots = currentView === 'companion' && companionPattern === 'lock' ? 30 : 60;
            if (newX <= maxDots) {
                return [
                    ...prev,
                    {
                        x: newX,
                        y: newY
                    }
                ];
            }
            return prev;
        });
    };
    const handleSaveHabit = (name, person)=>{
        onAddHabit(name, person);
        setIsSaved(true);
    };
    const handleGiveUpClick = ()=>{
        setShowDeleteConfirmation(true);
    };
    const handleConfirmDelete = ()=>{
        onDeleteHabit();
        setShowDeleteConfirmation(false);
    };
    const handleCancelDelete = ()=>{
        setShowDeleteConfirmation(false);
    };
    const handleHabitMissed = ()=>{
        // Only track missed habits if habit tracking has already started
        if (dayRecords.length === 0) {
            // Don't start habit tracking on missed click - only on Let's Go
            return;
        }
        setDayRecords((prev)=>{
            const lastRecord = prev[prev.length - 1];
            // Missed habit: x increases (day advances) and y DECREASES (goes down)
            // This creates the red dot below the previous position
            const newX = lastRecord.x + 1;
            const newY = Math.max(0, lastRecord.y - 1); // Decrease Y by 1, minimum 0
            // Set limits based on view type
            let maxDays;
            if (currentView === 'companion') {
                maxDays = companionPattern === 'lock' ? 30 : 60;
            } else {
                maxDays = 30; // Chart/Calendar view limit
            }
            if (newX <= maxDays) {
                return [
                    ...prev,
                    {
                        x: newX,
                        y: newY
                    }
                ];
            }
            return prev;
        });
    };
    if (isNewHabitMode) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$habit$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onSave: handleSaveHabit,
            isSaved: false,
            habitData: {
                name: "",
                person: ""
            }
        }, void 0, false, {
            fileName: "[project]/components/habit-tracker.tsx",
            lineNumber: 192,
            columnNumber: 12
        }, this);
    }
    // Handle null habit state - show message to create a habit
    if (!habit) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full px-4 py-8 items-center justify-center text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-50 rounded-lg p-6 max-w-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold text-gray-800 mb-3",
                        children: "No Habits Yet"
                    }, void 0, false, {
                        fileName: "[project]/components/habit-tracker.tsx",
                        lineNumber: 202,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mb-4",
                        children: "You haven't created any habits yet. Start your journey by creating your first habit!"
                    }, void 0, false, {
                        fileName: "[project]/components/habit-tracker.tsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            // This should trigger the habit selection flow
                            window.location.reload();
                        },
                        className: "w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors",
                        children: "Create Your First Habit"
                    }, void 0, false, {
                        fileName: "[project]/components/habit-tracker.tsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/habit-tracker.tsx",
                lineNumber: 201,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/habit-tracker.tsx",
            lineNumber: 200,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full px-4 py-2",
        children: habit && isSaved && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-end py-2 relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    setShowViewDropdown(!showViewDropdown);
                                },
                                className: "flex items-center justify-between w-44 px-3 py-2 text-sm border border-gray-200 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 whitespace-nowrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-900 truncate",
                                        children: [
                                            currentView.charAt(0).toUpperCase() + currentView.slice(1),
                                            " View"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/habit-tracker.tsx",
                                        lineNumber: 224,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: `ml-2 h-5 w-5 text-gray-400 transition-transform duration-200 ${showViewDropdown ? 'rotate-180' : ''}`,
                                        viewBox: "0 0 20 20",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fillRule: "evenodd",
                                            d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                            clipRule: "evenodd"
                                        }, void 0, false, {
                                            fileName: "[project]/components/habit-tracker.tsx",
                                            lineNumber: 226,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/habit-tracker.tsx",
                                        lineNumber: 225,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/habit-tracker.tsx",
                                lineNumber: 220,
                                columnNumber: 15
                            }, this),
                            showViewDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-1",
                                    role: "menu",
                                    children: [
                                        currentView !== 'chart' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setCurrentView('chart');
                                                onViewChange?.('chart');
                                                setShowViewDropdown(false);
                                            },
                                            className: "text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900",
                                            role: "menuitem",
                                            children: "Chart View"
                                        }, void 0, false, {
                                            fileName: "[project]/components/habit-tracker.tsx",
                                            lineNumber: 232,
                                            columnNumber: 49
                                        }, this),
                                        currentView !== 'calendar' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setCurrentView('calendar');
                                                onViewChange?.('calendar');
                                                setShowViewDropdown(false);
                                            },
                                            className: "text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900",
                                            role: "menuitem",
                                            children: "Calendar View"
                                        }, void 0, false, {
                                            fileName: "[project]/components/habit-tracker.tsx",
                                            lineNumber: 239,
                                            columnNumber: 52
                                        }, this),
                                        currentView !== 'companion' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setCurrentView('companion');
                                                onViewChange?.('companion');
                                                setShowViewDropdown(false);
                                                setShowPatternSelection(true); // Always show pattern selection when switching to companion
                                            },
                                            className: "text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900",
                                            role: "menuitem",
                                            children: "Companion View"
                                        }, void 0, false, {
                                            fileName: "[project]/components/habit-tracker.tsx",
                                            lineNumber: 246,
                                            columnNumber: 53
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/habit-tracker.tsx",
                                    lineNumber: 231,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/habit-tracker.tsx",
                                lineNumber: 230,
                                columnNumber: 36
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/habit-tracker.tsx",
                        lineNumber: 219,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/habit-tracker.tsx",
                    lineNumber: 218,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 pb-24",
                    children: [
                        currentView === 'chart' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$habit$2d$grid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                dayRecords: dayRecords
                            }, void 0, false, {
                                fileName: "[project]/components/habit-tracker.tsx",
                                lineNumber: 262,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/habit-tracker.tsx",
                            lineNumber: 261,
                            columnNumber: 41
                        }, this),
                        currentView === 'calendar' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full flex items-center justify-center pt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$habit$2d$calendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                dayRecords: dayRecords,
                                habitStartDate: habit.createdAt
                            }, void 0, false, {
                                fileName: "[project]/components/habit-tracker.tsx",
                                lineNumber: 265,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/habit-tracker.tsx",
                            lineNumber: 264,
                            columnNumber: 44
                        }, this),
                        currentView === 'companion' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full flex items-center justify-center pt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$companion$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                habit: habit,
                                dayRecords: dayRecords,
                                onPatternChange: (pattern)=>{
                                    setCompanionPattern(pattern);
                                    onUpdateHabit({
                                        ...habit,
                                        companionPattern: pattern
                                    });
                                },
                                currentPattern: companionPattern,
                                onComplete: handleLetGo,
                                onMiss: handleHabitMissed,
                                onCanvasStateChange: setIsCompanionCanvasShowing
                            }, void 0, false, {
                                fileName: "[project]/components/habit-tracker.tsx",
                                lineNumber: 268,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/habit-tracker.tsx",
                            lineNumber: 267,
                            columnNumber: 45
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/habit-tracker.tsx",
                    lineNumber: 260,
                    columnNumber: 11
                }, this),
                (currentView === 'chart' || currentView === 'calendar' || currentView === 'companion' && isCompanionCanvasShowing) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed bottom-8 left-0 right-0 bg-white p-4 z-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-sm mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleLetGo,
                                        className: "flex-1 px-3 py-2.5 bg-green-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all active:scale-95 shadow-lg text-center text-sm flex items-center justify-center h-14 rounded-2xl",
                                        style: {
                                            backgroundColor: '#10B981',
                                            boxShadow: '0 10px 25px -5px rgba(16, 185, 129, 0.3)'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[15px] font-bold whitespace-nowrap",
                                            children: "Completed Habit!"
                                        }, void 0, false, {
                                            fileName: "[project]/components/habit-tracker.tsx",
                                            lineNumber: 286,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/habit-tracker.tsx",
                                        lineNumber: 282,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleHabitMissed,
                                        className: "flex-1 px-3 py-2.5 bg-amber-100 hover:bg-amber-200 text-amber-700 font-semibold rounded-lg border border-amber-200 transition-all active:scale-95 text-center text-sm flex items-center justify-center h-14 rounded-2xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[15px] font-bold",
                                            children: "Missed Today"
                                        }, void 0, false, {
                                            fileName: "[project]/components/habit-tracker.tsx",
                                            lineNumber: 289,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/habit-tracker.tsx",
                                        lineNumber: 288,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/habit-tracker.tsx",
                                lineNumber: 281,
                                columnNumber: 17
                            }, this),
                            dayRecords.length > 0 && dayRecords[dayRecords.length - 1]?.y > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full text-center text-sm font-semibold",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleGiveUpClick,
                                    className: "underline text-foreground hover:text-muted-foreground transition-colors",
                                    children: "Want to give up"
                                }, void 0, false, {
                                    fileName: "[project]/components/habit-tracker.tsx",
                                    lineNumber: 295,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/habit-tracker.tsx",
                                lineNumber: 294,
                                columnNumber: 87
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/habit-tracker.tsx",
                        lineNumber: 280,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/habit-tracker.tsx",
                    lineNumber: 279,
                    columnNumber: 130
                }, this),
                showDeleteConfirmation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-background border border-border rounded-lg p-6 max-w-sm mx-4 shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-foreground mb-4 text-center",
                                children: "Do you really don't want to continue?"
                            }, void 0, false, {
                                fileName: "[project]/components/habit-tracker.tsx",
                                lineNumber: 305,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleConfirmDelete,
                                        className: "flex-1 px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition-colors",
                                        children: "Yes"
                                    }, void 0, false, {
                                        fileName: "[project]/components/habit-tracker.tsx",
                                        lineNumber: 309,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleCancelDelete,
                                        className: "flex-1 px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-gray-300 transition-colors",
                                        children: "No"
                                    }, void 0, false, {
                                        fileName: "[project]/components/habit-tracker.tsx",
                                        lineNumber: 312,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/habit-tracker.tsx",
                                lineNumber: 308,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/habit-tracker.tsx",
                        lineNumber: 304,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/habit-tracker.tsx",
                    lineNumber: 303,
                    columnNumber: 38
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/components/habit-tracker.tsx",
        lineNumber: 215,
        columnNumber: 10
    }, this);
}
_s(HabitTracker, "1klL6iwgrxsgEictRX/FnwYZsYk=");
_c = HabitTracker;
var _c;
__turbopack_context__.k.register(_c, "HabitTracker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/first-user-form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FirstUserForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function FirstUserForm({ onSubmit, onBack }) {
    _s();
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [age, setAge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [savedUsers, setSavedUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showLogin, setShowLogin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAllUsers, setShowAllUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isFormFilled = username.trim() && age !== "" && email.trim();
    // Load saved users on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FirstUserForm.useEffect": ()=>{
            const saved = localStorage.getItem('savedUsers');
            if (saved) {
                try {
                    const users = JSON.parse(saved);
                    setSavedUsers(users);
                    if (users.length > 0) {
                        setShowLogin(false); // Start with new user form, user can click login if needed
                    }
                } catch  {
                    setSavedUsers([]);
                }
            }
        }
    }["FirstUserForm.useEffect"], []);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!username.trim() || age === "" || !email.trim()) {
            setError("Please fill in all fields.");
            return;
        }
        if (!email.trim().endsWith('@gmail.com')) {
            setError("Please enter a valid Gmail address ending with @gmail.com");
            return;
        }
        setError("");
        (async ()=>{
            const newUser = {
                username,
                age,
                email
            };
            // Try to POST to our API, but continue even if it fails
            try {
                const res = await fetch('/api/register-user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username,
                        age,
                        email
                    })
                });
                if (!res.ok) {
                    console.warn('API registration failed, but continuing locally');
                }
            } catch (err) {
                console.warn('Network error during registration, but continuing locally:', err);
            }
            // Save user to localStorage for future logins regardless of API status
            const updatedUsers = [
                ...savedUsers.filter((u)=>u.email !== email),
                newUser
            ];
            localStorage.setItem('savedUsers', JSON.stringify(updatedUsers));
            // Always continue to next step
            onSubmit(newUser);
        })();
    };
    const handleUserLogin = (user)=>{
        onSubmit(user);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-100 min-h-screen flex items-center justify-center p-0 m-0 font-sans antialiased",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "w-[360px] h-[740px] bg-white overflow-hidden relative flex flex-col mx-auto shrink-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col px-8 pt-12 pb-12 h-full",
                children: !showLogin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-start",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onBack,
                                className: "w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4 text-gray-600",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M15 19l-7-7 7-7"
                                    }, void 0, false, {
                                        fileName: "[project]/components/first-user-form.tsx",
                                        lineNumber: 104,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/first-user-form.tsx",
                                    lineNumber: 103,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/first-user-form.tsx",
                                lineNumber: 102,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/first-user-form.tsx",
                            lineNumber: 101,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-[26px] leading-tight font-bold text-gray-900 mb-2 tracking-tight",
                                    children: "Join Our Community"
                                }, void 0, false, {
                                    fileName: "[project]/components/first-user-form.tsx",
                                    lineNumber: 111,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 text-[15px] font-medium",
                                    children: "Become part of something great"
                                }, void 0, false, {
                                    fileName: "[project]/components/first-user-form.tsx",
                                    lineNumber: 114,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/first-user-form.tsx",
                            lineNumber: 110,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "flex flex-col gap-5 w-full",
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "group",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "w-full h-[52px] bg-gray-50 border border-gray-200 rounded-xl px-4 text-[15px] font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200",
                                        placeholder: "What's your name?",
                                        type: "text",
                                        value: username,
                                        onChange: (e)=>setUsername(e.target.value),
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/first-user-form.tsx",
                                        lineNumber: 122,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/first-user-form.tsx",
                                    lineNumber: 121,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "group relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "w-full h-[52px] bg-gray-50 border border-gray-200 rounded-xl px-4 pr-10 text-[15px] font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 appearance-none cursor-pointer invalid:text-gray-400",
                                            value: age,
                                            onChange: (e)=>setAge(e.target.value),
                                            required: true,
                                            style: {
                                                color: age === '' ? '#9CA3AF' : '#111827'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    disabled: true,
                                                    style: {
                                                        display: 'none'
                                                    },
                                                    children: "How old are you?"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/first-user-form.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 21
                                                }, this),
                                                Array.from({
                                                    length: 66
                                                }, (_, i)=>i + 15).map((num)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: num,
                                                        children: num
                                                    }, num, false, {
                                                        fileName: "[project]/components/first-user-form.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 49
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/first-user-form.tsx",
                                            lineNumber: 126,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 flex items-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-5 h-5",
                                                fill: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M7 10l5 5 5-5z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/first-user-form.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/first-user-form.tsx",
                                                lineNumber: 137,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/first-user-form.tsx",
                                            lineNumber: 136,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/first-user-form.tsx",
                                    lineNumber: 125,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "group",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "w-full h-[52px] bg-gray-50 border border-gray-200 rounded-xl px-4 text-[15px] font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200",
                                        placeholder: "Your email address",
                                        type: "email",
                                        value: email,
                                        onChange: (e)=>setEmail(e.target.value),
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/first-user-form.tsx",
                                        lineNumber: 144,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/first-user-form.tsx",
                                    lineNumber: 143,
                                    columnNumber: 17
                                }, this),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-red-500 text-sm text-center",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/components/first-user-form.tsx",
                                    lineNumber: 147,
                                    columnNumber: 27
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "mt-4 w-full h-[54px] bg-indigo-500 hover:bg-indigo-600 text-white text-[16px] font-semibold rounded-xl shadow-[0_10px_15px_-3px_rgba(99,102,241,0.3)] active:scale-[0.98] transition-all duration-200 flex items-center justify-center tracking-wide",
                                    type: "submit",
                                    children: "Let's Go!"
                                }, void 0, false, {
                                    fileName: "[project]/components/first-user-form.tsx",
                                    lineNumber: 149,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/first-user-form.tsx",
                            lineNumber: 120,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-auto mb-1 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[14px] text-gray-500 font-medium",
                                children: [
                                    "Been here before?",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "text-indigo-500 font-bold hover:text-indigo-600 transition-colors ml-1",
                                        onClick: ()=>setShowLogin(true),
                                        type: "button",
                                        children: "Log In"
                                    }, void 0, false, {
                                        fileName: "[project]/components/first-user-form.tsx",
                                        lineNumber: 158,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/first-user-form.tsx",
                                lineNumber: 156,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/first-user-form.tsx",
                            lineNumber: 155,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowLogin(false),
                                    className: "w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4 text-gray-600",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M15 19l-7-7 7-7"
                                        }, void 0, false, {
                                            fileName: "[project]/components/first-user-form.tsx",
                                            lineNumber: 168,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/first-user-form.tsx",
                                        lineNumber: 167,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/first-user-form.tsx",
                                    lineNumber: 166,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-[19px] font-bold text-gray-900 tracking-tight",
                                    children: "Select your account"
                                }, void 0, false, {
                                    fileName: "[project]/components/first-user-form.tsx",
                                    lineNumber: 171,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/first-user-form.tsx",
                            lineNumber: 165,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 mb-4"
                        }, void 0, false, {
                            fileName: "[project]/components/first-user-form.tsx",
                            lineNumber: 177,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${showAllUsers && savedUsers.length > 5 ? 'overflow-y-scroll' : ''} space-y-3`,
                            style: showAllUsers && savedUsers.length > 5 ? {
                                maxHeight: 'calc(100vh - 320px)'
                            } : {},
                            children: savedUsers.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    ...savedUsers
                                ].reverse().slice(0, showAllUsers ? savedUsers.length : 5).map((user, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleUserLogin(user),
                                        className: "w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-xl text-left transition-all duration-200 border border-transparent hover:border-indigo-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-semibold text-gray-900",
                                                            children: user.username
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/first-user-form.tsx",
                                                            lineNumber: 187,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-500",
                                                            children: user.email
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/first-user-form.tsx",
                                                            lineNumber: 188,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/first-user-form.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5 text-gray-400",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/first-user-form.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 29
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/first-user-form.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/first-user-form.tsx",
                                            lineNumber: 185,
                                            columnNumber: 25
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/components/first-user-form.tsx",
                                        lineNumber: 184,
                                        columnNumber: 116
                                    }, this))
                            }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 text-center py-4",
                                children: "No saved accounts found"
                            }, void 0, false, {
                                fileName: "[project]/components/first-user-form.tsx",
                                lineNumber: 195,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/first-user-form.tsx",
                            lineNumber: 180,
                            columnNumber: 15
                        }, this),
                        !showAllUsers && savedUsers.length > 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowAllUsers(true),
                                className: "w-full p-3 bg-white border border-gray-300 hover:border-indigo-400 rounded-xl text-center transition-all duration-200 hover:bg-gray-50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-gray-600 hover:text-indigo-600",
                                            children: [
                                                "View All (",
                                                savedUsers.length - 5,
                                                " more)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/first-user-form.tsx",
                                            lineNumber: 202,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4 text-gray-400 transition-transform duration-200 rotate-0",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M19 9l-7 7-7-7"
                                            }, void 0, false, {
                                                fileName: "[project]/components/first-user-form.tsx",
                                                lineNumber: 206,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/first-user-form.tsx",
                                            lineNumber: 205,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/first-user-form.tsx",
                                    lineNumber: 201,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/first-user-form.tsx",
                                lineNumber: 200,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/first-user-form.tsx",
                            lineNumber: 199,
                            columnNumber: 58
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-auto mb-1 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[14px] text-gray-500 font-medium",
                                children: [
                                    "New here?",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "text-indigo-500 font-bold hover:text-indigo-600 transition-colors ml-1",
                                        onClick: ()=>setShowLogin(false),
                                        type: "button",
                                        children: "Create Account"
                                    }, void 0, false, {
                                        fileName: "[project]/components/first-user-form.tsx",
                                        lineNumber: 215,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/first-user-form.tsx",
                                lineNumber: 213,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/first-user-form.tsx",
                            lineNumber: 212,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/components/first-user-form.tsx",
                lineNumber: 97,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/first-user-form.tsx",
            lineNumber: 96,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/first-user-form.tsx",
        lineNumber: 95,
        columnNumber: 10
    }, this);
}
_s(FirstUserForm, "KthCf519Z0TEjtcTmuuqmEE2VnU=");
_c = FirstUserForm;
var _c;
__turbopack_context__.k.register(_c, "FirstUserForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/habit-selection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HabitSelection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const getHabitsForAge = (age, type)=>{
    if (age >= 15 && age <= 20) {
        return type === 'make' ? [
            {
                key: "study",
                label: "Study 25 mins focused",
                emoji: "📚"
            },
            {
                key: "walk",
                label: "Walk briskly 15 mins",
                emoji: "🚶"
            },
            {
                key: "meditate",
                label: "Meditate 5 mins daily",
                emoji: "🧘"
            },
            {
                key: "read",
                label: "Read 10 pages daily",
                emoji: "📖"
            }
        ] : [
            {
                key: "noPhone",
                label: "No phone after 9 PM",
                emoji: "📵"
            },
            {
                key: "noSoda",
                label: "No soda every day",
                emoji: "🥤"
            },
            {
                key: "sleep",
                label: "Sleep 7 hrs min",
                emoji: "😴"
            },
            {
                key: "noJunk",
                label: "No junk food daily",
                emoji: "🍟"
            }
        ];
    } else if (age >= 21 && age <= 25) {
        return type === 'make' ? [
            {
                key: "save",
                label: "Save ₹100 daily auto",
                emoji: "💰"
            },
            {
                key: "cook",
                label: "Cook breakfast daily",
                emoji: "🍳"
            },
            {
                key: "callFriend",
                label: "Call friend nightly",
                emoji: "📞"
            },
            {
                key: "stretch",
                label: "Stretch after waking",
                emoji: "🤸"
            }
        ] : [
            {
                key: "limitCoffee",
                label: "Limit coffee to 1 cup",
                emoji: "☕"
            },
            {
                key: "noScreens",
                label: "No screens after 10 PM",
                emoji: "📺"
            },
            {
                key: "walkShort",
                label: "Walk short distances",
                emoji: "🚶"
            },
            {
                key: "noLateNights",
                label: "No late nights out",
                emoji: "🌙"
            }
        ];
    } else if (age >= 26 && age <= 30) {
        return type === 'make' ? [
            {
                key: "readNews",
                label: "Read news with tea",
                emoji: "📰"
            },
            {
                key: "water",
                label: "Drink 2L water daily",
                emoji: "💧"
            },
            {
                key: "hobby",
                label: "Hobby 20 mins daily",
                emoji: "🎨"
            },
            {
                key: "planMeals",
                label: "Plan meals weekly",
                emoji: "📋"
            }
        ] : [
            {
                key: "noEatingOut",
                label: "No daily eating out",
                emoji: "🍽️"
            },
            {
                key: "workLimit",
                label: "Limit work to 8 hrs",
                emoji: "⏰"
            },
            {
                key: "noSnacks",
                label: "No snacks after 8 PM",
                emoji: "🍪"
            },
            {
                key: "trackExpenses",
                label: "Track expenses daily",
                emoji: "💳"
            }
        ];
    } else if (age >= 31 && age <= 35) {
        return type === 'make' ? [
            {
                key: "familyChat",
                label: "Family chat 15 mins",
                emoji: "👨‍👩‍👧‍👦"
            },
            {
                key: "strength",
                label: "Strength train 20 mins",
                emoji: "💪"
            },
            {
                key: "breathing",
                label: "Deep breaths morning",
                emoji: "�"
            },
            {
                key: "journal",
                label: "Journal before bed",
                emoji: "📝"
            }
        ] : [
            {
                key: "singleTask",
                label: "Single-task only",
                emoji: "🎯"
            },
            {
                key: "noSugary",
                label: "No sugary drinks",
                emoji: "🥤"
            },
            {
                key: "bedTime",
                label: "Bed by 11 PM",
                emoji: "😴"
            },
            {
                key: "noWeekendScreens",
                label: "No weekend screens",
                emoji: "📺"
            }
        ];
    } else if (age >= 36 && age <= 40) {
        return type === 'make' ? [
            {
                key: "freshLunch",
                label: "Fresh lunch daily",
                emoji: "🥗"
            },
            {
                key: "walkMorning",
                label: "Walk before 8 AM",
                emoji: "🚶"
            },
            {
                key: "waterFirst",
                label: "Drink water AM first",
                emoji: "💧"
            },
            {
                key: "stretchDaily",
                label: "Stretch 10 mins daily",
                emoji: "🤸"
            }
        ] : [
            {
                key: "noFoodAfter8",
                label: "No food after 8 PM",
                emoji: "🍽️"
            },
            {
                key: "standHourly",
                label: "Stand every 1 hour",
                emoji: "🧍"
            },
            {
                key: "moveHourly",
                label: "Move every hour",
                emoji: "🚶"
            },
            {
                key: "cutAlcohol",
                label: "Cut alcohol intake",
                emoji: "🍷"
            }
        ];
    } else {
        // 40+
        return type === 'make' ? [
            {
                key: "yoga",
                label: "Yoga 15 mins daily",
                emoji: "🧘"
            },
            {
                key: "stretchBed",
                label: "Stretch before bed",
                emoji: "🤸"
            },
            {
                key: "fruitBreakfast",
                label: "Fruit in breakfast",
                emoji: "🍎"
            },
            {
                key: "puzzle",
                label: "Puzzle 10 mins daily",
                emoji: "🧩"
            }
        ] : [
            {
                key: "noPackaged",
                label: "No packaged foods",
                emoji: "📦"
            },
            {
                key: "stand30Min",
                label: "Stand every 30 mins",
                emoji: "🧍"
            },
            {
                key: "limitSugar",
                label: "Limit sugar daily",
                emoji: "🍭"
            },
            {
                key: "healthCheck",
                label: "Daily health check",
                emoji: "🩺"
            }
        ];
    }
};
function HabitSelection({ onSelect, onBack, userName, userAge = 25 // Default age if not provided
 }) {
    _s();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('make');
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [customHabit, setCustomHabit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const maxCustomLength = 25;
    const habits = getHabitsForAge(userAge, tab);
    const handleStartBuilding = async ()=>{
        if (customHabit.trim()) {
            // Track custom habit creation in Google Sheets
            try {
                await fetch('/api/track-custom-habit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        habitName: customHabit.trim(),
                        habitType: tab,
                        userAge,
                        userName
                    })
                });
            } catch (error) {
                console.error('Failed to track custom habit:', error);
            }
            // Handle custom habit
            onSelect(tab === 'make' ? `custom_make:${customHabit.trim()}` : `custom_break:${customHabit.trim()}`);
        } else if (selected) {
            // Handle predefined habit
            onSelect(selected);
        }
    };
    const isFormValid = selected || customHabit.trim();
    const getColorClasses = (index)=>{
        const colors = [
            {
                bg: 'bg-orange-50',
                border: 'border-orange-100',
                text: 'text-orange-600',
                hover: 'hover:border-orange-500 hover:text-orange-600'
            },
            {
                bg: 'bg-blue-50',
                border: 'border-blue-100',
                text: 'text-blue-600',
                hover: 'hover:border-blue-500 hover:text-blue-600'
            },
            {
                bg: 'bg-purple-50',
                border: 'border-purple-100',
                text: 'text-purple-600',
                hover: 'hover:border-purple-500 hover:text-purple-600'
            },
            {
                bg: 'bg-green-50',
                border: 'border-green-100',
                text: 'text-green-600',
                hover: 'hover:border-green-500 hover:text-green-600'
            }
        ];
        return colors[index % colors.length];
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white relative font-sans text-gray-900 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-[-10%] left-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-teal-400/20 rounded-full blur-[80px] opacity-60 pointer-events-none animate-pulse"
            }, void 0, false, {
                fileName: "[project]/components/habit-selection.tsx",
                lineNumber: 280,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-[-10%] right-[-10%] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-indigo-500/20 rounded-full blur-[80px] opacity-60 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/habit-selection.tsx",
                lineNumber: 281,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full flex flex-col relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-8 px-6 pb-2 flex items-center gap-4 z-20 relative",
                        children: [
                            onBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onBack,
                                className: "w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-100 text-gray-700 hover:scale-110 active:scale-95 transition-all duration-200 group",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5 group-hover:-translate-x-0.5 transition-transform",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M15 19l-7-7 7-7"
                                    }, void 0, false, {
                                        fileName: "[project]/components/habit-selection.tsx",
                                        lineNumber: 288,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/habit-selection.tsx",
                                    lineNumber: 287,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/habit-selection.tsx",
                                lineNumber: 286,
                                columnNumber: 22
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-extrabold text-gray-900 tracking-tight",
                                        children: [
                                            "Welcome, ",
                                            userName || 'User',
                                            "!"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/habit-selection.tsx",
                                        lineNumber: 292,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-semibold text-teal-600 mb-4",
                                        children: "Ready to build new habits?"
                                    }, void 0, false, {
                                        fileName: "[project]/components/habit-selection.tsx",
                                        lineNumber: 295,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/habit-selection.tsx",
                                lineNumber: 291,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/habit-selection.tsx",
                        lineNumber: 285,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 px-6 pb-4 pt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-1.5 bg-gray-100 rounded-2xl flex relative mb-6 shadow-inner border border-gray-200 max-w-md mx-auto w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setTab('make');
                                            setSelected("");
                                            setCustomHabit("");
                                        },
                                        className: `flex-1 py-3 px-2 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-1.5 ${tab === 'make' ? 'shadow-md bg-teal-500 text-white scale-100' : 'text-gray-500 hover:bg-white/50 hover:text-teal-500'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[18px]",
                                                children: "✓"
                                            }, void 0, false, {
                                                fileName: "[project]/components/habit-selection.tsx",
                                                lineNumber: 308,
                                                columnNumber: 15
                                            }, this),
                                            "Make Habit"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/habit-selection.tsx",
                                        lineNumber: 303,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setTab('break');
                                            setSelected("");
                                            setCustomHabit("");
                                        },
                                        className: `flex-1 py-3 px-2 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-1.5 ${tab === 'break' ? 'shadow-md bg-rose-500 text-white scale-100' : 'text-gray-500 hover:bg-white/50 hover:text-rose-500'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[18px]",
                                                children: "⊘"
                                            }, void 0, false, {
                                                fileName: "[project]/components/habit-selection.tsx",
                                                lineNumber: 316,
                                                columnNumber: 15
                                            }, this),
                                            "Break Habit"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/habit-selection.tsx",
                                        lineNumber: 311,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/habit-selection.tsx",
                                lineNumber: 302,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-md mx-auto w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3 mb-6",
                                        children: habits.map((habit, index)=>{
                                            const colors = getColorClasses(index);
                                            const isSelected = selected === habit.key;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setSelected(habit.key);
                                                    setCustomHabit("");
                                                },
                                                className: `group relative flex flex-col p-3 bg-white rounded-2xl border shadow-sm transition-all duration-300 text-left overflow-hidden h-[130px] ${isSelected ? 'border-teal-500 ring-4 ring-teal-500/15' : `${colors.border} ${colors.hover} hover:shadow-lg`}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `absolute -right-6 -top-6 w-20 h-20 ${colors.bg} rounded-full blur-2xl group-hover:opacity-80 transition-opacity`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/habit-selection.tsx",
                                                        lineNumber: 331,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-10 h-10 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mb-auto group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 text-xl border ${colors.border}`,
                                                        children: habit.emoji
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/habit-selection.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative z-10 mt-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `block text-sm font-bold leading-tight transition-colors ${isSelected ? 'text-teal-600' : `text-gray-900 ${colors.hover.split(' ')[1]}`}`,
                                                            children: habit.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/habit-selection.tsx",
                                                            lineNumber: 336,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/habit-selection.tsx",
                                                        lineNumber: 335,
                                                        columnNumber: 21
                                                    }, this),
                                                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-3 right-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs",
                                                                children: "✓"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/habit-selection.tsx",
                                                                lineNumber: 342,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/habit-selection.tsx",
                                                            lineNumber: 341,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/habit-selection.tsx",
                                                        lineNumber: 340,
                                                        columnNumber: 36
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-teal-500 text-xl",
                                                            children: "+"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/habit-selection.tsx",
                                                            lineNumber: 346,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/habit-selection.tsx",
                                                        lineNumber: 345,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, habit.key, true, {
                                                fileName: "[project]/components/habit-selection.tsx",
                                                lineNumber: 327,
                                                columnNumber: 22
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/habit-selection.tsx",
                                        lineNumber: 323,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-3 group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide px-1 group-focus-within:text-teal-500 transition-colors",
                                                children: "Create your own habit..."
                                            }, void 0, false, {
                                                fileName: "[project]/components/habit-selection.tsx",
                                                lineNumber: 354,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `bg-white p-2 rounded-2xl border shadow-sm transition-all ${customHabit ? 'border-teal-500 ring-4 ring-teal-500/15' : 'border-gray-200 focus-within:border-teal-500 focus-within:ring-4 focus-within:ring-teal-500/15'}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: customHabit,
                                                    onChange: (e)=>{
                                                        setCustomHabit(e.target.value);
                                                        setSelected("");
                                                    },
                                                    className: "w-full bg-transparent border-none p-3 text-sm font-medium text-gray-900 placeholder-gray-400 focus:ring-0 focus:outline-none",
                                                    placeholder: "e.g. Wake up at 7:00 AM",
                                                    type: "text",
                                                    maxLength: maxCustomLength
                                                }, void 0, false, {
                                                    fileName: "[project]/components/habit-selection.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/habit-selection.tsx",
                                                lineNumber: 357,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/habit-selection.tsx",
                                        lineNumber: 353,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full mt-6 mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleStartBuilding,
                                            disabled: !isFormValid,
                                            className: "w-full h-12 bg-gradient-to-r from-teal-600 to-indigo-600 text-white font-bold text-base rounded-2xl shadow-xl shadow-teal-500/30 hover:shadow-teal-500/50 hover:translate-y-[-2px] active:translate-y-[1px] transition-all flex items-center justify-center gap-2 group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/habit-selection.tsx",
                                                    lineNumber: 368,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "relative",
                                                    children: "Start Building"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/habit-selection.tsx",
                                                    lineNumber: 369,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "relative group-hover:translate-x-1 transition-transform",
                                                    children: "→"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/habit-selection.tsx",
                                                    lineNumber: 370,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/habit-selection.tsx",
                                            lineNumber: 367,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/habit-selection.tsx",
                                        lineNumber: 366,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/habit-selection.tsx",
                                lineNumber: 321,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/habit-selection.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/habit-selection.tsx",
                lineNumber: 283,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/habit-selection.tsx",
        lineNumber: 278,
        columnNumber: 10
    }, this);
}
_s(HabitSelection, "q8PY+3R6QbwZbR5VAOqN9tfYH6Y=");
_c = HabitSelection;
var _c;
__turbopack_context__.k.register(_c, "HabitSelection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/CustomHabitScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomHabitScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function CustomHabitScreen({ habitType, onHabitCreate, onBack }) {
    _s();
    const [habitText, setHabitText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const heading = habitType === "make" ? "What are you really good at? but not consistent with it..." : "What are the bad habits which you are trying to break?";
    const handleLetsBuild = ()=>{
        if (!habitText.trim()) {
            alert("Please describe your habit");
            return;
        }
        onHabitCreate(habitText.trim());
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 bg-card border-b border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onBack,
                    className: "px-3 py-2 bg-muted text-muted-foreground hover:bg-muted/80 transition-colors font-medium text-sm rounded-md",
                    children: "← Back"
                }, void 0, false, {
                    fileName: "[project]/components/CustomHabitScreen.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/CustomHabitScreen.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 p-4 flex flex-col justify-center max-w-md mx-auto w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-bold text-foreground mb-4 text-center",
                        children: heading
                    }, void 0, false, {
                        fileName: "[project]/components/CustomHabitScreen.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                className: "w-full border-2 border-input rounded-lg p-3 text-base bg-background text-foreground min-h-[100px] resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
                                placeholder: "Describe in an one line",
                                value: habitText,
                                onChange: (e)=>setHabitText(e.target.value),
                                maxLength: 200
                            }, void 0, false, {
                                fileName: "[project]/components/CustomHabitScreen.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-muted-foreground text-right mt-1",
                                children: [
                                    habitText.length,
                                    "/200"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CustomHabitScreen.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CustomHabitScreen.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `w-full py-4 rounded-lg text-base font-bold transition-colors ${habitText.trim() ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-muted text-muted-foreground cursor-not-allowed"}`,
                        onClick: handleLetsBuild,
                        disabled: !habitText.trim(),
                        children: "Let's Build →"
                    }, void 0, false, {
                        fileName: "[project]/components/CustomHabitScreen.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CustomHabitScreen.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CustomHabitScreen.tsx",
        lineNumber: 21,
        columnNumber: 10
    }, this);
}
_s(CustomHabitScreen, "hBhnOl/ZJFyp+kX+8LV/U+vZkPE=");
_c = CustomHabitScreen;
var _c;
__turbopack_context__.k.register(_c, "CustomHabitScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/splash-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SplashScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$40$19$2e$2$2e$1$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/styled-jsx@5.1.6_@babel+core@7.28.5_react@19.2.1/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function SplashScreen({ onContinue }) {
    _s();
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [dragOffset, setDragOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dragStartX, setDragStartX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleScroll = (e)=>{
        const container = e.currentTarget;
        const scrollLeft = container.scrollLeft;
        const width = container.offsetWidth;
        const index = Math.round(scrollLeft / width);
        setCurrentSlide(index);
    };
    const handleDragStart = (e)=>{
        try {
            setIsDragging(true);
            const clientX = 'touches' in e ? e.touches[0]?.clientX : e.clientX;
            if (typeof clientX === 'number') {
                setDragStartX(clientX);
            }
        } catch (error) {
            console.log('Touch start error:', error);
        }
    };
    const handleDragMove = (e)=>{
        try {
            if (!isDragging) return;
            const clientX = 'touches' in e ? e.touches[0]?.clientX : e.clientX;
            if (typeof clientX !== 'number') return;
            const diff = clientX - dragStartX;
            const maxOffset = 280; // Button width minus circle width
            const clampedOffset = Math.max(0, Math.min(diff, maxOffset));
            setDragOffset(clampedOffset);
            // Complete action when dragged far enough (80% of max width)
            if (clampedOffset > maxOffset * 0.8) {
                setIsDragging(false);
                setDragOffset(0);
                onContinue();
            }
        } catch (error) {
            console.log('Touch move error:', error);
        }
    };
    const handleDragEnd = ()=>{
        try {
            setIsDragging(false);
            setDragOffset(0);
        } catch (error) {
            console.log('Touch end error:', error);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-cca062bef7d99bd" + " " + "h-screen bg-gray-50 text-gray-900 antialiased overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-cca062bef7d99bd" + " " + "w-[360px] h-[780px] mx-auto bg-gray-50 relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-cca062bef7d99bd" + " " + "fixed top-0 left-0 w-full z-50 bg-gray-50/95 backdrop-blur-md",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-cca062bef7d99bd" + " " + "flex justify-center items-center px-4 pt-10 pb-1.5 max-w-[360px] mx-auto w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-cca062bef7d99bd" + " " + "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-cca062bef7d99bd" + " " + "w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center relative shadow-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-cca062bef7d99bd" + " " + "w-4 h-4 bg-white rounded-full flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                className: "jsx-cca062bef7d99bd" + " " + "w-2 h-2 text-indigo-500 font-bold",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M5 13l4 4L19 7",
                                                    className: "jsx-cca062bef7d99bd"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/splash-screen.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/splash-screen.tsx",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/splash-screen.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/splash-screen.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "jsx-cca062bef7d99bd" + " " + "text-xl font-bold tracking-tight",
                                        children: "Sankalp"
                                    }, void 0, false, {
                                        fileName: "[project]/components/splash-screen.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/splash-screen.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/splash-screen.tsx",
                            lineNumber: 64,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/splash-screen.tsx",
                        lineNumber: 63,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "jsx-cca062bef7d99bd" + " " + "flex flex-col h-full pt-24 pb-8 px-4 max-w-[360px] mx-auto w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-cca062bef7d99bd" + " " + "flex flex-col mb-4 relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onScroll: handleScroll,
                                        style: {
                                            scrollSnapType: 'x mandatory',
                                            scrollBehavior: 'smooth'
                                        },
                                        className: "jsx-cca062bef7d99bd" + " " + "flex overflow-x-auto gap-4 pb-4 -mx-6 px-6 snap-x snap-mandatory h-[420px] no-scrollbar",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-cca062bef7d99bd" + " " + "min-w-full flex flex-col h-full snap-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-cca062bef7d99bd" + " " + "bg-white rounded-3xl p-4 shadow-lg border border-gray-100 flex flex-col h-full relative overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-cca062bef7d99bd" + " " + "grid grid-cols-3 gap-2 mb-4 bg-gray-50 p-3 rounded-2xl",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-cca062bef7d99bd" + " " + "text-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "jsx-cca062bef7d99bd" + " " + "text-[10px] text-gray-500 font-medium",
                                                                            children: "Successful"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/splash-screen.tsx",
                                                                            lineNumber: 91,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "jsx-cca062bef7d99bd" + " " + "text-lg font-bold text-green-500",
                                                                            children: "24/30"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/splash-screen.tsx",
                                                                            lineNumber: 92,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                    lineNumber: 90,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-cca062bef7d99bd" + " " + "text-center border-l border-r border-gray-200",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "jsx-cca062bef7d99bd" + " " + "text-[10px] text-gray-500 font-medium",
                                                                            children: "Missed"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/splash-screen.tsx",
                                                                            lineNumber: 95,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "jsx-cca062bef7d99bd" + " " + "text-lg font-bold text-red-500",
                                                                            children: "6"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/splash-screen.tsx",
                                                                            lineNumber: 96,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                    lineNumber: 94,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-cca062bef7d99bd" + " " + "text-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "jsx-cca062bef7d99bd" + " " + "text-[10px] text-gray-500 font-medium",
                                                                            children: "Consistency"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/splash-screen.tsx",
                                                                            lineNumber: 99,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "jsx-cca062bef7d99bd" + " " + "text-lg font-bold text-gray-900",
                                                                            children: "80%"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/splash-screen.tsx",
                                                                            lineNumber: 100,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                    lineNumber: 98,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/splash-screen.tsx",
                                                            lineNumber: 89,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-cca062bef7d99bd" + " " + "flex-1 bg-white rounded-xl border border-gray-100 relative p-4 flex items-center justify-center overflow-hidden",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-cca062bef7d99bd" + " " + "absolute top-2 right-2 bg-white shadow-md rounded-md px-2 py-1 text-[10px] font-bold text-indigo-500 border border-gray-100 z-10",
                                                                    children: "Chart View"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                    lineNumber: 105,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-cca062bef7d99bd" + " " + "w-full h-full relative pl-4 pb-4 pr-2 pt-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            preserveAspectRatio: "none",
                                                                            viewBox: "0 0 100 100",
                                                                            className: "jsx-cca062bef7d99bd" + " " + "w-full h-full",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                                    className: "jsx-cca062bef7d99bd",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                                                                        id: "grid-dots",
                                                                                        patternUnits: "userSpaceOnUse",
                                                                                        width: "10",
                                                                                        height: "10",
                                                                                        className: "jsx-cca062bef7d99bd",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                            cx: "1",
                                                                                            cy: "1",
                                                                                            r: "0.8",
                                                                                            className: "jsx-cca062bef7d99bd" + " " + "fill-gray-100"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/splash-screen.tsx",
                                                                                            lineNumber: 112,
                                                                                            columnNumber: 27
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/splash-screen.tsx",
                                                                                        lineNumber: 111,
                                                                                        columnNumber: 25
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 110,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                                    fill: "url(#grid-dots)",
                                                                                    width: "100%",
                                                                                    height: "100%",
                                                                                    className: "jsx-cca062bef7d99bd"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 115,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                                    stroke: "currentColor",
                                                                                    strokeDasharray: "2,2",
                                                                                    strokeWidth: "0.5",
                                                                                    x1: "0",
                                                                                    x2: "100",
                                                                                    y1: "100",
                                                                                    y2: "0",
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "text-gray-300"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 116,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                [
                                                                                    {
                                                                                        x: 3,
                                                                                        y: 97,
                                                                                        color: 'fill-gray-800'
                                                                                    },
                                                                                    {
                                                                                        x: 6,
                                                                                        y: 94,
                                                                                        color: 'fill-gray-800'
                                                                                    },
                                                                                    {
                                                                                        x: 9,
                                                                                        y: 91,
                                                                                        color: 'fill-gray-800'
                                                                                    },
                                                                                    {
                                                                                        x: 12,
                                                                                        y: 94,
                                                                                        color: 'fill-red-500'
                                                                                    },
                                                                                    {
                                                                                        x: 15,
                                                                                        y: 91,
                                                                                        color: 'fill-gray-800'
                                                                                    },
                                                                                    {
                                                                                        x: 18,
                                                                                        y: 88,
                                                                                        color: 'fill-gray-800'
                                                                                    },
                                                                                    {
                                                                                        x: 21,
                                                                                        y: 85,
                                                                                        color: 'fill-gray-800'
                                                                                    },
                                                                                    {
                                                                                        x: 24,
                                                                                        y: 82,
                                                                                        color: 'fill-gray-800'
                                                                                    },
                                                                                    {
                                                                                        x: 27,
                                                                                        y: 79,
                                                                                        color: 'fill-gray-800'
                                                                                    },
                                                                                    {
                                                                                        x: 30,
                                                                                        y: 82,
                                                                                        color: 'fill-red-500'
                                                                                    },
                                                                                    {
                                                                                        x: 33,
                                                                                        y: 85,
                                                                                        color: 'fill-red-500'
                                                                                    },
                                                                                    {
                                                                                        x: 36,
                                                                                        y: 82,
                                                                                        color: 'fill-gray-800'
                                                                                    },
                                                                                    {
                                                                                        x: 39,
                                                                                        y: 79,
                                                                                        color: 'fill-gray-800'
                                                                                    },
                                                                                    {
                                                                                        x: 42,
                                                                                        y: 76,
                                                                                        color: 'fill-gray-800'
                                                                                    },
                                                                                    {
                                                                                        x: 45,
                                                                                        y: 73,
                                                                                        color: 'fill-gray-800'
                                                                                    },
                                                                                    {
                                                                                        x: 48,
                                                                                        y: 70,
                                                                                        color: 'fill-gray-800'
                                                                                    },
                                                                                    {
                                                                                        x: 51,
                                                                                        y: 67,
                                                                                        color: 'fill-gray-800'
                                                                                    },
                                                                                    {
                                                                                        x: 54,
                                                                                        y: 70,
                                                                                        color: 'fill-red-500'
                                                                                    },
                                                                                    {
                                                                                        x: 57,
                                                                                        y: 73,
                                                                                        color: 'fill-red-500'
                                                                                    },
                                                                                    {
                                                                                        x: 60,
                                                                                        y: 76,
                                                                                        color: 'fill-red-500'
                                                                                    },
                                                                                    {
                                                                                        x: 63,
                                                                                        y: 73,
                                                                                        color: 'fill-gray-800'
                                                                                    },
                                                                                    {
                                                                                        x: 66,
                                                                                        y: 70,
                                                                                        color: 'fill-gray-800'
                                                                                    },
                                                                                    {
                                                                                        x: 69,
                                                                                        y: 67,
                                                                                        color: 'fill-gray-800'
                                                                                    },
                                                                                    {
                                                                                        x: 72,
                                                                                        y: 64,
                                                                                        color: 'fill-gray-800'
                                                                                    },
                                                                                    {
                                                                                        x: 75,
                                                                                        y: 61,
                                                                                        color: 'fill-gray-800'
                                                                                    },
                                                                                    {
                                                                                        x: 78,
                                                                                        y: 58,
                                                                                        color: 'fill-gray-800'
                                                                                    },
                                                                                    {
                                                                                        x: 81,
                                                                                        y: 55,
                                                                                        color: 'fill-gray-800'
                                                                                    },
                                                                                    {
                                                                                        x: 84,
                                                                                        y: 52,
                                                                                        color: 'fill-gray-800'
                                                                                    },
                                                                                    {
                                                                                        x: 87,
                                                                                        y: 49,
                                                                                        color: 'fill-gray-800'
                                                                                    },
                                                                                    {
                                                                                        x: 90,
                                                                                        y: 46,
                                                                                        color: 'fill-gray-800'
                                                                                    }
                                                                                ].map((point, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                        cx: point.x,
                                                                                        cy: point.y,
                                                                                        r: "2",
                                                                                        className: "jsx-cca062bef7d99bd" + " " + (point.color || "")
                                                                                    }, index, false, {
                                                                                        fileName: "[project]/components/splash-screen.tsx",
                                                                                        lineNumber: 239,
                                                                                        columnNumber: 48
                                                                                    }, this))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/splash-screen.tsx",
                                                                            lineNumber: 109,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-cca062bef7d99bd" + " " + "absolute left-0 top-2 bottom-4 w-4 text-[10px] text-gray-400 font-medium select-none pointer-events-none",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        bottom: '90%'
                                                                                    },
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "absolute right-1",
                                                                                    children: "30"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 244,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        bottom: '75%'
                                                                                    },
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "absolute right-1",
                                                                                    children: "25"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 247,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        bottom: '60%'
                                                                                    },
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "absolute right-1",
                                                                                    children: "20"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 250,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        bottom: '45%'
                                                                                    },
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "absolute right-1",
                                                                                    children: "15"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 253,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        bottom: '30%'
                                                                                    },
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "absolute right-1",
                                                                                    children: "10"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 256,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        bottom: '15%'
                                                                                    },
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "absolute right-1",
                                                                                    children: "5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 259,
                                                                                    columnNumber: 23
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/splash-screen.tsx",
                                                                            lineNumber: 243,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-cca062bef7d99bd" + " " + "absolute left-4 right-2 bottom-0 h-4 text-[10px] text-gray-400 font-medium select-none pointer-events-none",
                                                                            children: [
                                                                                '5',
                                                                                '10',
                                                                                '15',
                                                                                '20',
                                                                                '25',
                                                                                '30'
                                                                            ].map((label, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        left: `${15 + index * 15}%`
                                                                                    },
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "absolute top-0 -translate-x-1/2",
                                                                                    children: label
                                                                                }, index, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 266,
                                                                                    columnNumber: 82
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/splash-screen.tsx",
                                                                            lineNumber: 265,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                    lineNumber: 108,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/splash-screen.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/splash-screen.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/splash-screen.tsx",
                                                lineNumber: 87,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-cca062bef7d99bd" + " " + "min-w-full flex flex-col h-full snap-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-cca062bef7d99bd" + " " + "bg-white rounded-3xl p-4 shadow-lg border border-gray-100 flex flex-col h-full relative overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-cca062bef7d99bd" + " " + "grid grid-cols-3 gap-2 mb-4 bg-gray-50 p-3 rounded-2xl",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-cca062bef7d99bd" + " " + "text-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "jsx-cca062bef7d99bd" + " " + "text-[10px] text-gray-500 font-medium",
                                                                            children: "Successful"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/splash-screen.tsx",
                                                                            lineNumber: 281,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "jsx-cca062bef7d99bd" + " " + "text-lg font-bold text-green-600",
                                                                            children: "1/30"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/splash-screen.tsx",
                                                                            lineNumber: 282,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                    lineNumber: 280,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-cca062bef7d99bd" + " " + "text-center border-l border-r border-gray-200",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "jsx-cca062bef7d99bd" + " " + "text-[10px] text-gray-500 font-medium",
                                                                            children: "Missed"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/splash-screen.tsx",
                                                                            lineNumber: 285,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "jsx-cca062bef7d99bd" + " " + "text-lg font-bold text-red-600",
                                                                            children: "0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/splash-screen.tsx",
                                                                            lineNumber: 286,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                    lineNumber: 284,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-cca062bef7d99bd" + " " + "text-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "jsx-cca062bef7d99bd" + " " + "text-[10px] text-gray-500 font-medium",
                                                                            children: "Consistency"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/splash-screen.tsx",
                                                                            lineNumber: 289,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "jsx-cca062bef7d99bd" + " " + "text-lg font-bold text-gray-900",
                                                                            children: "3.4%"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/splash-screen.tsx",
                                                                            lineNumber: 290,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                    lineNumber: 288,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/splash-screen.tsx",
                                                            lineNumber: 279,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-cca062bef7d99bd" + " " + "flex-1 bg-white rounded-xl border border-gray-100 relative px-3 py-3 flex flex-col overflow-hidden",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-cca062bef7d99bd" + " " + "flex items-center justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "jsx-cca062bef7d99bd" + " " + "text-xs font-bold text-gray-400 uppercase tracking-widest",
                                                                            children: "DECEMBER"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/splash-screen.tsx",
                                                                            lineNumber: 297,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-cca062bef7d99bd" + " " + "px-1.5 py-[2px] bg-white border border-gray-100 rounded-lg shadow-sm",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-cca062bef7d99bd" + " " + "text-[9px] font-bold text-indigo-500",
                                                                                children: "Calendar View"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/splash-screen.tsx",
                                                                                lineNumber: 299,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/splash-screen.tsx",
                                                                            lineNumber: 298,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                    lineNumber: 296,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-cca062bef7d99bd" + " " + "w-full my-auto",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-cca062bef7d99bd" + " " + "grid grid-cols-7 gap-1 text-center mb-1 px-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "text-[10px] font-medium text-gray-400",
                                                                                    children: "S"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 305,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "text-[10px] font-medium text-gray-400",
                                                                                    children: "M"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 306,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "text-[10px] font-medium text-gray-400",
                                                                                    children: "T"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 307,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "text-[10px] font-medium text-gray-400",
                                                                                    children: "W"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 308,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "text-[10px] font-medium text-gray-400",
                                                                                    children: "T"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 309,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "text-[10px] font-medium text-gray-400",
                                                                                    children: "F"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 310,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "text-[10px] font-medium text-gray-400",
                                                                                    children: "S"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 311,
                                                                                    columnNumber: 23
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/splash-screen.tsx",
                                                                            lineNumber: 304,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-cca062bef7d99bd" + " " + "grid grid-cols-7 gap-1 px-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "aspect-square"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 315,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "aspect-square bg-gray-50 rounded flex items-center justify-center text-[10px] text-gray-300",
                                                                                    children: "1"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 316,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "aspect-square bg-gray-50 rounded flex items-center justify-center text-[10px] text-gray-300",
                                                                                    children: "2"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 317,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "aspect-square bg-gray-50 rounded flex items-center justify-center text-[10px] text-gray-300",
                                                                                    children: "3"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 318,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "aspect-square bg-gray-50 rounded flex items-center justify-center text-[10px] text-gray-300",
                                                                                    children: "4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 319,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "aspect-square bg-gray-50 rounded flex items-center justify-center text-[10px] text-gray-300",
                                                                                    children: "5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 320,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "aspect-square bg-gray-50 rounded flex items-center justify-center text-[10px] text-gray-300",
                                                                                    children: "6"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 321,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "aspect-square bg-gray-50 rounded flex items-center justify-center text-[10px] text-gray-300",
                                                                                    children: "7"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 322,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "aspect-square bg-gray-50 rounded flex items-center justify-center text-[10px] text-gray-300",
                                                                                    children: "8"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 323,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "aspect-square bg-gray-50 rounded flex items-center justify-center text-[10px] text-gray-300",
                                                                                    children: "9"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 324,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "aspect-square bg-gray-50 rounded flex items-center justify-center text-[10px] text-gray-300",
                                                                                    children: "10"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 325,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "aspect-square bg-gray-50 rounded flex items-center justify-center text-[10px] text-gray-300",
                                                                                    children: "11"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 326,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "aspect-square bg-gray-50 rounded flex items-center justify-center text-[10px] text-gray-300",
                                                                                    children: "12"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 327,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "aspect-square bg-gray-50 rounded flex items-center justify-center text-[10px] text-gray-300",
                                                                                    children: "13"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 328,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "aspect-square bg-gray-50 rounded flex items-center justify-center text-[10px] text-gray-300",
                                                                                    children: "14"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 329,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "aspect-square bg-gray-50 rounded flex items-center justify-center text-[10px] text-gray-300",
                                                                                    children: "15"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 330,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "aspect-square bg-green-600 rounded flex items-center justify-center text-[10px] text-white font-bold relative ring-2 ring-blue-100 z-10 shadow-sm",
                                                                                    children: [
                                                                                        "16",
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "jsx-cca062bef7d99bd" + " " + "absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full flex items-center justify-center",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                                fill: "none",
                                                                                                viewBox: "0 0 24 24",
                                                                                                stroke: "currentColor",
                                                                                                className: "jsx-cca062bef7d99bd" + " " + "w-[6px] h-[6px] text-green-600 font-bold",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                    strokeLinecap: "round",
                                                                                                    strokeLinejoin: "round",
                                                                                                    strokeWidth: 2,
                                                                                                    d: "M5 13l4 4L19 7",
                                                                                                    className: "jsx-cca062bef7d99bd"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                                    lineNumber: 335,
                                                                                                    columnNumber: 29
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/splash-screen.tsx",
                                                                                                lineNumber: 334,
                                                                                                columnNumber: 27
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/splash-screen.tsx",
                                                                                            lineNumber: 333,
                                                                                            columnNumber: 25
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 331,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "aspect-square bg-white border border-gray-100 rounded flex items-center justify-center text-[10px] text-gray-700 shadow-sm font-semibold",
                                                                                    children: "17"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 339,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "aspect-square bg-white border border-gray-100 rounded flex items-center justify-center text-[10px] text-gray-700 shadow-sm font-semibold",
                                                                                    children: "18"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 340,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "aspect-square bg-white border border-gray-100 rounded flex items-center justify-center text-[10px] text-gray-700 shadow-sm font-semibold",
                                                                                    children: "19"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 341,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "aspect-square bg-white border border-gray-100 rounded flex items-center justify-center text-[10px] text-gray-700 shadow-sm font-semibold",
                                                                                    children: "20"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 342,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "aspect-square bg-white border border-gray-100 rounded flex items-center justify-center text-[10px] text-gray-700 shadow-sm font-semibold",
                                                                                    children: "21"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 343,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "aspect-square bg-white border border-gray-100 rounded flex items-center justify-center text-[10px] text-gray-700 shadow-sm font-semibold",
                                                                                    children: "22"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 344,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "aspect-square bg-white border border-gray-100 rounded flex items-center justify-center text-[10px] text-gray-700 shadow-sm font-semibold",
                                                                                    children: "23"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 345,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "aspect-square bg-white border border-gray-100 rounded flex items-center justify-center text-[10px] text-gray-700 shadow-sm font-semibold",
                                                                                    children: "24"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 346,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "aspect-square bg-white border border-gray-100 rounded flex items-center justify-center text-[10px] text-gray-700 shadow-sm font-semibold",
                                                                                    children: "25"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 347,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "aspect-square bg-white border border-gray-100 rounded flex items-center justify-center text-[10px] text-gray-700 shadow-sm font-semibold",
                                                                                    children: "26"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 348,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "aspect-square bg-white border border-gray-100 rounded flex items-center justify-center text-[10px] text-gray-700 shadow-sm font-semibold",
                                                                                    children: "27"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 349,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "aspect-square bg-white border border-gray-100 rounded flex items-center justify-center text-[10px] text-gray-700 shadow-sm font-semibold",
                                                                                    children: "28"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 350,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "aspect-square bg-white border border-gray-100 rounded flex items-center justify-center text-[10px] text-gray-700 shadow-sm font-semibold",
                                                                                    children: "29"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 351,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "aspect-square bg-white border border-gray-100 rounded flex items-center justify-center text-[10px] text-gray-700 shadow-sm font-semibold",
                                                                                    children: "30"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 352,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-cca062bef7d99bd" + " " + "aspect-square bg-white border border-gray-100 rounded flex items-center justify-center text-[10px] text-gray-700 shadow-sm font-semibold",
                                                                                    children: "31"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                                    lineNumber: 353,
                                                                                    columnNumber: 23
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/splash-screen.tsx",
                                                                            lineNumber: 314,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                    lineNumber: 303,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/splash-screen.tsx",
                                                            lineNumber: 295,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/splash-screen.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/splash-screen.tsx",
                                                lineNumber: 276,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-cca062bef7d99bd" + " " + "min-w-full flex flex-col h-full snap-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-cca062bef7d99bd" + " " + "bg-white rounded-3xl p-4 shadow-lg border border-gray-100 flex flex-col h-full relative overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-cca062bef7d99bd" + " " + "grid grid-cols-3 gap-2 mb-4 bg-gray-50 p-3 rounded-2xl",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-cca062bef7d99bd" + " " + "text-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "jsx-cca062bef7d99bd" + " " + "text-[10px] text-gray-500 font-medium",
                                                                            children: "Successful"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/splash-screen.tsx",
                                                                            lineNumber: 366,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "jsx-cca062bef7d99bd" + " " + "text-lg font-bold text-green-600",
                                                                            children: "8/30"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/splash-screen.tsx",
                                                                            lineNumber: 367,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                    lineNumber: 365,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-cca062bef7d99bd" + " " + "text-center border-l border-r border-gray-200",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "jsx-cca062bef7d99bd" + " " + "text-[10px] text-gray-500 font-medium",
                                                                            children: "Missed"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/splash-screen.tsx",
                                                                            lineNumber: 370,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "jsx-cca062bef7d99bd" + " " + "text-lg font-bold text-red-600",
                                                                            children: "2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/splash-screen.tsx",
                                                                            lineNumber: 371,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                    lineNumber: 369,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-cca062bef7d99bd" + " " + "text-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "jsx-cca062bef7d99bd" + " " + "text-[10px] text-gray-500 font-medium",
                                                                            children: "Consistency"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/splash-screen.tsx",
                                                                            lineNumber: 374,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "jsx-cca062bef7d99bd" + " " + "text-lg font-bold text-gray-900",
                                                                            children: "26.7%"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/splash-screen.tsx",
                                                                            lineNumber: 375,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                    lineNumber: 373,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/splash-screen.tsx",
                                                            lineNumber: 364,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-cca062bef7d99bd" + " " + "flex-1 bg-white rounded-xl border border-gray-100 relative flex flex-col overflow-hidden justify-center items-center p-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-cca062bef7d99bd" + " " + "absolute top-2 right-2 bg-white shadow-md rounded-md px-2 py-1 text-[10px] font-bold text-indigo-500 border border-gray-100 z-20",
                                                                    children: "Companion View"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                    lineNumber: 381,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-cca062bef7d99bd" + " " + "relative w-full h-full max-w-[240px] max-h-[240px] flex items-center justify-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        alt: "Teddy Bear Dot-to-Dot",
                                                                        src: "/images/teddy-bear-dots.png",
                                                                        onError: (e)=>{
                                                                            console.log('Image failed to load');
                                                                            e.currentTarget.style.display = 'none';
                                                                        },
                                                                        className: "jsx-cca062bef7d99bd" + " " + "w-full h-full object-contain"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/splash-screen.tsx",
                                                                        lineNumber: 385,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/splash-screen.tsx",
                                                                    lineNumber: 384,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/splash-screen.tsx",
                                                            lineNumber: 380,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/splash-screen.tsx",
                                                    lineNumber: 362,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/splash-screen.tsx",
                                                lineNumber: 361,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/splash-screen.tsx",
                                        lineNumber: 82,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-cca062bef7d99bd" + " " + "flex justify-center gap-2 mt-0",
                                        children: [
                                            0,
                                            1,
                                            2
                                        ].map((index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-cca062bef7d99bd" + " " + `h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-6 bg-indigo-500' : 'w-2 bg-gray-300'}`
                                            }, index, false, {
                                                fileName: "[project]/components/splash-screen.tsx",
                                                lineNumber: 397,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/splash-screen.tsx",
                                        lineNumber: 396,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/splash-screen.tsx",
                                lineNumber: 80,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-cca062bef7d99bd" + " " + "mt-4 mb-1 text-center px-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "jsx-cca062bef7d99bd" + " " + "text-2xl font-extrabold text-gray-900 mb-2 leading-tight tracking-tight",
                                    children: [
                                        "Consistent Habits,",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                            className: "jsx-cca062bef7d99bd"
                                        }, void 0, false, {
                                            fileName: "[project]/components/splash-screen.tsx",
                                            lineNumber: 404,
                                            columnNumber: 31
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-cca062bef7d99bd" + " " + "text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-400 block mt-1",
                                            children: "Shape Better You"
                                        }, void 0, false, {
                                            fileName: "[project]/components/splash-screen.tsx",
                                            lineNumber: 405,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/splash-screen.tsx",
                                    lineNumber: 403,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/splash-screen.tsx",
                                lineNumber: 402,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-cca062bef7d99bd" + " " + "fixed bottom-0 left-0 right-0 bg-gray-50 px-4 py-5 z-50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-cca062bef7d99bd" + " " + "relative w-full max-w-[340px] mx-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onMouseDown: handleDragStart,
                                        onMouseMove: handleDragMove,
                                        onMouseUp: handleDragEnd,
                                        onMouseLeave: handleDragEnd,
                                        onTouchStart: handleDragStart,
                                        onTouchMove: handleDragMove,
                                        onTouchEnd: handleDragEnd,
                                        className: "jsx-cca062bef7d99bd" + " " + "w-full h-16 bg-gray-900 rounded-full flex items-center px-2 relative overflow-hidden shadow-lg border border-gray-900 cursor-grab active:cursor-grabbing",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    transform: `translateX(${dragOffset}px)`
                                                },
                                                className: "jsx-cca062bef7d99bd" + " " + "w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white shadow-lg z-10 transition-transform duration-100",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    className: "jsx-cca062bef7d99bd" + " " + "w-6 h-6 animate-pulse",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M9 5l7 7-7 7",
                                                        className: "jsx-cca062bef7d99bd"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/splash-screen.tsx",
                                                        lineNumber: 419,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/splash-screen.tsx",
                                                    lineNumber: 418,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/splash-screen.tsx",
                                                lineNumber: 415,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-cca062bef7d99bd" + " " + "absolute inset-0 flex items-center justify-center z-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '14px',
                                                        fontWeight: '500'
                                                    },
                                                    className: "jsx-cca062bef7d99bd" + " " + "text-white font-medium text-sm tracking-wide opacity-90 pl-8",
                                                    children: "Swipe to continue"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/splash-screen.tsx",
                                                    lineNumber: 423,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/splash-screen.tsx",
                                                lineNumber: 422,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    left: `${-100 + dragOffset / 280 * 100}%`,
                                                    transition: isDragging ? 'none' : 'left 0.3s ease'
                                                },
                                                className: "jsx-cca062bef7d99bd" + " " + "absolute top-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-12"
                                            }, void 0, false, {
                                                fileName: "[project]/components/splash-screen.tsx",
                                                lineNumber: 430,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/splash-screen.tsx",
                                        lineNumber: 414,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/splash-screen.tsx",
                                    lineNumber: 413,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/splash-screen.tsx",
                                lineNumber: 412,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/splash-screen.tsx",
                        lineNumber: 79,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/splash-screen.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$40$19$2e$2$2e$1$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "cca062bef7d99bd",
                children: ".no-scrollbar.jsx-cca062bef7d99bd{-ms-overflow-style:none;scrollbar-width:none}.no-scrollbar.jsx-cca062bef7d99bd::-webkit-scrollbar{display:none}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/splash-screen.tsx",
        lineNumber: 60,
        columnNumber: 10
    }, this);
}
_s(SplashScreen, "cDLT/nQ9TCmA+pLwlP0o8UTFZp0=");
_c = SplashScreen;
var _c;
__turbopack_context__.k.register(_c, "SplashScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.8_@babel+core@7.2_219142e6b22e4776d4e777d24cb3cf13/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$habit$2d$tracker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/habit-tracker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$first$2d$user$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/first-user-form.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$habit$2d$selection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/habit-selection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CustomHabitScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CustomHabitScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$splash$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/splash-screen.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Page() {
    _s();
    const [habits, setHabits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentHabitIndex, setCurrentHabitIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [touchStart, setTouchStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [touchEnd, setTouchEnd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [swipeStartFromNav, setSwipeStartFromNav] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [habitSelection, setHabitSelection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [customHabitType, setCustomHabitType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showHabitSelection, setShowHabitSelection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showProfileDrawer, setShowProfileDrawer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showLogoutConfirmation, setShowLogoutConfirmation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentView, setCurrentView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('chart');
    const [showSplashScreen, setShowSplashScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Helper function to get full habit name from key
    const getHabitNameFromKey = (key)=>{
        // Age-based habit mappings
        const allHabits = [
            // 15-20 years
            {
                key: "study",
                label: "Study focused for 25 mins"
            },
            {
                key: "walk",
                label: "Walk briskly 15 mins daily"
            },
            {
                key: "meditate",
                label: "Meditate calmly for 10 mins"
            },
            {
                key: "read",
                label: "Read 10 pages daily"
            },
            {
                key: "noPhone",
                label: "No phone after 9 PM"
            },
            {
                key: "noSoda",
                label: "Skip soda daily"
            },
            {
                key: "sleep",
                label: "Avoid sleeping less than 7 hours"
            },
            {
                key: "noJunk",
                label: "Avoid junk food daily"
            },
            {
                key: "noPackaged",
                label: "No packaged foods"
            },
            // 20-25 years
            {
                key: "save",
                label: "Saved ₹100 everyday"
            },
            {
                key: "cook",
                label: "Cook breakfast before work"
            },
            {
                key: "callFriend",
                label: "Call one friend after dinner"
            },
            {
                key: "stretch",
                label: "Stretch after waking up"
            },
            {
                key: "limitCoffee",
                label: "Limit coffee to one cup"
            },
            {
                key: "noScreens",
                label: "No screens after 10 PM"
            },
            {
                key: "walkInstead",
                label: "Walk instead of driving short distances"
            },
            {
                key: "noLateNights",
                label: "Cut late nights"
            },
            // 25-30 years
            {
                key: "readNews",
                label: "Read news during morning tea"
            },
            {
                key: "water",
                label: "Drink 2L of water daily"
            },
            {
                key: "hobby",
                label: "Do hobby 20 mins daily"
            },
            {
                key: "planMeals",
                label: "Plan meals for the week"
            },
            {
                key: "noEatingOut",
                label: "No eating out daily"
            },
            {
                key: "workLimit",
                label: "Work limit 8 hours"
            },
            {
                key: "noSnacks",
                label: "No snacks after 8 PM"
            },
            {
                key: "trackExpenses",
                label: "Track daily expenses"
            },
            // 30-35 years
            {
                key: "familyChat",
                label: "Family chat 15 mins"
            },
            {
                key: "strength",
                label: "Strength training 20 mins"
            },
            {
                key: "breathing",
                label: "Deep breathing after waking up"
            },
            {
                key: "journal",
                label: "Journal before sleep"
            },
            {
                key: "oneTask",
                label: "One task at a time (no multitasking)"
            },
            {
                key: "noSugary",
                label: "Skip sugary drinks"
            },
            {
                key: "bedtime",
                label: "Bedtime by 11 PM"
            },
            {
                key: "noWeekendBinge",
                label: "No weekend screen binge"
            },
            // 35-40 years
            {
                key: "freshLunch",
                label: "Lunch cooked fresh daily"
            },
            {
                key: "morningWalk",
                label: "Morning walk before 8 AM"
            },
            {
                key: "waterMorning",
                label: "Drink 2 glasses of water in the morning"
            },
            {
                key: "stretchDaily",
                label: "Stretch 10 mins daily"
            },
            {
                key: "noFoodAfter8",
                label: "No food after 8 PM"
            },
            {
                key: "stand2Min",
                label: "Stand for 2 minutes every hour"
            },
            {
                key: "moveHourly",
                label: "Move body every hour"
            },
            {
                key: "reduceAlcohol",
                label: "Reduce alcohol intake"
            },
            // 40+ years
            {
                key: "yoga",
                label: "Yoga 15 mins"
            },
            {
                key: "stretchBed",
                label: "Stretch before bed"
            },
            {
                key: "fruitBreakfast",
                label: "Eat fruit with breakfast"
            },
            {
                key: "puzzle",
                label: "Solve puzzle 10 mins"
            },
            {
                key: "noProcessed",
                label: "No processed packaged foods"
            },
            {
                key: "stand30Min",
                label: "Stand every 30 mins"
            },
            {
                key: "limitSugar",
                label: "Limit sugar intake"
            },
            {
                key: "checkHealth",
                label: "Check health signs daily"
            }
        ];
        const habit = allHabits.find((h)=>h.key === key);
        return habit ? habit.label : key;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            // Load saved user first
            const savedUser = localStorage.getItem("currentUser");
            if (savedUser) {
                try {
                    const userData = JSON.parse(savedUser);
                    setUser(userData);
                    // Load habits specific to this user
                    const userHabitsKey = `habits_${userData.email}`;
                    const savedUserHabits = localStorage.getItem(userHabitsKey);
                    if (savedUserHabits) {
                        try {
                            const userHabits = JSON.parse(savedUserHabits);
                            setHabits(userHabits);
                            if (userHabits.length > 0) {
                                setHabitSelection("existing");
                            }
                        } catch  {
                            setHabits([]);
                        }
                    }
                } catch  {
                    localStorage.removeItem("currentUser");
                }
            }
            setIsLoaded(true);
        }
    }["Page.useEffect"], []);
    // Handle user login/registration
    const handleUserSubmit = (userData)=>{
        setUser(userData);
        localStorage.setItem("currentUser", JSON.stringify(userData));
        setShowSplashScreen(false); // Ensure splash screen is hidden
        // Load existing habits for this user
        const userHabitsKey = `habits_${userData.email}`;
        const savedUserHabits = localStorage.getItem(userHabitsKey);
        if (savedUserHabits) {
            try {
                const userHabits = JSON.parse(savedUserHabits);
                setHabits(userHabits);
                // If user has habits, mark as existing user
                if (userHabits.length > 0) {
                    setHabitSelection("existing"); // Mark that user has existing habits
                } else {
                    // User has no habits, should show habit selection
                    setHabitSelection(null);
                }
            } catch  {
                // If there's an error loading habits, start fresh
                setHabits([]);
                setHabitSelection(null);
            }
        } else {
            // New user with no saved habits - should show habit selection
            setHabits([]);
            setHabitSelection(null);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            if (isLoaded && user) {
                // Save habits specific to the current user's email
                const userHabitsKey = `habits_${user.email}`;
                localStorage.setItem(userHabitsKey, JSON.stringify(habits));
            }
        }
    }["Page.useEffect"], [
        habits,
        isLoaded,
        user
    ]);
    const addHabit = (name, person)=>{
        const currentMonthYear = new Date().toISOString().slice(0, 7);
        const newHabit = {
            id: Date.now().toString(),
            name,
            person,
            dayRecords: [],
            createdAt: new Date().toISOString(),
            monthYear: currentMonthYear
        };
        setHabits([
            ...habits,
            newHabit
        ]);
        setCurrentHabitIndex(habits.length);
    };
    const updateHabitRecords = (habitId, dayRecords)=>{
        setHabits(habits.map((habit)=>habit.id === habitId ? {
                ...habit,
                dayRecords
            } : habit));
    };
    const updateHabit = (habitId, updatedFields)=>{
        setHabits(habits.map((habit)=>habit.id === habitId ? {
                ...habit,
                ...updatedFields
            } : habit));
    };
    const deleteHabit = (habitId)=>{
        const newHabits = habits.filter((h)=>h.id !== habitId);
        setHabits(newHabits);
        if (currentHabitIndex >= newHabits.length && currentHabitIndex > 0) {
            setCurrentHabitIndex(currentHabitIndex - 1);
        }
    };
    const handleSwipe = ()=>{
        if (!swipeStartFromNav) return; // Only allow swipe if started from nav
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;
        if (isLeftSwipe && currentHabitIndex < habits.length - 1) {
            setCurrentHabitIndex(currentHabitIndex + 1);
        } else if (isLeftSwipe && currentHabitIndex === habits.length - 1) {
            setCurrentHabitIndex(0);
        } else if (isRightSwipe && currentHabitIndex > 0) {
            setCurrentHabitIndex(currentHabitIndex - 1);
        } else if (isRightSwipe && currentHabitIndex === 0) {
            setCurrentHabitIndex(habits.length - 1);
        }
        setSwipeStartFromNav(false); // Reset after swipe
    };
    if (!isLoaded) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-muted",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 319,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-foreground",
                        children: "Loading your habits..."
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 320,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 318,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 317,
            columnNumber: 12
        }, this);
    }
    // Show splash screen first for new users (and after logout)
    if (showSplashScreen && !user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$splash$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onContinue: ()=>setShowSplashScreen(false)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 328,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 327,
            columnNumber: 12
        }, this);
    }
    // Show onboarding form after splash screen
    if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-muted",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$first$2d$user$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onSubmit: handleUserSubmit,
                onBack: ()=>setShowSplashScreen(true)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 335,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 334,
            columnNumber: 12
        }, this);
    }
    // Show habit selection after onboarding (only if user doesn't have existing habits)
    if (user && habitSelection !== "existing" && !customHabitType && habits.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-muted",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$habit$2d$selection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                userName: user?.username?.split(' ')[0],
                userAge: typeof user?.age === 'string' ? parseInt(user.age) || 25 : 25,
                onSelect: (habit)=>{
                    if (habit === "custom_make") {
                        setCustomHabitType("make");
                    } else if (habit === "custom_break") {
                        setCustomHabitType("break");
                    } else if (habit.startsWith("custom_make:")) {
                        // Extract custom habit name without prefix
                        const customHabitName = habit.replace("custom_make:", "");
                        addHabit(customHabitName, "__hide__");
                        setHabitSelection(customHabitName);
                    } else if (habit.startsWith("custom_break:")) {
                        // Extract custom habit name without prefix
                        const customHabitName = habit.replace("custom_break:", "");
                        addHabit(customHabitName, "__hide__");
                        setHabitSelection(customHabitName);
                    } else {
                        const fullHabitName = getHabitNameFromKey(habit);
                        setHabitSelection(habit);
                        addHabit(fullHabitName, "__hide__");
                    }
                }
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 342,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 341,
            columnNumber: 12
        }, this);
    }
    // Show custom habit creation screen
    if (customHabitType) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-muted",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CustomHabitScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    habitType: customHabitType,
                    onHabitCreate: (habitName)=>{
                        addHabit(habitName, "__hide__");
                        setHabitSelection(habitName);
                        setCustomHabitType(null);
                    },
                    onBack: ()=>setCustomHabitType(null)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 370,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 369,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 368,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-muted",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-screen max-w-md bg-background overflow-hidden flex flex-col",
            children: [
                showHabitSelection ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$habit$2d$selection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    userName: user?.username,
                    userAge: typeof user?.age === 'string' ? user.age === 'under_18' ? 16 : user.age === '18_24' ? 21 : user.age === '25_34' ? 30 : user.age === '35_44' ? 40 : 50 : 25,
                    onBack: ()=>setShowHabitSelection(false),
                    onSelect: (habit)=>{
                        if (habit === "custom_make") {
                            setCustomHabitType("make");
                            setShowHabitSelection(false);
                            setCurrentHabitIndex(habits.length);
                        } else if (habit === "custom_break") {
                            setCustomHabitType("break");
                            setShowHabitSelection(false);
                            setCurrentHabitIndex(habits.length);
                        } else if (habit.startsWith("custom_make:")) {
                            // Extract custom habit name without prefix
                            const customHabitName = habit.replace("custom_make:", "");
                            const currentMonthYear = new Date().toISOString().slice(0, 7);
                            const newHabit = {
                                id: Date.now().toString(),
                                name: customHabitName,
                                person: user?.username || "User",
                                dayRecords: [],
                                createdAt: new Date().toISOString(),
                                monthYear: currentMonthYear
                            };
                            setHabits([
                                ...habits,
                                newHabit
                            ]);
                            setCurrentHabitIndex(habits.length);
                            setShowHabitSelection(false);
                        } else if (habit.startsWith("custom_break:")) {
                            // Extract custom habit name without prefix
                            const customHabitName = habit.replace("custom_break:", "");
                            const currentMonthYear = new Date().toISOString().slice(0, 7);
                            const newHabit = {
                                id: Date.now().toString(),
                                name: customHabitName,
                                person: user?.username || "User",
                                dayRecords: [],
                                createdAt: new Date().toISOString(),
                                monthYear: currentMonthYear
                            };
                            setHabits([
                                ...habits,
                                newHabit
                            ]);
                            setCurrentHabitIndex(habits.length);
                            setShowHabitSelection(false);
                        } else {
                            const fullHabitName = getHabitNameFromKey(habit);
                            setHabitSelection(habit);
                            setShowHabitSelection(false);
                            // Directly create the habit with the full name
                            const currentMonthYear = new Date().toISOString().slice(0, 7);
                            const newHabit = {
                                id: Date.now().toString(),
                                name: fullHabitName,
                                person: user?.username || "User",
                                dayRecords: [],
                                createdAt: new Date().toISOString(),
                                monthYear: currentMonthYear
                            };
                            setHabits([
                                ...habits,
                                newHabit
                            ]);
                            setCurrentHabitIndex(habits.length);
                        }
                    }
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 380,
                    columnNumber: 31
                }, this) : habits.length === 0 || currentHabitIndex === habits.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$habit$2d$tracker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    habit: null,
                    onAddHabit: addHabit,
                    onUpdateRecords: ()=>{},
                    onDeleteHabit: ()=>{},
                    onUpdateHabit: ()=>{},
                    onViewChange: setCurrentView,
                    isNewHabitMode: true
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 436,
                    columnNumber: 76
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-card border-b border-foreground/10 p-3 flex items-center justify-between gap-2",
                            onTouchStart: (e)=>{
                                setTouchStart(e.targetTouches[0].clientX);
                                setSwipeStartFromNav(true);
                            },
                            onTouchEnd: (e)=>{
                                if (swipeStartFromNav) {
                                    setTouchEnd(e.changedTouches[0].clientX);
                                    handleSwipe();
                                }
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowProfileDrawer(true),
                                    className: "p-2 hover:bg-muted rounded-full transition-colors border border-foreground/20",
                                    title: "Profile",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-6 h-6 text-foreground",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 448,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 447,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 446,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 mr-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-base font-bold text-foreground truncate",
                                            style: {
                                                maxWidth: 'calc(100vw - 120px)'
                                            },
                                            children: getHabitNameFromKey(habits[currentHabitIndex]?.name) || habits[currentHabitIndex]?.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 452,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-muted-foreground",
                                            children: [
                                                "Created: ",
                                                new Date(habits[currentHabitIndex]?.createdAt || '').toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    year: 'numeric'
                                                })
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 457,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 451,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowHabitSelection(true),
                                    className: "bg-primary text-primary-foreground font-semibold rounded text-xs hover:opacity-90 transition-opacity px-3 py-2",
                                    title: "Add new habit",
                                    style: {
                                        minWidth: '60px',
                                        height: '32px'
                                    },
                                    children: "+ Add"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 465,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 437,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-muted/50 border-b border-foreground/10 p-3 mx-4 mt-2 rounded-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-foreground",
                                                children: "Successful"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 477,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg font-bold text-green-600",
                                                children: (()=>{
                                                    const records = habits[currentHabitIndex]?.dayRecords || [];
                                                    const habit = habits[currentHabitIndex];
                                                    // Count actual successful days - when Y increased from previous day
                                                    const completed = (()=>{
                                                        const records = habits[currentHabitIndex]?.dayRecords || [];
                                                        let successfulDays = 0;
                                                        records.forEach((record, index)=>{
                                                            if (index === 0) {
                                                                // First day success if y > 0
                                                                if (record.y > 0) successfulDays++;
                                                            } else {
                                                                const prevRecord = records[index - 1];
                                                                // Success only when Y increased from previous day
                                                                if (record.y > prevRecord.y) {
                                                                    successfulDays++;
                                                                }
                                                            }
                                                        });
                                                        return successfulDays;
                                                    })();
                                                    // Chart view always shows X/30, Calendar view shows X/30, Companion view shows pattern-based limit
                                                    if (currentView === 'chart' || currentView === 'calendar') {
                                                        // Chart and Calendar views always show /30 constant
                                                        return `${completed}/30`;
                                                    } else {
                                                        // Companion view shows pattern-based limit: lock=30, unicorn=60
                                                        const maxDots = habit?.companionPattern === 'lock' ? 30 : 60;
                                                        return `${completed}/${maxDots}`;
                                                    }
                                                })()
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 478,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 476,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-foreground",
                                                children: "Missed"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 515,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg font-bold text-red-500",
                                                children: (()=>{
                                                    const records = habits[currentHabitIndex]?.dayRecords || [];
                                                    let missedCount = 0;
                                                    records.forEach((record, index)=>{
                                                        if (index === 0) {
                                                            // First day is missed only if y === 0 AND there was an intention to start
                                                            if (record.y === 0 && record.x === 1) missedCount++;
                                                        } else {
                                                            const prevRecord = records[index - 1];
                                                            // Missed day = when Y DECREASED from previous day (habit missed button clicked)
                                                            if (record.y < prevRecord.y) {
                                                                missedCount++;
                                                            }
                                                        }
                                                    });
                                                    return missedCount;
                                                })()
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 516,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 514,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-foreground",
                                                children: "Consistency"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 538,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg font-bold text-primary",
                                                children: (()=>{
                                                    const habit = habits[currentHabitIndex];
                                                    if (!habit) return "0%";
                                                    const records = habit.dayRecords || [];
                                                    if (records.length === 0) return "0%";
                                                    // Count actual successful days - when Y increased from previous day  
                                                    const successCount = (()=>{
                                                        let successfulDays = 0;
                                                        records.forEach((record, index)=>{
                                                            if (index === 0) {
                                                                // First day success if y > 0
                                                                if (record.y > 0) successfulDays++;
                                                            } else {
                                                                const prevRecord = records[index - 1];
                                                                // Success only when Y increased from previous day
                                                                if (record.y > prevRecord.y) {
                                                                    successfulDays++;
                                                                }
                                                            }
                                                        });
                                                        return successfulDays;
                                                    })();
                                                    const attemptedDays = records.length > 0 ? records[records.length - 1].x : 0;
                                                    if (attemptedDays === 0) return "0%";
                                                    // IMPORTANT: Calculate based on 30 days total so first completion = 3.3%
                                                    const conversionPercentage = successCount / 30 * 100;
                                                    return Math.round(conversionPercentage * 10) / 10 + "%";
                                                })()
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 539,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 537,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 475,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 474,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$habit$2d$tracker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                habit: habits[currentHabitIndex],
                                onAddHabit: addHabit,
                                onUpdateRecords: (dayRecords)=>updateHabitRecords(habits[currentHabitIndex].id, dayRecords),
                                onDeleteHabit: ()=>deleteHabit(habits[currentHabitIndex].id),
                                onUpdateHabit: (updatedFields)=>updateHabit(habits[currentHabitIndex].id, updatedFields),
                                onViewChange: setCurrentView,
                                isNewHabitMode: false
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 577,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 576,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                showProfileDrawer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 z-50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-black/50",
                            onClick: ()=>setShowProfileDrawer(false)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 585,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-0 top-0 h-full w-3/4 max-w-sm bg-background border-r border-foreground/20 shadow-xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 space-y-6 h-full overflow-y-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-bold text-foreground",
                                                children: "Profile"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 591,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowProfileDrawer(false),
                                                className: "p-1 hover:bg-muted rounded",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M6 18L18 6M6 6l12 12"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 594,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 593,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 592,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 590,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-12 bg-primary rounded-full flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-8 h-8 text-primary-foreground",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: "2",
                                                                d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 604,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 603,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 602,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-semibold text-foreground",
                                                                children: user?.username || 'User'
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 608,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-muted-foreground",
                                                                children: user?.email || 'user@example.com'
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 611,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 607,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 601,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-muted-foreground",
                                                children: [
                                                    "Age: ",
                                                    user?.age || 'Not specified'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 617,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-muted-foreground",
                                                children: [
                                                    "Date Joined: ",
                                                    new Date().toLocaleDateString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 621,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 600,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 pt-4 border-t border-foreground/10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowLogoutConfirmation(true),
                                            className: "w-full text-left p-3 hover:bg-muted rounded-lg transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium",
                                                    children: "Log out"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 629,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Sign out of your account"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 630,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 628,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 627,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 589,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 588,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 583,
                    columnNumber: 31
                }, this),
                showLogoutConfirmation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-background border border-border rounded-lg p-6 max-w-sm mx-4 shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-foreground mb-4 text-center",
                                children: "Do you want to log out?"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 640,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            // Handle logout
                                            localStorage.removeItem('currentUser');
                                            // Don't remove user-specific habits - they should persist for next login
                                            setUser(null);
                                            setHabits([]);
                                            setHabitSelection(null);
                                            setShowProfileDrawer(false);
                                            setShowLogoutConfirmation(false);
                                            setShowSplashScreen(true); // Show splash screen after logout
                                        // Reset to splash screen
                                        },
                                        className: "flex-1 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors",
                                        children: "Yes"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 644,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$8_$40$babel$2b$core$40$7$2e$2_219142e6b22e4776d4e777d24cb3cf13$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowLogoutConfirmation(false),
                                        className: "flex-1 px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-gray-300 transition-colors",
                                        children: "No"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 658,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 643,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 639,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 638,
                    columnNumber: 36
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 379,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 378,
        columnNumber: 10
    }, this);
}
_s(Page, "pf23AZZLxf65+7FUGta5DJZy5es=");
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_d6d8cd60._.js.map