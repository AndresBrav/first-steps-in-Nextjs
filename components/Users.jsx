"use client" /* you have to use use client to use React methods */
import { useEffect } from "react"

function Users(){

    useEffect(() => {
        alert('loaded!')
    },[])

    return(
        <div>Users</div>
    )
}

export default Users