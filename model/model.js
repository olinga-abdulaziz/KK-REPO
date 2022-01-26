const mongoose=require('mongoose')


const MyModel=mongoose.Schema({
    category:{
        type:String
    },
    image:{
        type:String
    },
    description:{
        type:String
    },
     createdAt:{
        type:Date,
        default:Date.now
    },
})

module.exports=mongoose.model('Post',MyModel)
