const express = require('express');
const mongoose = require('mongoose');
const articleRouter = require('./routes/articles');

const app = express();

mongoose.connect('', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use('/articles', articleRouter);

app.get('/', (req, res) => {
    res.render('index')
});

app.listen(process.env.PORT || 5000);
