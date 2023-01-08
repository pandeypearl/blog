const express = require('express');
const app = express()
const postRouter = require('./routes/posts')

app.set('view engine', 'ejs')

app.use('/posts/', postRouter)

app.get('/', (req, res) => {
    const posts = [{
        title: 'Test Article',
        postDate: new Date(),
        description: 'Test Description' 

    }]
    res.render('index', {posts: posts})
})

app.listen(5000)