const express=require('express')
const Post=require('../model/model')
const Member=require('../model/Member')
const router=express.Router()

router.get('/',(req,res)=>{
    res.render('main')
})

router.get('/user', async (req,res)=>{
    
    try {
        const users=await Member.find()
        res.send(users)
    } catch (err) {
        console.log(err)
    }
})

router.get('/post', async (req,res)=>{
    
    try {
        const users=await Post.find()
        res.send(users)
    } catch (err) {
        console.log(err)
    }
})

router.post('/user', async (req,res)=>{
    const newmember=new Member({
        username:req.body.username,
        password:req.body.password,
    })

    try {
         const savepost=await newmember.save().then(res.send("Account registerd successfully"))
    } catch (err) {
        console.log(err)
    }

})

router.post('/post', async (req,res)=>{
    const newpost=new Post({
        category:req.body.category,
        image:req.body.image,
        description:req.body.description
    })

    try {
        const savepost=await newpost.save().then(res.send("Posted  successfully"))
        console.log(newpost)
    } catch (err) {
        console.log(err)
    }

})

router.patch('/post/:id',async (req,res)=>{
    try {
        const updatedata=await Post.updateOne({__id:req.params.id})
    } catch (err) {
        res.send(err)
        console.log(err)
    }
})




router.get('/post/:id',async (req,res)=>{

    try {
        const singledata=await Post.findById(req.params.id)
        res.send(singledata)
    } catch (err) {
        console.log(err)
    }
})


router.get('/post/category/:category',async (req,res)=>{

    try {
        const singledata=await Post.find({category:req.params.category})
        res.send(singledata)
    } catch (err) {
        console.log(err)
    }
})

router.delete('/post/:id',async (req,res)=>{
    try {
        const deletedata=await Post.remove({ __id:req.params.id})
        res.send('delete suucessfully')
    } catch (err) {
        console.log(err)
    }
})






module.exports =router