import React, { useState, useEffect } from "react";
import axios from 'axios'

const Blog = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
            setData(res.data)
        })
    }, [])
    
    return(
        <div>

        </div>
    )
}
export default Blog