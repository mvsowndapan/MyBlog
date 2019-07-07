import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authAction';

//common
import TextField from '../common/TextField';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            err: {}
        };
    };
    onChange = (e) => { this.setState({ [e.target.name]: e.target.value }) }
    componentDidMount() {
        if (this.props.auth.isAuthunticated) this.props.history.push('/dashboard');
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthunticated) this.props.history.push('/dashboard');
        if (nextProps.err) this.setState({ err: nextProps.err });
    }
    onSubmit = (e) => {
        e.preventDefault();
        let { email, password } = this.state;
        this.props.loginUser({ email, password });
    }
    render() {
        let { err } = this.state;
        return (
            <div className="login topMargin">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 googleSigmarFont color-blue">Login</h1>
                            <form noValidate onSubmit={this.onSubmit}>
                                <TextField
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    err={err.email}
                                />
                                <TextField
                                    type='password'
                                    name='password'
                                    placeholder='Password'
                                    value={this.state.password}
                                    onChange={this.onChange}
                                    err={err.password}
                                />
                                <input type="submit" className="btn btn-outline-primary color-blue googleSigmarFont" value="Login" />
                            </form>
                        </div>
                    </div><br></br>
                    <p className="text-center color-blue googleSigmarFont">Login With Other Options</p>
                    <div className="row m-auto">
                        <div className="col-md-6">
                            <a href="/auth/google"><button className="btn googleSigmarFont btn-danger">Google+</button></a>
                        </div>
                        <div className="col-md-6">
                            <a href="/auth/facebook"><button className="btn googleSigmarFont btn-primary">Facebook</button></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    err: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    err: state.err
});
export default connect(mapStateToProps, { loginUser })(Login);
