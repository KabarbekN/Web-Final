const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    username: String,
    picture1: String,
    picture2: String,
    picture3: String,
    names: String,
    descriptions: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: null },
    deletedAt: { type: Date, default: null }
});

module.exports = mongoose.model('Item', itemSchema);
