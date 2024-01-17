import React, { useState } from 'react'
import "../Style/MDB5-STANDARD-UI-KIT-Free-7.1.0/css/mdb.min.css"
import "../Style/fontawesome-free-6.4.2-web/fontawesome-free-6.4.2-web/css/all.css"
import "../Style/singup.css"
import Cookies from "js-cookie"
import { Link, useNavigate } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer, toast } from 'react-toastify';
// import Cookies from 'js-cookie'
import Check from '../Auth/check'

const Signup = () => {
    Check("Signup")
    const navigate = useNavigate();
    // const [formData, setFormData] = useState({})
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [uname, setUname] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [addr, setAddr] = useState("");
    const [pincode, setPincode] = useState("");
    const [skill, setSkill] = useState("");
    const [education, setEducation] = useState("");
    const [workexperience, setWorkExperience] = useState("");

    const handleSubmit = async () => {

        if (email !== "" && password !== "") {

            const result = await fetch("http://localhost:5500/add", {
                body: JSON.stringify({ email, password }),
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((e) => e.json())
            console.log(result);
            if (result.success) {
                toast.success("Your journey is just a few moments away! ", {
                    isLoading: true,
                    position: "bottom-center",
                    autoClose: 1000,
                    hideProgressBar: true,
                    theme: "light",
                });
                setTimeout(() => {
                    nextStep();
                }, 2000)
            }
        } else {
            toast.error("Email and Passowrd are  ");
        }
    }

    const SubmitData = async () => {
        const result = await fetch("http://localhost:5500/submit", {
            body: JSON.stringify({ uname, fname, lname, email }),
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((e) => e.json())
        if (result.success) {
            Cookies.set("token", result.token, {
                expires: 7, path: "/"
            })
            toast.success("Your journey is just a few moments away! ", {
                isLoading: true,
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: true,
                theme: "light",
            });
            setTimeout(async () => {
                navigate("/home")
            }, 2000)
        } else {
            toast.error("Somthing Wrong please again enterd data");
        }
    }

    const nextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const prevStep = () => {
        setStep((prevStep) => prevStep - 1);
    };

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         [name]: value,
    //     }));
    // }
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <form>
                <div className='d-flex justify-content-center align-items-center flex-column  singup--main gap-3'>
                    <h1>Registration Form</h1>
                    {step === 1 && (
                        <>
                            <input type="email"
                                name="email"
                                className='form-control w-25'
                                placeholder='E-mail'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />

                            <input type="password"
                                name="pwd"
                                className='form-control w-25'
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />

                            <button type="button"
                                className='btn btn-primary'
                                onClick={() => handleSubmit()}>Next</button>

                            <p>already have an account <Link to="/login">Login</Link></p>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <input type="text"
                                name="uname"
                                className='form-control w-25'
                                placeholder='User Name'
                                value={uname}
                                onChange={(e) => setUname(e.target.value)} />

                            <input type="text"
                                name="fname"
                                className='form-control w-25'
                                placeholder='First Name'
                                value={fname}
                                onChange={(e) => setFname(e.target.value)} />

                            <input type="text"
                                name="lname"
                                className='form-control w-25'
                                placeholder='Last Name'
                                value={lname}
                                onChange={(e) => setLname(e.target.value)} />

                            <button type="button"
                                className='btn btn-primary'
                                onClick={prevStep}>Previous</button>

                            <button type="button"
                                className='btn btn-primary'
                                onClick={nextStep}>Next</button>
                        </>
                    )}
                    {step === 3 && (
                        <>
                            <input type="text"
                                name="addr"
                                className='form-control w-25'
                                placeholder='Address'
                                value={addr}
                                onChange={(e) => setAddr(e.target.value)} />
                            {/* <select>
                                <option>Country</option>
                                <option></option>
                                <option></option>
                                <option></option>
                            </select>
                            <select>
                                <option>State</option>
                                <option></option>
                                <option></option>
                                <option></option>
                            </select>
                            <select>
                                <option>City</option>
                                <option></option>
                                <option></option>
                                <option></option>
                                </select> */}
                            <input type='text'
                                name='pincode'
                                className='form-control w-25'
                                placeholder='PinCode'
                                value={pincode}
                                onChange={(e) => setPincode(e.target.value)} />
                            <button type="button"
                                className='btn btn-primary'
                                onClick={prevStep}>Previous</button>
                            <button type="button"
                                className='btn btn-primary'
                                onClick={nextStep}>Next</button>
                        </>
                    )}
                    {step === 4 && (
                        <>
                            <textarea name='skill' className='form-control w-25' placeholder='Skills' value={skill} onChange={(e) => setSkill(e.target.value)}></textarea>
                            <textarea name='education' className='form-control w-25' placeholder='Education' value={education} onChange={(e) => setEducation(e.target.value)}></textarea>
                            <textarea name='WorkExperience' className='form-control w-25' placeholder='Work Experience' value={workexperience} onChange={(e) => setWorkExperience(e.target.value)}></textarea>
                            <button type="button" className='btn btn-primary' onClick={() => SubmitData()}>Submit</button>
                        </>
                    )}
                </div>
            </form>
        </>
    )
}

export default Signup







// import React, { useEffect, useState } from 'react'
// import "../Style/MDB5-STANDARD-UI-KIT-Free-7.1.0/css/mdb.min.css"
// import "../Style/fontawesome-free-6.4.2-web/fontawesome-free-6.4.2-web/css/all.css"
// import "../Style/singup.css"
// import { Link, useNavigate } from 'react-router-dom'
// import Cookies from 'js-cookie'
// import Check from '../Auth/check'
// import { Navigate } from 'react-router-dom'

// const Signup = () => {
//     Check("Signup")
//     const navigate = useNavigate();
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleSubmit = async () => {

//         const result = fetch("http://localhost:5500/add", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 "username": username,
//                 "password": password,
//                 "email": email
//             })
//         }).then((e) => e.json()).catch((e) => console.log(e))
//         result.then(e => {
//             if (e.code === 11000) {
//                 alert("Email is already available");
//             }
//             else {
//                 alert("data saved successfully")
//                 navigate("/login");
//             }
//         }).catch(e => alert(e));
//     }

//     return (
//         <>

//             <div className='d-flex justify-content-center align-items-center flex-column  singup--main gap-3'>
//                 <h1>Registration Form</h1>
//                 <input type="text" className='form-control w-25' placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
//                 <input type="text" className='form-control w-25' placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
//                 <input type="text" className='form-control w-25' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
//                 <button className='btn btn-primary' onClick={() => handleSubmit()}>Submit</button>
//                 <p>already have an account <Link to="/login">Login</Link></p>
//             </div>
//         </>
//     )
// }

// export default Signup