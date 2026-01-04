import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Legacy endpoint - no longer needed with habit_daily_logs table
  // Habit start tracking is now handled via habit_cycles table
  return res.status(200).json({ success: true })
}