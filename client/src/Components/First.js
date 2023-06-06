import React, { useState } from 'react'
import axios from "axios"
import {Link,useNavigate} from "react-router-dom"
function First(props) {
    const [user_input,set_input]=useState("")
    const Navigate=useNavigate()
    const handleChange=(e)=>
    {
        e.preventDefault()
        const text=e.target.value;
        props.setCopied(false)
        set_input(text)
    }
    const submit=(e)=>
    {
        e.preventDefault();
        axios.post("https://url-api.onrender.com/url",{redirectUrl:user_input}).then((res)=>
        {
            console.log(res.data)
            props.set_long_url(res.data)
            props.set_user_input(user_input)
            Navigate("/second")
        }).catch((err)=>
        {
            console.log(err);
        })

    }
    
    return (
        
        <div className="first">

        <h1 style={{color:"#0087DA"}} className='font-weight-bold'>Short URL</h1>
        <div className="container shadow-lg">
            <h1 style={{color:"#505050",textAlign:"center"}}>Paste the URL to be shortend</h1>
            <div class="input-group mb-3">
                
                <input type="text" value={user_input} class="form-control" placeholder="Enter the link here" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={handleChange}/>
                    <div class="input-group-append">
                        <button className='btn btn-primary' style={{color:"white"}} onClick={submit}>Shorten URL</button>    
                    </div>
            </div>
            <p style={{width:"80%",textAlign:"center"}}>ShortURL is a free tool to shorten URLs and generate short links
             URL shortener allows to create a shortened link making it easy to share </p>
        </div>
        </div>
    )
}

export default First