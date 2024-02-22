import { Schema, model } from 'mongoose';

const ClientSchema = new Schema({
    name: { type: String, required: true },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    phone: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = model('Client', ClientSchema);
