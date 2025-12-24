module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/pages/api/track-habit-started.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
const SHEETDB_URL = process.env.SHEETDB_URL || 'https://sheetdb.io/api/v1/wy27jygmvuwkz';
async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({
            error: 'Method not allowed'
        });
    }
    const { email, habitName, habitStartedAt } = req.body;
    if (!email || !habitName || !habitStartedAt) {
        return res.status(400).json({
            error: 'Missing email, habitName, or habitStartedAt'
        });
    }
    try {
        // Update the user record with habit start time
        const response = await fetch(`${SHEETDB_URL}/email/${encodeURIComponent(email)}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: {
                    habit_started_at: habitStartedAt
                }
            })
        });
        if (!response.ok) {
            const text = await response.text();
            console.error('SheetDB error:', response.status, text);
            return res.status(500).json({
                error: 'Failed to update SheetDB'
            });
        }
        return res.status(200).json({
            success: true
        });
    } catch (err) {
        console.error('track-habit-started error', err);
        return res.status(500).json({
            error: 'Internal server error'
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__171df3a5._.js.map