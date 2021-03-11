const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Messages = require('./models/Messages');




//mongodb+srv://robdrehmann:<password>@cluster0.vsnci.mongodb.net/myFirstDatabase?retryWrites=true&w=majority



const dbUrl = process.env.DB_URL ;

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});



const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.render('home')
});
app.get('//', (req, res) => {
    res.render('home')
});

app.get('/messages', async (req, res) => {
    const submits = await Messages.find({});
    res.render('messages', { submits })
});



app.post('/', async (req, res) => {
    const Message = new Messages(req.body.Messages);
    console.log(req.body.Messages)
    
    res.redirect('/')
})
app.post('//', async (req, res) => {
    const Message = new Messages(req.body.Messages);
    console.log(req.body.Messages)
    
    res.redirect('/')
})
app.get('/login', async (req, res) => {
    
    res.render('login')
});
app.get('/sorting', async (req, res) => {
    
    res.render('Sorting')
});



app.get('/projects', async (req, res) => {
    
    res.render('projects')
});
app.get('/programs', (req, res) => {
    res.render('programs');
})
app.get('/resume', (req, res) => {
    res.render('resume');
})

const port = process.env.PORT
app.listen(port, () => {
    console.log('Serving on port 3000')
})


