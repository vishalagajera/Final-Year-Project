import React, { useState } from 'react'
import "../Style/forgotpwd.css"
import { useLocation } from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css"
import "../Style/forgotpwd.css"

const ChangePwd = () => {

    const [otp, setOTP] = useState("");
    const [password, setPassword] = useState("");
    const [cpwd, setCpwd] = useState("");
    const location = useLocation();
    const navigate=useNavigate();
    
    const changePassword = async () => {
        const queryParams = new URLSearchParams(location.search);
        const email = queryParams.get('email');
        if (password !== cpwd) {
            alert("New Password  and confirm password is incorrect..")
        } else {
            const response = await fetch("http://localhost:5500/changePwd", {
                body: JSON.stringify({ otp,password,email }),
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(e => e.json())
            if(response.success){
                setTimeout(() => {
                    toast.success("Your Password are change successfully...", {
                        hideProgressBar: true
                    })
                }, 1000)
                setTimeout(()=>{
                    navigate("/login");
                },3000)
            }else{
                alert(response.message);
            }
        }
    }
    return (
        <>
        <ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"

			/>
            <div className='ChangePwd'>
                <div className="pwd-content">
                    <h1>New Password</h1>
                    <form action="">
                    <div className="mb-4">
                            <input type="text" placeholder='Enter OTP' onChange={(e) => setOTP(e.target.value)} className='form-control' />
                        </div>
                        <div className="mb-4">
                            <input type="password" placeholder='Create New Password' onChange={(e) => setPassword(e.target.value)} className='form-control' />
                        </div>
                        <div className="mb-4">
                            <input type="password" placeholder='Confirm Your Password' onChange={(e) => setCpwd(e.target.value)} className='form-control' />
                        </div>
                        <button type="button" className="btn btn-primary btn-block mb-4" onClick={changePassword}>Change</button>
                        <a href="/login">Login</a>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ChangePwd
