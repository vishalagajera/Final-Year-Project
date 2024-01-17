// import React, { useState } from 'react'
// import { useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// const ConfirmOTP = () => {
//     const [otp, setOTP] = useState("");
//     const location = useLocation();
//     const navigate=useNavigate();
    
//     const abc = async () => {
//         const queryParams = new URLSearchParams(location.search);
//         const email = queryParams.get('email');
//         const response = await fetch("http://localhost:5500/checkOTP", {
//             body: JSON.stringify({otp ,email}),
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//         }).then(e => e.json())
//         if(response.success){
//             navigate("/ChangePwd");
//         }else{
//             alert("OTP is not match");
//         }
//     }
//     return (
//         <>
//             <div className='ForgotPwd'>
//                 <div className="pwd-content">
//                     <h1>Check OTP</h1>
//                     <form action="">
//                         <div className="mb-4">
//                             <input type="text" placeholder='Enter OTP' onChange={(e) => setOTP(e.target.value)} className='form-control' />
//                         </div>
//                         <button type="button" className="btn btn-primary btn-block mb-4" onClick={abc}>Change</button>
//                     </form>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default ConfirmOTP