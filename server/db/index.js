const mongoose = require('mongoose')

mongoose
    .connect("mongodb+srv://cluster-blog-app.6r7ny.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/posts", 
        {
        dbName: 'posts',
        user: 'blogapp',
        pass: 'Blogapp123',
        useNewUrlParser: true,
        useUnifiedTopology: true
        })
    .catch(e => {
        console.error('Connection error', e.message)
    })


const db = mongoose.connection

module.exports = db