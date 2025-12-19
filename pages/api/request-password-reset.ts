import type { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';

// In-memory store for demo (replace with DB in production)
const resetTokens: Record<string, { email: string; expires: number }> = {};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }
  // Generate token
  const token = crypto.randomBytes(32).toString('hex');
  const expires = Date.now() + 1000 * 60 * 30; // 30 min expiry
  resetTokens[token] = { email, expires };

  // TODO: Send email with link (use Resend or similar)
  // Example link: http://localhost:3000/reset-password?token=TOKEN

  console.log(`Password reset link: http://localhost:3000/reset-password?token=${token}`);

  return res.status(200).json({ message: 'Reset link sent (check console in dev)' });
}
