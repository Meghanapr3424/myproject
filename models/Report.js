const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    location: { type: String, required: true },
    description: { type: String, required: true },
    evidence: { type: String }, // URL to uploaded evidence
}, { timestamps: true });

module.exports = mongoose.model('Report', ReportSchema);
