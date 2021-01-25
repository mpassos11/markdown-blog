const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const articleRouter = require('./routes/articles');
const Article = require('./models/article');

const app = express();

mongoose.connect('mongodb+srv://root:root@cluster0.gvzza.mongodb.net/markdownBlog?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.get('/', async (req, res) => {
    const articles = await Article.find().sort({ createdAt: 'desc' });
    res.render('articles/index', { articles: articles });
});

app.use('/articles', articleRouter);

app.listen(process.env.PORT || 5000);
