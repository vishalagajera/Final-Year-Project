import React from 'react'
import "../Style/navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
const Header = () => {
	
	const navigate = useNavigate();	

	const performLogOut = () => {
		const ok = window.confirm("Are you sure?");
		if (ok) {
			Cookies.remove("token");
			navigate("/login")
		}
		else {
			navigate(window.location.pathname);
		}
	}

	return (
		<>
			<div className='navbar--'>

				<div className='logo--'>
					<h3 className='logo-name'>jobDuniya</h3>
				</div>
				<div className='menus--'>
					<Link className='Link--res' to={"/home"}>Home</Link>
					<Link className='Link--res' to={"/search"}>Search</Link>
					<Link className='Link--res' to={"/nearbyusers"}>Feed</Link>
					<Link className='Link--res' to={"/profile"}>Profile</Link>

					<button className="btn btn-danger  d-none d-md-block" onClick={() => {
						performLogOut()
					}
					}> <i className="fa-solid fa-arrow-right-from-bracket"></i> </button>
				</div>
				<div className='responsivemenu d-block d-md-none'>
					<div className='toggleMenu'>
						<Link className='Link--' to={"/home"}><i className='fa fa-home'></i></Link>
						<Link className='Link--' to={"/search"}><i className="fa-solid fa-magnifying-glass"></i></Link>
						<Link className='Link--' to={"/postanewjob"}><i className="fa-solid fa-plus"></i></Link>
						<Link className='Link--' to={"/nearbyusers"}><i className="fa-solid fa-users"></i></Link>
						<Link className='Link--' to={"/profile"}><i className="fa-solid fa-user"></i></Link>
						{/* <button className="btn btn-danger " onClick={performLogOut}>Log Out</button> */}
					</div>
				</div>
			</div>
		</>
	)
}

export default Header