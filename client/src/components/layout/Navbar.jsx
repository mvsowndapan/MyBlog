import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//image
import Logo from '../../images/logo.png';
//actions
import { logoutUser } from '../../actions/authAction';

class Navbar extends Component {
    logOut = e => {
        e.preventDefault();
        this.props.logoutUser();
    }
    render() {
        let { auth } = this.props, navComponents;
        if (auth.isAuthunticated) {
            navComponents = (
                <ul className="navbar-nav ml-auto menu">
                    <li className="nav-item active">
                        <Link className="nav-link stylish googleSigmarFont text-white" to="/"><p>Blogs</p></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link stylish googleSigmarFont text-white" to="/dashboard"><p>Dashboard</p></Link>
                    </li>
                    <li className="nav-item">
                        <a href="/logout" onClick={this.logOut} className="nav-link stylish googleSigmarFont text-white">logout</a>
                    </li>
                </ul>
            );
        }
        else {
            navComponents = (
                <ul className="navbar-nav ml-auto menu">
                    <li className="nav-item active">
                        <Link className="nav-link stylish googleSigmarFont text-white" to="/"><p>Blogs</p></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link stylish googleSigmarFont text-white" to="/login"><p>Login</p></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link stylish googleSigmarFont text-white" to="/register"><p>Register</p></Link>
                    </li>
                </ul>
            )
        }
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg">
                    <Link to="/" className="navbar-brand">
                        <img src={Logo} width="40" height="40" alt=" "></img>
                    </Link>
                    <Link to="/" className="mr-auto navbar-brand stylish googleSigmarFont text-white" >MyBlog</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span><i className="fas fa-chevron-circle-down text-white"></i></span>
                    </button>
                    <div className="collapse navbar-collapse text-white " id="navbarNavDropdown">
                        {navComponents}
                    </div>
                </nav>
            </div >
        )
    }
}
Navbar.propTypes = {
    auth: PropTypes.object.isRequired,
    logoutUser: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps, { logoutUser })(Navbar);