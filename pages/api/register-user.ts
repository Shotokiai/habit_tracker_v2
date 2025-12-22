import type { NextApiRequest, NextApiResponse } from 'next'

// This route forwards user registration data to SheetDB (Google Sheets API)
// Set the SheetDB endpoint in environment variable SHEETDB_URL or it will
// fall back to the endpoint you provided.
const SHEETDB_URL = process.env.SHEETDB_URL || 'https://sheetdb.io/api/v1/wy27jygmvuwkz'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { username, email, age } = req.body
  if (!username || !email || !age) {
    return res.status(400).json({ error: 'Missing username, email, or age' })
  }

  // Validate age is between 15 and 80
  const ageNum = parseInt(age, 10)
  if (isNaN(ageNum) || ageNum < 15 || ageNum > 80) {
    return res.status(400).json({ error: 'Age must be between 15 and 80' })
  }

  try {
    const response = await fetch(SHEETDB_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: [{ 
          username, 
          email, 
          age: ageNum, 
          new_habit_creation: '', 
          createdAt: new Date().toISOString(),
          habit_created_at: '',
          habit_started_at: ''
        }]
      }),
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
