import type { NextApiRequest, NextApiResponse } from 'next'

const SHEETDB_URL = process.env.SHEETDB_URL || 'https://sheetdb.io/api/v1/wy27jygmvuwkz'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email, habitName, habitCreatedAt } = req.body
  if (!email || !habitName || !habitCreatedAt) {
    return res.status(400).json({ error: 'Missing email, habitName, or habitCreatedAt' })
  }

  try {
    // Update the user record with habit creation time
    const response = await fetch(`${SHEETDB_URL}/email/${encodeURIComponent(email)}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          habit_created_at: habitCreatedAt
        }
      }),
    })

    if (!response.ok) {
      const text = await response.text()
      console.error('SheetDB error:', response.status, text)
      return res.status(500).json({ error: 'Failed to update SheetDB' })
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('track-habit-created error', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}