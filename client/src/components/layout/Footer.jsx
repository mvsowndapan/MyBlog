import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div >
                <footer className="stylish googleSigmarFont bg footer text-white text-center">
                    Copyright &copy; {new Date().getFullYear()} MyBlog
                </footer>
            </div>
        )
    }
}

export default Footer;
