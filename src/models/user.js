const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    Usuario: {
        type: String,
        required: true
    },
    Contraseña: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);
