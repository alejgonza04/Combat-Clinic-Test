import mongoose from 'mongoose';
const sessionSchema = new mongoose.Schema({
    sessionType: String,
    sessionLength: String,
    sparringTime: String,
    techniques: String,
    date: String,
});

const Session = mongoose.model('Session', sessionSchema);

export default Session;