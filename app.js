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
    let{email,password}=req.body;
            user = await usermodel.create({
                email,
                password
            });
            res.redirect('/review');

    });
app.get('/review', (req, res) => {
    res.render('review');
});
app.post('/feedbackform', async (req, res) => {
    let user = await usermodel.findOne({ email: req.body.email });
    if(user==null){
        res.redirect('/login'); 
    }
    let feedbackdata = await feedbackModel.create({
        user: user._id,
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
        department: req.body.department,
        visitTypes: req.body.visitTypes,  // multiple checkboxes
        ratings: {
            teaching: req.body.teaching,
            lab: req.body.lab,
            content: req.body.content,
            assessment: req.body.assessment,
            admin: req.body.admin,
            overall: req.body.overall
        },
        comments: {
            teaching: req.body.teachingComment,
            lab: req.body.labComment,
            content: req.body.contentComment,
            assessment: req.body.assessmentComment,
            admin: req.body.adminComment,
            overall: req.body.overallComment
        },
        detailedFeedback: req.body.detailedFeedback,
        anonymous: req.body.anonymous === "on"   // checkbox
    });

    user.feedback.push(feedbackdata._id);
    await user.save();

    res.redirect('/thankyou');
});

app.get('/thankyou',(req,res)=>{
    res.render('thankyou');
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
});