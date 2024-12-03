const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Send SOS Alert
router.post('/send', async (req, res) => {
    try {
        const { userId, location } = req.body;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Notify emergency contacts (simulate sending SMS)
        user.emergencyContacts.forEach(contact => {
            console.log(`Alert sent to: ${contact}, Location: ${location}`);
        });

        res.json({ message: 'SOS alert sent successfully!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
