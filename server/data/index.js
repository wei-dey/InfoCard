const mongoose = require('mongoose')
const users = [
    {
        _id: new mongoose.Types.ObjectId(),
        name: 'Benny',
        age: '20',
        username: 'bennyTech'

    },
    {
        _id: new mongoose.Types.ObjectId(),
        name: 'Bonnie',
        age: '25',
        username: 'bonnieTech'
    },
]
module.exports = users