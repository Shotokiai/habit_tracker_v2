module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/@supabase/supabase-js [external] (@supabase/supabase-js, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@supabase/supabase-js");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/pages/api/log-daily-habit.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@supabase/supabase-js [external] (@supabase/supabase-js, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://vvsazraadvhjpjtjjwkd.supabase.co") || 'https://vvsazraadvhjpjtjjwkd.supabase.co';
const supabaseKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2c2F6cmFhZHZoanBqdGpqd2tkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5OTI5MjMsImV4cCI6MjA4MjU2ODkyM30.zP6Tu-x6lAni6wRLsYhalBhH7NQPBHXI2tFrA7YBBfU") || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2c2F6cmFhZHZoanBqdGpqd2tkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5OTI5MjMsImV4cCI6MjA4MjU2ODkyM30.zP6Tu-x6lAni6wRLsYhalBhH7NQPBHXI2tFrA7YBBfU';
const supabase = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__esm_import$29$__["createClient"])(supabaseUrl, supabaseKey);
async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({
            error: 'Method not allowed'
        });
    }
    try {
        const { habit_id, cycle_id, status } = req.body;
        if (!habit_id || !cycle_id || !status) {
            return res.status(400).json({
                error: 'Missing required fields: habit_id, cycle_id, status'
            });
        }
        if (![
            'completed',
            'missed'
        ].includes(status)) {
            return res.status(400).json({
                error: 'Invalid status. Must be "completed" or "missed"'
            });
        }
        // Get today's date in YYYY-MM-DD format
        const today = new Date().toISOString().split('T')[0];
        // Step 1: Check if today's log already exists
        const { data: existingLog, error: checkError } = await supabase.from('habit_daily_logs').select('*').eq('habit_id', habit_id).eq('log_date', today).maybeSingle();
        if (checkError) {
            console.error('Error checking existing log:', checkError);
            return res.status(500).json({
                error: 'Failed to check existing log',
                details: checkError.message
            });
        }
        // If log already exists, return without inserting
        if (existingLog) {
            console.log('✅ Log already exists for today:', existingLog);
            return res.status(200).json({
                success: true,
                alreadyLogged: true,
                message: 'Already logged for today',
                log: existingLog
            });
        }
        // Step 2: Insert new daily log
        const { data: newLog, error: insertError } = await supabase.from('habit_daily_logs').insert([
            {
                habit_id,
                cycle_id,
                log_date: today,
                status
            }
        ]).select().single();
        if (insertError) {
            console.error('Error inserting daily log:', insertError);
            return res.status(500).json({
                error: 'Failed to insert daily log',
                details: insertError.message
            });
        }
        console.log('✅ New log created:', newLog);
        // Step 3: Update cycle counts by counting from daily logs
        const { count: completedCount, error: completedError } = await supabase.from('habit_daily_logs').select('id', {
            count: 'exact',
            head: true
        }).eq('cycle_id', cycle_id).eq('status', 'completed');
        const { count: missedCount, error: missedError } = await supabase.from('habit_daily_logs').select('id', {
            count: 'exact',
            head: true
        }).eq('cycle_id', cycle_id).eq('status', 'missed');
        if (completedError || missedError) {
            console.error('Error counting logs:', {
                completedError,
                missedError
            });
            return res.status(500).json({
                error: 'Failed to count logs'
            });
        }
        // Step 4: Update habit_cycles with derived counts
        const completed_days = completedCount || 0;
        const missed_days = missedCount || 0;
        const total_days = completed_days + missed_days;
        // Consistency based on 30-day cycle: (completed / 30) * 100
        // Examples: 1 day = 3.3%, 2 days = 6.7%, 3 days = 10%, 15 days = 50%, 30 days = 100%
        const CYCLE_LENGTH = 30;
        const consistency = Math.round(completed_days / CYCLE_LENGTH * 100 * 10) / 10;
        const { error: updateError } = await supabase.from('habit_cycles').update({
            completed_days,
            missed_days,
            consistency
        }).eq('id', cycle_id);
        if (updateError) {
            console.error('Error updating cycle:', updateError);
            return res.status(500).json({
                error: 'Failed to update cycle',
                details: updateError.message
            });
        }
        console.log('✅ Cycle updated:', {
            completed_days,
            missed_days,
            total_days,
            consistency
        });
        return res.status(200).json({
            success: true,
            alreadyLogged: false,
            log: newLog,
            stats: {
                completed_days,
                missed_days,
                total_days,
                consistency
            }
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({
            error: 'Internal server error',
            details: error.message
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2ee3e81a._.js.map