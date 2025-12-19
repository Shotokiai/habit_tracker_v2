import type { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';

// In-memory store for demo (replace with DB in production)
const resetTokens: Record<string, { email: string; expires: number }> = {};
const users: Record<string, { password: string }> = {};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { token, newPassword } = req.body;
  if (!token || !newPassword) {
    return res.status(400).json({ error: 'Token and new password required' });
  }
  const record = resetTokens[token];
  if (!record || record.expires < Date.now()) {
    return res.status(400).json({ error: 'Invalid or expired token' });
  }
  // Update password (replace with DB logic)
  users[record.email] = { password: newPassword };
  delete resetTokens[token];
  return res.status(200).json({ message: 'Password updated' });
}
