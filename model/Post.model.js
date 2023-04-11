const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
   name:String,
   email:String,
   destination:String,
   travelers:Number,
   budget:Number
},{
    versionKey:false
});

const PostModel = mongoose.model("post",postSchema);

module.exports = {
    PostModel
}
