import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Check = (page) => {
    const navigate = useNavigate()
    useEffect(() => {
        if ( Cookies.get("token")) {
            navigate("/home")
        }
        else {
            navigate("/"+(page?page:"login"))
        }

    }, [])
    return (
        <></>
    )
}

export default Check;



