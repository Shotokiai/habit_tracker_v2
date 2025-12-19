
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { Resend } = require('resend');
require('dotenv').config();

admin.initializeApp();

const resend = new Resend(process.env.RESEND_API_KEY);
const FieldValue = admin.firestore.FieldValue;

function generateOtp(length = 6) {
  return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1)).toString();
}

// Send OTP function
exports.sendOtp = functions.https.onRequest(async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }
  const otp = generateOtp();
  // Store OTP in Firestore with expiration (optional, for demo just send)
  try {
    await resend.emails.send({
      from: 'no-reply@yourdomain.com',
      to: email,
      subject: 'Your OTP Code',
      html: `<p>Your OTP code is: <b>${otp}</b></p>`
    });
    // Optionally save OTP to Firestore for verification
    await admin.firestore().collection('otps').doc(email).set({
      otp,
      createdAt: FieldValue.serverTimestamp(),
    });
    res.status(200).json({ message: 'OTP sent!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Verify OTP function
exports.verifyOtp = functions.https.onRequest(async (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) {
    return res.status(400).json({ error: 'Email and OTP are required' });
  }
  try {
    const doc = await admin.firestore().collection('otps').doc(email).get();
    if (!doc.exists) {
      return res.status(400).json({ error: 'OTP not found' });
    }
    const data = doc.data();
    if (data.otp === otp) {
      // Optionally delete OTP after verification
      await admin.firestore().collection('otps').doc(email).delete();
      return res.status(200).json({ message: 'OTP verified!' });
    } else {
      return res.status(400).json({ error: 'Invalid OTP' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
