import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
    sessionType: { type: String, required: true },
    sessionLength: { type: String, required: true },
    sparringTime: { type: String, required: true },
    techniques: { type: String, required: true },
    date: { type: Date, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Session = mongoose.model('Session', sessionSchema);

export default Session;
