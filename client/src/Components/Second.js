import React, { useState } from 'react'
import {Link,useNavigate} from "react-router-dom"
import axios from "axios"
function Second(props) {
    const handleCopyClick=()=>
    {
        navigator.clipboard.writeText(props.base_url+props.long_url)
        props.setCopied(true)
    }
    const Navigate=useNavigate()

    const change_page=(e)=>
    {
        e.preventDefault()
        Navigate("/")
    }
    const countClick=(e)=>
    {
        e.preventDefault()
        const url="https://url-api.onrender.com/"+props.long_url+"/count";
        axios.get(url).then((res)=>
        {
            console.log(res.data)
            props.setCount(res.data)
            Navigate("/count")
        })
    }
    return (
       
        <div className="first">

            <h1 style={{ color: "#0087DA" }} className='font-weight-bold'>Short URL</h1>
            <div className="container shadow-lg first-second">

                <div class="input-group mb-3">

                    <input type="text" class="form-control" placeholder="Enter the link here" aria-label="Recipient's username" aria-describedby="basic-addon2" value={props.base_url+props.long_url}/>
                    <div class="input-group-append">
                        <button className='btn btn-primary' style={{ color: "white" }} onClick={handleCopyClick}>{!props.copied?"COPY URL":"Copied"}</button>
                    </div>
                </div>
                <div className="second">
                    <span className='m-2'>Long URL: <Link to={props.base_url+props.long_url} target='_blank'>{props.base_url+props.long_url}</Link></span>
                    <button className='btn btn-primary m-2 mt-3' onClick={countClick}>Total of clicks of your shortend URL</button>
                    <button className='btn btn-primary m-2' style={{width:"80%"}} onClick={change_page}>Shorten another URL </button>
                </div>

            </div>
        </div>
    )
}

export default Second