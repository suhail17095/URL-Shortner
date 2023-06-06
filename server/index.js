const express=require("express")
const app=express()
const PORT=3002||process.env.PORT
const dotenv=require("dotenv")
const URL=require("./models/URL_Schema")
const shortId=require("shortid")
const cors=require("cors")
const { mongo } = require("mongoose")

dotenv.config({path:"./config.env"})
app.use(express.json())
app.use(cors())
require("./db/conn")
app.get("/",(req,res)=>
{
    res.send("hello")
})
app.post("/url",(req,res)=>
{
    const {redirectUrl}=req.body;
    const sid=shortId()
    const url=new URL({
        shortId:sid,
        redirectUrl:redirectUrl
    })
    url.save().then(()=>
    {
        console.log("short link generated succesfully")
    }).catch(()=>
    {
        console.log("short link failed to generate")
    })
    res.send(sid)

})
app.get("/:shortid",(req,res)=>
{
    const sid=req.params.shortid;
    URL.findOne({shortId:sid}).then(async(res_url)=>
    {
        console.log(res_url)
        console.log(res_url.redirectUrl)
        res_url.count=res_url.count+1;
        await res_url.save()
        res.redirect(res_url.redirectUrl)
    }).catch((err)=>
    {
        console.log(err)
    })
    
})
app.get("/:shortid/count",(req,res)=>
{
    const sid=req.params.shortid
    URL.findOne({shortId:sid}).then((async(res_url)=>
    {
        console.log(res_url.count)
        res.status(200).send(res_url.count.toString());

    })).catch((err)=>
    {
        console.log(err)
    })
})
app.listen(PORT,()=>
{
    console.log("server is listening at "+PORT)
})