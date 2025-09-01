const mongoose=require('mongoose');
let userSchema=mongoose.Schema({
    email:String,   
    password:String,
    feedback:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Feedback'
    }]
})

module.exports=mongoose.model('User',userSchema);