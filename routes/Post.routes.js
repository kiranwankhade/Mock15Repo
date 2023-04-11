const express =  require("express");

const postRouters = express.Router();

const {PostModel} =  require("../model/Post.model");


postRouters.get("/",async (req,res)=>{
    console.log("Home");
    let retrieve = await PostModel.find();
    res.send({"Post":retrieve})
});

postRouters.get("/sort=asc",async(req,res)=>{
    let post = await PostModel.find().sort({budget:1})
    res.send(post)
})


postRouters.get("/sort=desc",async(req,res)=>{
    let post = await PostModel.find().sort({budget:-1})
    res.send(post)
})

postRouters.get("/filter",async(req,res)=>{
    console.log('req.query:', req.query.destination)
    let post = await PostModel.find({destination:req.query.destination})
    res.send(post)
})

postRouters.post("/addpost",async(req,res)=>{
    const {name,email,destination,travelers,budget }=req.body
    try{
        const post=new PostModel({name,email,destination,travelers,budget})
        await post.save()
        res.send("Post Added")    
    }catch(err){
        res.send("Error in registering the user")
        console.log(err)
    }
    
});



module.exports={
    postRouters
}

