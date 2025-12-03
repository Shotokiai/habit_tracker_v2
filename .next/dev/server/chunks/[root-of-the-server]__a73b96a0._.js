module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/pages/api/track-custom-habit.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
// This route forwards custom habit creation data to SheetDB (Google Sheets API)
const SHEETDB_URL = process.env.SHEETDB_URL || 'https://sheetdb.io/api/v1/wy27jygmvuwkz';
async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({
            error: 'Method not allowed'
        });
    }
    const { habitName, habitType, userAge, userName } = req.body;
    if (!habitName || !habitType) {
        return res.status(400).json({
            error: 'Missing habit name or type'
        });
    }
    try {
        // Update the existing user record with the new custom habit
        const customHabitData = `${habitType}: ${habitName} (Age: ${userAge})`;
        const response = await fetch(SHEETDB_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: {
                    username: userName || 'Unknown',
                    email: '',
                    age: userAge || 0,
                    new_habit_creation: customHabitData,
                    createdAt: new Date().toISOString()
                }
            })
        });
        if (!response.ok) {
            const text = await response.text();
            console.error('SheetDB error:', response.status, text);
            return res.status(500).json({
                error: 'Failed to save to SheetDB'
            });
        }
        return res.status(200).json({
            success: true
        });
    } catch (err) {
        console.error('track-custom-habit error', err);
        return res.status(500).json({
            error: 'Internal server error'
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a73b96a0._.js.map