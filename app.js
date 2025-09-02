const express=require('express');
const app=express();
const usermodel=require('./models/usermodel');
const feedbackModel=require('./models/feedbackmodel');
const path=require('path')
const mongoose=require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Atlas connected'))
  .catch(err => console.log(err));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('login');
});
app.post('/login', async (req, res) => {
    let { username, password } = req.body;
    if (!username || !password) {
        return res.render('login', { error: 'Both username and password are required.' });
    }
    user = await usermodel.create({
        username,
        password
    });
    res.redirect('/review');

    });
app.get('/review', (req, res) => {
    res.render('review');
});
app.post('/feedbackform', async (req, res) => {
    res.redirect('/thankyou');
});

app.get('/thankyou',(req,res)=>{
    res.render('thankyou');
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
});