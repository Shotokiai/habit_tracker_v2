module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/pages/api/register-user.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
// This route forwards user registration data to SheetDB (Google Sheets API)
// Set the SheetDB endpoint in environment variable SHEETDB_URL or it will
// fall back to the endpoint you provided.
const SHEETDB_URL = process.env.SHEETDB_URL || 'https://sheetdb.io/api/v1/wy27jygmvuwkz';
async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({
            error: 'Method not allowed'
        });
    }
    const { username, email, age } = req.body;
    if (!username || !email || !age) {
        return res.status(400).json({
            error: 'Missing username, email, or age'
        });
    }
    // Validate age is between 15 and 80
    const ageNum = parseInt(age, 10);
    if (isNaN(ageNum) || ageNum < 15 || ageNum > 80) {
        return res.status(400).json({
            error: 'Age must be between 15 and 80'
        });
    }
    try {
        const response = await fetch(SHEETDB_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: {
                    username,
                    email,
                    age: ageNum,
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
        console.error('register-user error', err);
        return res.status(500).json({
            error: 'Internal server error'
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2d730ac5._.js.map