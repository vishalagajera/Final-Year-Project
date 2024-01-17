import React, { useState, useEffect } from 'react'
import "../Style/MDB5-STANDARD-UI-KIT-Free-7.1.0/css/mdb.min.css"
import "../Style/fontawesome-free-6.4.2-web/fontawesome-free-6.4.2-web/css/all.css"
import "../Style/login.css"
import { ToastContainer, toast } from 'react-toastify';
import { useAuth0 } from "@auth0/auth0-react";
import "react-toastify/dist/ReactToastify.css"
import Cookies from "js-cookie"
import { Link, useNavigate } from 'react-router-dom'
import Check from '../Auth/check'
const Login = () => {
	Check()
	const { loginWithRedirect, isAuthenticated, user } = useAuth0();
	const navigate = useNavigate()
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	console.log(isAuthenticated);
	//    useEffect(() => {
	// 		if (!isAuthenticated) {
	// 			navigate("/login");
	// 		}
	//    } , [])
	const handleSubmit = async (event) => {
		event.preventDefault();
		const response = await fetch("http://localhost:5500/login", {
			body: JSON.stringify({ email, password }),
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
		}).then(e => e.json())
		if (!response.result) {
			Cookies.set("token", response.token, {
				expires: 7, path: "/"
			})
			toast.success("Your journey is just a few moments away! ", {
				isLoading: true,
				position: "bottom-center",
				autoClose: 1000,
				hideProgressBar: true,
				theme: "light",
			});
			setTimeout(() => {
				toast.success("Success! You're in.", {
					hideProgressBar: true
				})
			}, 2000)
			setTimeout(() => {
				navigate("/home")
			}, 4000)
		}
		else {
			toast.error("Username or password are incorrect");
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
			<div className='login--main'>
				<form className="" onSubmit={handleSubmit}>
					<div className=" mb-4">
						<input type="email" id="form2Example1" placeholder='Email' onChange={(e) => setEmail(e.target.value)} className="form-control" />
					</div>
					<div className=" mb-4">
						<input type="password" id="form2Example2" placeholder='Password' onChange={(e) => setPassword(e.target.value)} className="form-control" />
					</div>
					<div className="row mb-4">
						<div className="col">
							<Link to="/ForgotPwd">Forgot Password?</Link>
						</div>
					</div>
					<button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
					<div className="text-center">
						<p>Not a member? <Link to="/signup">Register</Link></p>
						<p>or sign up with:</p>
						<button type="button" className="btn btn-link btn-floating mx-1">
							<i className="fab fa-facebook-f"></i>
						</button>

						<button type="button" className="btn btn-link btn-floating mx-1">
							<i className="fab fa-google"></i>
						</button>

						<button type="button" className="btn btn-link btn-floating mx-1">
							<i className="fab fa-twitter"></i>
						</button>

						<button type="button" className="btn btn-link btn-floating mx-1">
							<i className="fab fa-github"></i>
						</button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Login

// app.put("/update/:_id", async (req, res) => {
//     let data = await product.updateOne(
//         req.params,
//         {
//             $set: req.body
//         }
//     );
//     res.send(data);
// })