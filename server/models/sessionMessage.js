import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    sessionType: String,
    sessionLength: String,
    sparringTime: String,
    techniques: String,
    date: String,
})

var sessionMessage = mongoose.model('sessionMessage', postSchema);

export default sessionMessage;