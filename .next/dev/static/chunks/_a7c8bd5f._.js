(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/dot-grid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DotGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_e859bb158405ee4122eee6909c7a41d4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function DotGrid({ gridSize, spacing, dotSize, dayRecords }) {
    const getRecordType = (x, y)=>{
        const record = dayRecords.find((record)=>record.x === x && record.y === y);
        if (!record) return 'none';
        // Check if this is a missed day by comparing with previous day
        if (x > 1) {
            const previousRecord = dayRecords.find((r)=>r.x === x - 1);
            if (previousRecord && record.y < previousRecord.y) {
                return 'missed';
            }
        } else if (x === 1 && record.y === 0) {
            return 'missed';
        }
        return record.y >= 0 ? 'success' : 'none';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute rounded-full transition-all ${recordType === 'success' ? 'bg-primary scale-150 shadow-lg' : recordType === 'missed' ? 'bg-red-500 scale-150 shadow-lg' : 'bg-muted scale-100'}`,
                    style: {
                        width: dotSize,
                        height: dotSize,
                        left: posX,
                        top: posY,
                        transform: "translate(-50%, -50%)"
                    }
                }, `${x}-${y}`, false, {
                    fileName: "[project]/components/dot-grid.tsx",
                    lineNumber: 46,
                    columnNumber: 14
                }, this);
            }))
    }, void 0, false, {
        fileName: "[project]/components/dot-grid.tsx",
        lineNumber: 34,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_e859bb158405ee4122eee6909c7a41d4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_e859bb158405ee4122eee6909c7a41d4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
    const completedDays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
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
    const linePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HabitGrid.useMemo[linePath]": ()=>{
            if (dayRecords.length === 0) return "";
            const points = [];
            dayRecords.forEach({
                "HabitGrid.useMemo[linePath]": (record)=>{
                    // Use the exact same positioning as the diagonal line and circles
                    const x = record.x * spacing - spacing / 2 + 8;
                    const y = (gridSize - record.y + 1) * spacing - spacing / 2 + 8;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-2 pl-8 pr-8 py-2 w-full h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex-shrink-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -left-10 top-0 flex flex-col justify-between text-xs font-semibold text-foreground",
                    style: {
                        height: gridHeight + 16,
                        paddingTop: 8,
                        paddingBottom: 8
                    },
                    children: Array.from({
                        length: gridSize
                    }, (_, i)=>{
                        const num = gridSize - i;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-end w-8",
                            style: {
                                height: spacing
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-right pr-2 text-gray-700",
                                style: {
                                    fontSize: '11px',
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative bg-card border border-foreground/20 rounded-lg p-1 shadow-md",
                    style: {
                        width: gridWidth + 16,
                        height: gridHeight + 16
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: gridWidth + 32,
                            height: gridHeight + 32,
                            className: "absolute inset-0 pointer-events-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: 1 * spacing - spacing / 2 + 8,
                                    y1: (gridSize - 1 + 1) * spacing - spacing / 2 + 8,
                                    x2: 30 * spacing - spacing / 2 + 8,
                                    y2: (gridSize - 30 + 1) * spacing - spacing / 2 + 8,
                                    stroke: "black",
                                    strokeWidth: "1"
                                }, void 0, false, {
                                    fileName: "[project]/components/habit-grid.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                dayRecords.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dot$2d$grid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center",
                            style: {
                                width: spacing
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_e859bb158405ee4122eee6909c7a41d4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_e859bb158405ee4122eee6909c7a41d4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function HabitHeader({ onSave, isSaved, habitData }) {
    _s();
    const [habitName, setHabitName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(habitData.name);
    const handleSave = ()=>{
        if (habitName.trim()) {
            onSave(habitName, "");
            setHabitName("");
        }
    };
    // No compact mode needed, always show main form
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex flex-col items-center justify-center min-h-screen p-4 gap-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-sm bg-card border border-foreground/10 rounded-lg p-6 shadow-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-foreground mb-4 text-center",
                    children: "Create New Habit"
                }, void 0, false, {
                    fileName: "[project]/components/habit-header.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-foreground mb-2",
                                    children: "Habit Name"
                                }, void 0, false, {
                                    fileName: "[project]/components/habit-header.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_e859bb158405ee4122eee6909c7a41d4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function HabitCalendar({ dayRecords, habitStartDate }) {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    // Get habit start date
    const startDate = new Date(habitStartDate);
    const habitStartDay = startDate.getDate();
    // Get days in current month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    // Calculate remaining days in the month from habit start (including today)
    const remainingDays = daysInMonth - habitStartDay + 1;
    // Get month name
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    // Create day status map
    const getDayStatus = (day)=>{
        if (day < habitStartDay) {
            return 'inactive'; // Before habit start - light color
        }
        // Calculate which day of the habit this is (1-based)
        const habitDay = day - habitStartDay + 1;
        // Find record for this habit day
        const record = dayRecords.find((r)=>r.x === habitDay);
        if (!record) {
            return 'pending'; // No action taken yet
        }
        // Check if this day was completed or missed
        // If y increased from previous day, it was completed
        // If y decreased or stayed same while x increased, it was missed
        const prevRecord = dayRecords.find((r)=>r.x === habitDay - 1);
        const prevY = prevRecord ? prevRecord.y : 0;
        return record.y > prevY ? 'completed' : 'missed';
    };
    // Generate calendar grid
    const calendarDays = [];
    // Empty cells for days before month starts
    for(let i = 0; i < firstDayOfMonth; i++){
        calendarDays.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-10 h-10"
        }, `empty-${i}`, false, {
            fileName: "[project]/components/habit-calendar.tsx",
            lineNumber: 58,
            columnNumber: 23
        }, this));
    }
    // Days of the month
    for(let day = 1; day <= daysInMonth; day++){
        const status = getDayStatus(day);
        const isToday = day === currentDate.getDate();
        calendarDays.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `w-10 h-10 flex items-center justify-center text-sm font-medium relative ${isToday ? 'ring-1 ring-blue-400' : ''}`,
            style: {
                backgroundColor: status === 'inactive' ? '#f3f4f6' : '#ffffff',
                color: status === 'inactive' ? '#9ca3af' : '#374151',
                border: '1px solid #e5e7eb',
                borderRadius: '2px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `${status === 'inactive' ? 'opacity-60' : ''} relative z-10`,
                    children: day
                }, void 0, false, {
                    fileName: "[project]/components/habit-calendar.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                status === 'completed' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 rounded-sm",
                            style: {
                                backgroundColor: 'rgba(34, 197, 94, 0.15)'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/habit-calendar.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-1 right-1 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold",
                            style: {
                                backgroundColor: '#22c55e'
                            },
                            children: "✓"
                        }, void 0, false, {
                            fileName: "[project]/components/habit-calendar.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                status === 'missed' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 rounded-sm",
                            style: {
                                backgroundColor: 'rgba(239, 68, 68, 0.15)'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/habit-calendar.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-1 right-1 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold",
                            style: {
                                backgroundColor: '#ef4444'
                            },
                            children: "✗"
                        }, void 0, false, {
                            fileName: "[project]/components/habit-calendar.tsx",
                            lineNumber: 89,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, day, true, {
            fileName: "[project]/components/habit-calendar.tsx",
            lineNumber: 65,
            columnNumber: 23
        }, this));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg p-4 shadow-sm border border-gray-200 max-w-sm mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold text-gray-800 mb-1",
                        children: [
                            remainingDays,
                            " DAYS CHALLENGE"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/habit-calendar.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-medium text-gray-600 mb-3",
                        children: monthNames[currentMonth].toUpperCase()
                    }, void 0, false, {
                        fileName: "[project]/components/habit-calendar.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/habit-calendar.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    ].map((day, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-6 flex items-center justify-center text-xs font-medium text-gray-500",
                            children: day
                        }, day, false, {
                            fileName: "[project]/components/habit-calendar.tsx",
                            lineNumber: 111,
                            columnNumber: 66
                        }, this)),
                    calendarDays
                ]
            }, void 0, true, {
                fileName: "[project]/components/habit-calendar.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center gap-4 text-xs text-gray-600",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-3 h-3 rounded",
                                style: {
                                    backgroundColor: '#f3f4f6'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/habit-calendar.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Inactive"
                            }, void 0, false, {
                                fileName: "[project]/components/habit-calendar.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/habit-calendar.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-3 h-3 rounded bg-green-500 text-white text-xs flex items-center justify-center",
                                children: "✓"
                            }, void 0, false, {
                                fileName: "[project]/components/habit-calendar.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Done"
                            }, void 0, false, {
                                fileName: "[project]/components/habit-calendar.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/habit-calendar.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-3 h-3 rounded bg-red-500 text-white text-xs flex items-center justify-center",
                                children: "✗"
                            }, void 0, false, {
                                fileName: "[project]/components/habit-calendar.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Missed"
                            }, void 0, false, {
                                fileName: "[project]/components/habit-calendar.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/habit-calendar.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/habit-calendar.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/habit-calendar.tsx",
        lineNumber: 97,
        columnNumber: 10
    }, this);
}
_c = HabitCalendar;
var _c;
__turbopack_context__.k.register(_c, "HabitCalendar");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_e859bb158405ee4122eee6909c7a41d4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_e859bb158405ee4122eee6909c7a41d4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$habit$2d$grid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/habit-grid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$habit$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/habit-header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$habit$2d$calendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/habit-calendar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function HabitTracker({ habit, onAddHabit, onUpdateRecords, onDeleteHabit, isNewHabitMode, onUpdateHabit, onViewChange }) {
    _s();
    const [dayRecords, setDayRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSaved, setIsSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showViewDropdown, setShowViewDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentView, setCurrentView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(habit?.preferredView || 'chart');
    const [hasUsedCalendar, setHasUsedCalendar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAlreadyLoggedMessage, setShowAlreadyLoggedMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HabitTracker.useEffect": ()=>{
            if (isSaved && habit) {
                onUpdateRecords(dayRecords);
            }
        }
    }["HabitTracker.useEffect"], [
        dayRecords,
        isSaved
    ]);
    // Check if user has already logged today
    const hasLoggedToday = ()=>{
        if (!habit) return false;
        const today = new Date();
        const habitStartDate = new Date(habit.createdAt);
        const daysSinceStart = Math.floor((today.getTime() - habitStartDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;
        // Check if there's already a record for today
        return dayRecords.some((record)=>record.x === daysSinceStart);
    };
    const handleLetGo = ()=>{
        if (hasLoggedToday()) {
            setShowAlreadyLoggedMessage(true);
            setTimeout(()=>setShowAlreadyLoggedMessage(false), 3000);
            return;
        }
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
            if (newX <= 30 && newY <= 30) {
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
    const handleHabitMissed = ()=>{
        if (hasLoggedToday()) {
            setShowAlreadyLoggedMessage(true);
            setTimeout(()=>setShowAlreadyLoggedMessage(false), 3000);
            return;
        }
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
            if (newX <= 30) {
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
    if (isNewHabitMode) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$habit$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onSave: handleSaveHabit,
            isSaved: false,
            habitData: {
                name: "",
                person: ""
            }
        }, void 0, false, {
            fileName: "[project]/components/habit-tracker.tsx",
            lineNumber: 146,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full px-4 py-2",
        children: habit && isSaved && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex items-center justify-end py-2 flex-shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowViewDropdown(!showViewDropdown),
                            className: "flex items-center gap-1 text-base font-semibold text-right hover:text-primary transition-colors",
                            children: [
                                currentView === 'chart' ? 'Chart view' : 'Calendar view',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `transform transition-transform ${showViewDropdown ? 'rotate-180' : ''}`,
                                    children: "▼"
                                }, void 0, false, {
                                    fileName: "[project]/components/habit-tracker.tsx",
                                    lineNumber: 157,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/habit-tracker.tsx",
                            lineNumber: 155,
                            columnNumber: 13
                        }, this),
                        showViewDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-8 right-0 bg-background border border-foreground/20 rounded-md shadow-lg z-10 min-w-32",
                            onClick: (e)=>e.stopPropagation(),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setCurrentView('chart');
                                        setShowViewDropdown(false);
                                        onViewChange?.('chart');
                                        if (habit && onUpdateHabit) {
                                            onUpdateHabit({
                                                ...habit,
                                                preferredView: 'chart'
                                            });
                                        }
                                    },
                                    className: `w-full px-3 py-2 text-left hover:bg-muted transition-colors text-sm ${currentView === 'chart' ? 'bg-muted font-semibold' : ''}`,
                                    children: "Chart view"
                                }, void 0, false, {
                                    fileName: "[project]/components/habit-tracker.tsx",
                                    lineNumber: 163,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setCurrentView('calendar');
                                        setHasUsedCalendar(true);
                                        setShowViewDropdown(false);
                                        onViewChange?.('calendar');
                                        if (habit && onUpdateHabit) {
                                            onUpdateHabit({
                                                ...habit,
                                                preferredView: 'calendar'
                                            });
                                        }
                                    },
                                    className: `w-full px-3 py-2 text-left hover:bg-muted transition-colors text-sm ${currentView === 'calendar' ? 'bg-muted font-semibold' : ''}`,
                                    children: "Calendar view"
                                }, void 0, false, {
                                    fileName: "[project]/components/habit-tracker.tsx",
                                    lineNumber: 176,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/habit-tracker.tsx",
                            lineNumber: 162,
                            columnNumber: 34
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/habit-tracker.tsx",
                    lineNumber: 154,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full py-4",
                    children: currentView === 'chart' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$habit$2d$grid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            dayRecords: dayRecords
                        }, void 0, false, {
                            fileName: "[project]/components/habit-tracker.tsx",
                            lineNumber: 196,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/habit-tracker.tsx",
                        lineNumber: 195,
                        columnNumber: 40
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$habit$2d$calendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        dayRecords: dayRecords,
                        habitStartDate: habit.createdAt
                    }, void 0, false, {
                        fileName: "[project]/components/habit-tracker.tsx",
                        lineNumber: 197,
                        columnNumber: 24
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/habit-tracker.tsx",
                    lineNumber: 194,
                    columnNumber: 11
                }, this),
                showAlreadyLoggedMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-orange-100 border border-orange-300 text-orange-800 px-4 py-2 rounded-md text-center text-sm font-medium mb-2",
                    children: "You have already logged your habit for today!"
                }, void 0, false, {
                    fileName: "[project]/components/habit-tracker.tsx",
                    lineNumber: 201,
                    columnNumber: 40
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 flex-shrink-0 px-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleLetGo,
                            className: "flex-1 px-3 py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity border-2 border-primary shadow-md text-center text-sm",
                            children: "Let's Go"
                        }, void 0, false, {
                            fileName: "[project]/components/habit-tracker.tsx",
                            lineNumber: 207,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleHabitMissed,
                            className: "flex-1 px-3 py-2.5 bg-destructive text-white font-semibold rounded-lg hover:opacity-90 transition-opacity border-2 border-destructive shadow-md text-center text-sm",
                            children: "Habit Missed"
                        }, void 0, false, {
                            fileName: "[project]/components/habit-tracker.tsx",
                            lineNumber: 210,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/habit-tracker.tsx",
                    lineNumber: 206,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full text-center text-sm font-semibold py-3 flex-shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleGiveUpClick,
                        className: "underline text-foreground hover:text-muted-foreground transition-colors",
                        children: "Want to give up"
                    }, void 0, false, {
                        fileName: "[project]/components/habit-tracker.tsx",
                        lineNumber: 217,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/habit-tracker.tsx",
                    lineNumber: 216,
                    columnNumber: 11
                }, this),
                showDeleteConfirmation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-background border border-border rounded-lg p-6 max-w-sm mx-4 shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-foreground mb-4 text-center",
                                children: "Do you really don't want to continue?"
                            }, void 0, false, {
                                fileName: "[project]/components/habit-tracker.tsx",
                                lineNumber: 225,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleConfirmDelete,
                                        className: "flex-1 px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition-colors",
                                        children: "Yes"
                                    }, void 0, false, {
                                        fileName: "[project]/components/habit-tracker.tsx",
                                        lineNumber: 229,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleCancelDelete,
                                        className: "flex-1 px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-gray-300 transition-colors",
                                        children: "No"
                                    }, void 0, false, {
                                        fileName: "[project]/components/habit-tracker.tsx",
                                        lineNumber: 232,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/habit-tracker.tsx",
                                lineNumber: 228,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/habit-tracker.tsx",
                        lineNumber: 224,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/habit-tracker.tsx",
                    lineNumber: 223,
                    columnNumber: 38
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/components/habit-tracker.tsx",
        lineNumber: 151,
        columnNumber: 10
    }, this);
}
_s(HabitTracker, "ta37cHlbDdCROt6A7yYmoIMbLYQ=");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_e859bb158405ee4122eee6909c7a41d4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_e859bb158405ee4122eee6909c7a41d4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function FirstUserForm({ onSubmit }) {
    _s();
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [age, setAge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [savedUsers, setSavedUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showLogin, setShowLogin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isFormFilled = username.trim() && age !== "" && email.trim();
    // Load saved users on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
                    const json = await res.json().catch(()=>({}));
                    setError(json.error || 'Failed to register');
                    return;
                }
                // Save user to localStorage for future logins
                const newUser = {
                    username,
                    age: age,
                    email
                };
                const updatedUsers = [
                    ...savedUsers.filter((u)=>u.email !== email),
                    newUser
                ];
                localStorage.setItem('savedUsers', JSON.stringify(updatedUsers));
                // success
                onSubmit(newUser);
            } catch (err) {
                console.error(err);
                setError('Network error');
            }
        })();
    };
    const handleUserLogin = (user)=>{
        onSubmit(user);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-screen p-4",
        style: {
            backgroundColor: '#f3f4f6'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-sm rounded-xl shadow-lg p-8 text-center",
            style: {
                backgroundColor: '#ffffff'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 mx-auto rounded-xl flex items-center justify-center",
                        style: {
                            background: 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-10 h-10 text-white",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                            }, void 0, false, {
                                fileName: "[project]/components/first-user-form.tsx",
                                lineNumber: 104,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/first-user-form.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/first-user-form.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/first-user-form.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this),
                !showLogin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold mb-2",
                            style: {
                                color: '#1f2937'
                            },
                            children: "Join Our Community"
                        }, void 0, false, {
                            fileName: "[project]/components/first-user-form.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-8",
                            style: {
                                color: '#6b7280'
                            },
                            children: "Become part of something great"
                        }, void 0, false, {
                            fileName: "[project]/components/first-user-form.tsx",
                            lineNumber: 116,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "What's your name?",
                                    value: username,
                                    onChange: (e)=>setUsername(e.target.value),
                                    className: "w-full px-4 py-3 border-0 rounded-lg",
                                    style: {
                                        backgroundColor: '#f9fafb',
                                        color: '#374151',
                                        outline: 'none'
                                    },
                                    onFocus: (e)=>e.target.style.outline = '2px solid #22d3ee',
                                    onBlur: (e)=>e.target.style.outline = 'none',
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/components/first-user-form.tsx",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: age,
                                            onChange: (e)=>setAge(Number(e.target.value)),
                                            className: "w-full px-4 py-3 border-0 rounded-lg appearance-none",
                                            style: {
                                                backgroundColor: '#f9fafb',
                                                color: age === '' ? '#9ca3af' : '#374151',
                                                outline: 'none'
                                            },
                                            onFocus: (e)=>e.target.style.outline = '2px solid #22d3ee',
                                            onBlur: (e)=>e.target.style.outline = 'none',
                                            required: true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    style: {
                                                        color: '#9ca3af'
                                                    },
                                                    children: "How old are you?"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/first-user-form.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 19
                                                }, this),
                                                Array.from({
                                                    length: 66
                                                }, (_, i)=>15 + i).map((num)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: num,
                                                        style: {
                                                            color: '#374151'
                                                        },
                                                        children: num
                                                    }, num, false, {
                                                        fileName: "[project]/components/first-user-form.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 47
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/first-user-form.tsx",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "pointer-events-none absolute inset-y-0 right-3 flex items-center",
                                            style: {
                                                color: '#9ca3af'
                                            },
                                            children: "▼"
                                        }, void 0, false, {
                                            fileName: "[project]/components/first-user-form.tsx",
                                            lineNumber: 145,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/first-user-form.tsx",
                                    lineNumber: 130,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    placeholder: "Your email address",
                                    value: email,
                                    onChange: (e)=>setEmail(e.target.value),
                                    className: "w-full px-4 py-3 border-0 rounded-lg",
                                    style: {
                                        backgroundColor: '#f9fafb',
                                        color: '#374151',
                                        outline: 'none'
                                    },
                                    onFocus: (e)=>e.target.style.outline = '2px solid #22d3ee',
                                    onBlur: (e)=>e.target.style.outline = 'none',
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/components/first-user-form.tsx",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-center",
                                    style: {
                                        color: '#ef4444'
                                    },
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/components/first-user-form.tsx",
                                    lineNumber: 158,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "w-full px-4 py-3 font-semibold rounded-lg transition-all",
                                    style: {
                                        background: isFormFilled ? 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%)' : '#d1d5db',
                                        color: isFormFilled ? '#ffffff' : '#6b7280',
                                        cursor: isFormFilled ? 'pointer' : 'not-allowed',
                                        boxShadow: isFormFilled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
                                    },
                                    disabled: !isFormFilled,
                                    children: "Let's Go!"
                                }, void 0, false, {
                                    fileName: "[project]/components/first-user-form.tsx",
                                    lineNumber: 164,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/first-user-form.tsx",
                            lineNumber: 123,
                            columnNumber: 13
                        }, this),
                        savedUsers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 pt-4",
                            style: {
                                borderTop: '1px solid #e5e7eb'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm mb-2",
                                style: {
                                    color: '#6b7280'
                                },
                                children: [
                                    "Been here before?",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowLogin(true),
                                        className: "font-medium hover:underline",
                                        style: {
                                            color: '#22d3ee'
                                        },
                                        children: "Log In"
                                    }, void 0, false, {
                                        fileName: "[project]/components/first-user-form.tsx",
                                        lineNumber: 182,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/first-user-form.tsx",
                                lineNumber: 178,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/first-user-form.tsx",
                            lineNumber: 175,
                            columnNumber: 39
                        }, this)
                    ]
                }, void 0, true) : // Login Screen for Returning Users
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold mb-2",
                            style: {
                                color: '#1f2937'
                            },
                            children: "Welcome Back!"
                        }, void 0, false, {
                            fileName: "[project]/components/first-user-form.tsx",
                            lineNumber: 192,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-6",
                            style: {
                                color: '#6b7280'
                            },
                            children: "Select your account to continue"
                        }, void 0, false, {
                            fileName: "[project]/components/first-user-form.tsx",
                            lineNumber: 197,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: savedUsers.map((user, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleUserLogin(user),
                                    className: "w-full p-4 rounded-lg text-left transition-colors border",
                                    style: {
                                        backgroundColor: '#f9fafb',
                                        borderColor: '#e5e7eb'
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.backgroundColor = '#f3f4f6';
                                        e.currentTarget.style.borderColor = '#22d3ee';
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.backgroundColor = '#f9fafb';
                                        e.currentTarget.style.borderColor = '#e5e7eb';
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold",
                                                style: {
                                                    background: 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%)'
                                                },
                                                children: user.username.charAt(0).toUpperCase()
                                            }, void 0, false, {
                                                fileName: "[project]/components/first-user-form.tsx",
                                                lineNumber: 215,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-medium",
                                                        style: {
                                                            color: '#1f2937'
                                                        },
                                                        children: user.username
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/first-user-form.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm",
                                                        style: {
                                                            color: '#6b7280'
                                                        },
                                                        children: user.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/first-user-form.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/first-user-form.tsx",
                                                lineNumber: 220,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/first-user-form.tsx",
                                        lineNumber: 214,
                                        columnNumber: 19
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/components/first-user-form.tsx",
                                    lineNumber: 204,
                                    columnNumber: 48
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/first-user-form.tsx",
                            lineNumber: 203,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowLogin(false),
                            className: "mt-4 text-sm font-medium",
                            style: {
                                color: '#6b7280'
                            },
                            onMouseEnter: (e)=>e.target.style.color = '#22d3ee',
                            onMouseLeave: (e)=>e.target.style.color = '#6b7280',
                            children: "← Back to Sign Up"
                        }, void 0, false, {
                            fileName: "[project]/components/first-user-form.tsx",
                            lineNumber: 236,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/components/first-user-form.tsx",
            lineNumber: 95,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/first-user-form.tsx",
        lineNumber: 92,
        columnNumber: 10
    }, this);
}
_s(FirstUserForm, "dCvSjmR1L3LnZ7qkbHPMHTvjFNs=");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_e859bb158405ee4122eee6909c7a41d4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_e859bb158405ee4122eee6909c7a41d4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
                emoji: "🫑"
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
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('make');
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [customHabit, setCustomHabit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-screen p-4",
        style: {
            backgroundColor: '#f3f4f6'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md rounded-xl shadow-lg p-3 mx-2",
            style: {
                backgroundColor: '#ffffff'
            },
            children: [
                onBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onBack,
                            className: "p-2 hover:bg-gray-100 rounded-full transition-colors mr-4",
                            style: {
                                color: '#6b7280'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M15 19l-7-7 7-7"
                                }, void 0, false, {
                                    fileName: "[project]/components/habit-selection.tsx",
                                    lineNumber: 266,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/habit-selection.tsx",
                                lineNumber: 265,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/habit-selection.tsx",
                            lineNumber: 262,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-lg font-bold",
                            style: {
                                color: '#1f2937'
                            },
                            children: [
                                "Welcome, ",
                                userName || 'User',
                                "!"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/habit-selection.tsx",
                            lineNumber: 269,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/habit-selection.tsx",
                    lineNumber: 261,
                    columnNumber: 20
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `flex-1 px-4 py-3 font-semibold border-2 rounded-l-lg transition-colors ${tab === 'make' ? 'border-gray-800 bg-white text-gray-800' : 'border-gray-300 bg-gray-100 text-gray-600'}`,
                            onClick: ()=>{
                                setTab('make');
                                setSelected('');
                                setCustomHabit('');
                            },
                            children: "Make Habit"
                        }, void 0, false, {
                            fileName: "[project]/components/habit-selection.tsx",
                            lineNumber: 278,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `flex-1 px-4 py-3 font-semibold border-2 border-l-0 rounded-r-lg transition-colors ${tab === 'break' ? 'border-gray-800 bg-white text-gray-800' : 'border-gray-300 bg-gray-100 text-gray-600'}`,
                            onClick: ()=>{
                                setTab('break');
                                setSelected('');
                                setCustomHabit('');
                            },
                            children: "Break Habit"
                        }, void 0, false, {
                            fileName: "[project]/components/habit-selection.tsx",
                            lineNumber: 285,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/habit-selection.tsx",
                    lineNumber: 277,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: habits.map((habit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `p-3 rounded-xl text-center transition-all border-2 flex flex-col items-center gap-2 ${selected === habit.key ? 'border-gray-400 bg-gray-200' : 'border-gray-200 bg-gray-50 hover:border-gray-300'}`,
                                onClick: ()=>{
                                    setSelected(selected === habit.key ? '' : habit.key);
                                    if (customHabit) setCustomHabit(''); // Clear custom habit when selecting predefined
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl",
                                        children: habit.emoji
                                    }, void 0, false, {
                                        fileName: "[project]/components/habit-selection.tsx",
                                        lineNumber: 301,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-gray-700 leading-tight",
                                        children: habit.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/habit-selection.tsx",
                                        lineNumber: 302,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, habit.key, true, {
                                fileName: "[project]/components/habit-selection.tsx",
                                lineNumber: 297,
                                columnNumber: 34
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/habit-selection.tsx",
                        lineNumber: 296,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/habit-selection.tsx",
                    lineNumber: 295,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-1 items-stretch",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Create your own habit...",
                                    value: customHabit,
                                    maxLength: maxCustomLength,
                                    onChange: (e)=>{
                                        setCustomHabit(e.target.value);
                                        if (selected) setSelected(''); // Clear selection when typing custom
                                    },
                                    className: "flex-1 px-2 py-3 text-base border-2 border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all",
                                    style: {
                                        color: '#374151',
                                        minWidth: 0
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/habit-selection.tsx",
                                    lineNumber: 312,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>customHabit && handleStartBuilding(),
                                    disabled: !customHabit.trim(),
                                    className: `px-2 py-3 rounded-lg font-semibold text-base transition-all w-12 flex items-center justify-center border-2 flex-shrink-0 ${customHabit.trim() ? 'bg-gray-800 text-white hover:bg-gray-700 shadow-lg border-gray-800' : 'bg-gray-300 text-gray-500 cursor-not-allowed border-gray-300'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-base font-bold",
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/components/habit-selection.tsx",
                                        lineNumber: 320,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/habit-selection.tsx",
                                    lineNumber: 319,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/habit-selection.tsx",
                            lineNumber: 311,
                            columnNumber: 11
                        }, this),
                        customHabit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-right mt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm",
                                style: {
                                    color: customHabit.length >= maxCustomLength ? '#ef4444' : '#6b7280'
                                },
                                children: [
                                    customHabit.length,
                                    "/",
                                    maxCustomLength
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/habit-selection.tsx",
                                lineNumber: 325,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/habit-selection.tsx",
                            lineNumber: 324,
                            columnNumber: 27
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/habit-selection.tsx",
                    lineNumber: 310,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleStartBuilding,
                    className: "w-full px-4 py-3 font-semibold rounded-lg transition-all",
                    style: {
                        backgroundColor: isFormValid ? '#1f2937' : '#d1d5db',
                        color: isFormValid ? '#ffffff' : '#6b7280',
                        cursor: isFormValid ? 'pointer' : 'not-allowed'
                    },
                    disabled: !isFormValid,
                    children: "Start Building"
                }, void 0, false, {
                    fileName: "[project]/components/habit-selection.tsx",
                    lineNumber: 334,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/habit-selection.tsx",
            lineNumber: 257,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/habit-selection.tsx",
        lineNumber: 254,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_e859bb158405ee4122eee6909c7a41d4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_e859bb158405ee4122eee6909c7a41d4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function CustomHabitScreen({ habitType, onHabitCreate, onBack }) {
    _s();
    const [habitText, setHabitText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const heading = habitType === "make" ? "What are you really good at? but not consistent with it..." : "What are the bad habits which you are trying to break?";
    const handleLetsBuild = ()=>{
        if (!habitText.trim()) {
            alert("Please describe your habit");
            return;
        }
        onHabitCreate(habitText.trim());
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 bg-card border-b border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 p-4 flex flex-col justify-center max-w-md mx-auto w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-bold text-foreground mb-4 text-center",
                        children: heading
                    }, void 0, false, {
                        fileName: "[project]/components/CustomHabitScreen.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_e859bb158405ee4122eee6909c7a41d4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.2_e859bb158405ee4122eee6909c7a41d4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$habit$2d$tracker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/habit-tracker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$first$2d$user$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/first-user-form.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$habit$2d$selection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/habit-selection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CustomHabitScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CustomHabitScreen.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Page() {
    _s();
    const [habits, setHabits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentHabitIndex, setCurrentHabitIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [touchStart, setTouchStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [touchEnd, setTouchEnd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [swipeStartFromNav, setSwipeStartFromNav] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [habitSelection, setHabitSelection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [customHabitType, setCustomHabitType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showHabitSelection, setShowHabitSelection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showProfileDrawer, setShowProfileDrawer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showLogoutConfirmation, setShowLogoutConfirmation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentView, setCurrentView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('chart');
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
        // Load existing habits for this user
        const userHabitsKey = `habits_${userData.email}`;
        const savedUserHabits = localStorage.getItem(userHabitsKey);
        if (savedUserHabits) {
            try {
                const userHabits = JSON.parse(savedUserHabits);
                setHabits(userHabits);
                // If user has habits, don't show habit selection
                if (userHabits.length > 0) {
                    setHabitSelection("existing"); // Mark that user has existing habits
                }
            } catch  {
                // If there's an error loading habits, start fresh
                setHabits([]);
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-muted",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 308,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-foreground",
                        children: "Loading your habits..."
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 309,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 307,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 306,
            columnNumber: 12
        }, this);
    }
    // Show onboarding form first
    if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-muted",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$first$2d$user$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onSubmit: handleUserSubmit
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 317,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 316,
            columnNumber: 12
        }, this);
    }
    // Show habit selection after onboarding (only if user doesn't have existing habits)
    if (!habitSelection && !customHabitType && habits.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-muted",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$habit$2d$selection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                userAge: user?.age || 25,
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
                lineNumber: 324,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 323,
            columnNumber: 12
        }, this);
    }
    // Show custom habit creation screen
    if (customHabitType) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-muted",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CustomHabitScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    habitType: customHabitType,
                    onHabitCreate: (habitName)=>{
                        addHabit(habitName, "__hide__");
                        setHabitSelection(habitName);
                        setCustomHabitType(null);
                    },
                    onBack: ()=>setCustomHabitType(null)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 352,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 351,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 350,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-muted",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-screen max-w-md bg-background overflow-hidden flex flex-col",
            children: [
                showHabitSelection ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$habit$2d$selection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    userName: user?.username,
                    userAge: user?.age || 25,
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
                    lineNumber: 362,
                    columnNumber: 31
                }, this) : habits.length === 0 || currentHabitIndex === habits.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$habit$2d$tracker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    habit: null,
                    onAddHabit: addHabit,
                    onUpdateRecords: ()=>{},
                    onDeleteHabit: ()=>{},
                    onUpdateHabit: ()=>{},
                    onViewChange: setCurrentView,
                    isNewHabitMode: true
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 418,
                    columnNumber: 76
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowProfileDrawer(true),
                                    className: "p-2 hover:bg-muted rounded-full transition-colors border border-foreground/20",
                                    title: "Profile",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-6 h-6 text-foreground",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 430,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 429,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 428,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 mr-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-base font-bold text-foreground truncate",
                                            style: {
                                                maxWidth: 'calc(100vw - 120px)'
                                            },
                                            children: getHabitNameFromKey(habits[currentHabitIndex]?.name) || habits[currentHabitIndex]?.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 434,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            lineNumber: 439,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 433,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    lineNumber: 447,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 419,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-muted/50 border-b border-foreground/10 p-3 mx-4 mt-2 rounded-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-foreground",
                                                children: "Successful days"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 459,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg font-bold text-green-600",
                                                children: (()=>{
                                                    const records = habits[currentHabitIndex]?.dayRecords || [];
                                                    const habit = habits[currentHabitIndex];
                                                    // Get the final y value which represents total successful days
                                                    const completed = records.length > 0 ? records[records.length - 1].y : 0;
                                                    // Chart view always shows X/30, Calendar view shows dynamic days
                                                    if (currentView === 'chart') {
                                                        // Chart view always shows /30 constant
                                                        return `${completed}/30`;
                                                    } else {
                                                        // Calculate challenge days based on habit creation date for calendar view
                                                        const currentDate = new Date();
                                                        const startDate = new Date(habit?.createdAt || '');
                                                        const currentMonth = currentDate.getMonth();
                                                        const currentYear = currentDate.getFullYear();
                                                        const habitStartDay = startDate.getDate();
                                                        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
                                                        const challengeDays = daysInMonth - habitStartDay + 1;
                                                        return `${completed}/${challengeDays}`;
                                                    }
                                                })()
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 460,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 458,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-foreground",
                                                children: "Missed days"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 487,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg font-bold text-red-500",
                                                children: (()=>{
                                                    const records = habits[currentHabitIndex]?.dayRecords || [];
                                                    let missedCount = 0;
                                                    records.forEach((record, index)=>{
                                                        if (index === 0) {
                                                            // First day is missed if y === 0
                                                            if (record.y === 0) missedCount++;
                                                        } else {
                                                            // Subsequent days are missed if y < previous y
                                                            const prevRecord = records[index - 1];
                                                            if (record.y < prevRecord.y) missedCount++;
                                                        }
                                                    });
                                                    return missedCount;
                                                })()
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 488,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 486,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-foreground",
                                                children: "Conversion"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 507,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg font-bold text-primary",
                                                children: (()=>{
                                                    const habit = habits[currentHabitIndex];
                                                    if (!habit) return "0%";
                                                    const records = habit.dayRecords || [];
                                                    // Get the actual successful days from the final y value
                                                    const successCount = records.length > 0 ? records[records.length - 1].y : 0;
                                                    if (successCount === 0) return "0%";
                                                    // Calculate percentage based on view type
                                                    if (currentView === 'chart') {
                                                        // Chart view uses 29 days to match calendar logic
                                                        const percentage = successCount / 29 * 100;
                                                        // Round up for better user experience
                                                        return successCount > 0 ? Math.ceil(percentage * 10) / 10 + "%" : "0%";
                                                    } else {
                                                        // Calendar view uses dynamic days calculation
                                                        const currentDate = new Date();
                                                        const startDate = new Date(habit?.createdAt || '');
                                                        const currentMonth = currentDate.getMonth();
                                                        const currentYear = currentDate.getFullYear();
                                                        const habitStartDay = startDate.getDate();
                                                        const daysInCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
                                                        const totalDays = daysInCurrentMonth - habitStartDay + 1;
                                                        if (totalDays <= 0) return "0%";
                                                        const percentage = successCount / totalDays * 100;
                                                        // Round up for better user experience
                                                        return Math.ceil(percentage * 10) / 10 + "%";
                                                    }
                                                })()
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 508,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 506,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 457,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 456,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$habit$2d$tracker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                habit: habits[currentHabitIndex],
                                onAddHabit: addHabit,
                                onUpdateRecords: (dayRecords)=>updateHabitRecords(habits[currentHabitIndex].id, dayRecords),
                                onDeleteHabit: ()=>deleteHabit(habits[currentHabitIndex].id),
                                onUpdateHabit: (updatedFields)=>updateHabit(habits[currentHabitIndex].id, updatedFields),
                                onViewChange: setCurrentView,
                                isNewHabitMode: false
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 546,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 545,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                showProfileDrawer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 z-50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-black/50",
                            onClick: ()=>setShowProfileDrawer(false)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 554,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-0 top-0 h-full w-3/4 max-w-sm bg-background border-r border-foreground/20 shadow-xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 space-y-6 h-full overflow-y-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-bold text-foreground",
                                                children: "Profile"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 560,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowProfileDrawer(false),
                                                className: "p-1 hover:bg-muted rounded",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M6 18L18 6M6 6l12 12"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 563,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 562,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 561,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 559,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-12 bg-primary rounded-full flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-8 h-8 text-primary-foreground",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: "2",
                                                                d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 573,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 572,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 571,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-semibold text-foreground",
                                                                children: user?.username || 'User'
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 577,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-muted-foreground",
                                                                children: user?.email || 'user@example.com'
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 580,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 576,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 570,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-muted-foreground",
                                                children: [
                                                    "Age: ",
                                                    user?.age || 'Not specified'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 586,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-muted-foreground",
                                                children: [
                                                    "Date Joined: ",
                                                    new Date().toLocaleDateString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 590,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 569,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 pt-4 border-t border-foreground/10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowLogoutConfirmation(true),
                                            className: "w-full text-left p-3 hover:bg-muted rounded-lg transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium",
                                                    children: "Log out"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 598,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Sign out of your account"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 599,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 597,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 596,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 558,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 557,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 552,
                    columnNumber: 31
                }, this),
                showLogoutConfirmation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-background border border-border rounded-lg p-6 max-w-sm mx-4 shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-foreground mb-4 text-center",
                                children: "Do you want to log out?"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 609,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            // Handle logout
                                            localStorage.removeItem('currentUser');
                                            // Don't remove user-specific habits - they should persist for next login
                                            setUser(null);
                                            setHabits([]);
                                            setHabitSelection(null);
                                            setShowProfileDrawer(false);
                                            setShowLogoutConfirmation(false);
                                        // Reset to first user form or login screen
                                        },
                                        className: "flex-1 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors",
                                        children: "Yes"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 613,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_e859bb158405ee4122eee6909c7a41d4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowLogoutConfirmation(false),
                                        className: "flex-1 px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-gray-300 transition-colors",
                                        children: "No"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 626,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 612,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 608,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 607,
                    columnNumber: 36
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 361,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 360,
        columnNumber: 10
    }, this);
}
_s(Page, "OC+4k/sCHQ0iLpt53GvE4tf3xzg=");
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_a7c8bd5f._.js.map