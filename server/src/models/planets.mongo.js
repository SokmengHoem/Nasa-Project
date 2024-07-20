
const mongoose = require('mongoose')

const planetSchema = new mongoose.Schema({
    keplerName: { type: String, requ: true},
    
})

module.exports = mongoose.model('Planet', planetSchema)