const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const mongoose = require("mongoose")
   
const postRouter = require('./routes/post-router')

const app = express()

mongoose.connect("mongodb+srv://cluster-blog-app.6r7ny.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/posts",
{
    dbName: 'posts',
    user: 'blogapp',
    pass: 'Blogapp123',
    useNewUrlParser: true,
    useUnifiedTopology: true
}
).then(()=>{
    console.log ('Mongodb connected')
}) .catch((err) =>{
    console.log('Error to connect to mongodb: '+err)
})

const apiPort = 3000



app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', postRouter)
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))