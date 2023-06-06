import React from 'react'
import { Link } from 'react-router-dom'

function Count(props) {
  return (
    <div className="first">

            <h1 style={{ color: "#0087DA" }} className='font-weight-bold'>Short URL</h1>
            <div className="container shadow-lg first-second">

            <div>
                <h1 style={{color:"#505151"}}>Total URL Clicks</h1>
                <p >The number of clicks from the shortened URL that redirected the user to the landing page.</p>
                <Link to={props.base_url+props.long_url }target='_blank'>{props.base_url+props.long_url}</Link>
                <h1 style={{color:"#505151"}}>{props.count}</h1>
            </div>

            </div>
        </div>
  )
}

export default Count