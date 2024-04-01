import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/khotketan007')
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // }, [])
    return(
        <div className="text-center m-4 bg-gray-800 text-white text-3xl p-4">Github Followers : {data.followers}
        <img  src={data.avatar_url} alt="" srcset="" width={300} /></div>
    )
}
export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/khotketan007')
    return response.json()
}