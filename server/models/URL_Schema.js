const mongoose=require("mongoose")

const URLSchema=mongoose.Schema(
    {
       shortId:{
        type:String,
        required:true,
        unique:true
       },
       redirectUrl:{
        type:String,
        required:true
       } ,
       count:{
        type:Number,
        default:0
       }
    }
)



const URL=mongoose.model("URL",URLSchema);
module.exports=URL;