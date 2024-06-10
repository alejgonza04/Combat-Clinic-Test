import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    sessions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Session' }]
});

const User = mongoose.model('User', userSchema);

export default User;
