import type { NextApiRequest, NextApiResponse } from 'next'

// This route forwards user registration data to SheetDB (Google Sheets API)
// Set the SheetDB endpoint in environment variable SHEETDB_URL or it will
// fall back to the endpoint you provided.
const SHEETDB_URL = process.env.SHEETDB_URL || 'https://sheetdb.io/api/v1/wy27jygmvuwkz'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { username, email } = req.body
  if (!username || !email) {
    return res.status(400).json({ error: 'Missing username or email' })
  }

  try {
    const response = await fetch(SHEETDB_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: { username, email, createdAt: new Date().toISOString() } }),
    })

    if (!response.ok) {
      const text = await response.text()
      console.error('SheetDB error:', response.status, text)
      return res.status(500).json({ error: 'Failed to save to SheetDB' })
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('register-user error', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
