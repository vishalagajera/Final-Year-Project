import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../Style/forgotpwd.css"

const ForgotPwd = () => {

    const [email, setEmail] = useState("");
    const navigate = useNavigate()

    const checkResult = async () => {
        const response = await fetch("http://localhost:5500/forgot", {
            body: JSON.stringify({
                "to": email
            }),
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
        }).then(e => e.json())
        if (response.success) {
            alert("Sent a reset password link to your gmail account")
        } else {
            alert(response.message);
        }
    }

    return (
        <>
            <div className='ForgotPwd'>
                <div className="pwd-content">
                    <h1>Change Password</h1>
                    <form action="">
                        <div className="mb-4">
                            <input type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} className='form-control' />
                        </div>
                        <button type="button" className="btn btn-primary btn-block mb-4" onClick={checkResult}>Change</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ForgotPwd