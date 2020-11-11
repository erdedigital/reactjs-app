import React, { Fragment } from 'react';
import { NavLink, Link } from "react-router-dom";
import { NavBarTop } from "./layout.style"
import { setUserLogin, setIsLoading } from '../../redux/actions';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';

const Header = () => {
	let history = useHistory()
	const dispatch = useDispatch();
	const handleLogout = async (e) => {
		e.preventDefault()
		dispatch(setIsLoading(false));
		await dispatch(setUserLogin(null));
		history.push('/login')
	}

	return (
		<Fragment>
			<NavBarTop>
				<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
					<div className="container">
						<Link to="/"><img src={`${process.env.PUBLIC_URL}/femisale.png`} className="mr-5" alt="logo" height="35" /></Link> 
						<button className="navbar-toggler" type="button">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse">
							<ul className="navbar-nav mr-auto">
								<li className="nav-item">
									<NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
								</li>
								<li className="nav-item">
									<NavLink className="nav-link" to="/orders">Orders</NavLink>
								</li>
								<li className="nav-item">
									<NavLink className="nav-link" to="/products">Products</NavLink>
								</li>
								<li className="nav-item">
									<NavLink className="nav-link" to="/logout" onClick={handleLogout} >Logout</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</NavBarTop>
		</Fragment>
	);
}
export default Header
