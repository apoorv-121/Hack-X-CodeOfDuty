const mongoose = require('mongoose')

const storyScheme = new mongoose.Schema({
    event: {
        type: String
    },
    name: {
        type: String
    },
    address: {
        type: String
    },
    landmark: {
        type: String
    },
    pin: {
        type:String
    },
    image: {
        type: String
    }
})

const Story = mongoose.model('stories', storyScheme);
module.exports = Story;