const { MongoClient } = require('mongodb');
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);
const uri = process.env.MONGODB_URI;

let cachedClient = null;

async function connectToDatabase() {
  if (cachedClient) return cachedClient;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  cachedClient = client;
  return client;
}

function generateOtp(length = 6) {
  return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1)).toString();
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }
  const otp = generateOtp();
  try {
    // Send OTP email
    await resend.emails.send({
      from: 'no-reply@yourdomain.com',
      to: email,
      subject: 'Your OTP Code',
      html: `<p>Your OTP code is: <b>${otp}</b></p>`
    });
    // Store OTP in MongoDB
    const client = await connectToDatabase();
    const db = client.db();
    await db.collection('otps').updateOne(
      { email },
      { $set: { otp, createdAt: new Date() } },
      { upsert: true }
    );
    res.status(200).json({ message: 'OTP sent!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
