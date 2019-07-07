import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
//common
import TextField from '../common/TextField';
//actions
import { registerUser } from '../../actions/authAction';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            name: '',
            password: '',
            confrim: '',
            occupation: '',
            age: '',
            err: {}
        };
    };
    onChange = (e) => { this.setState({ [e.target.name]: e.target.value }) }
    componentDidMount() {
        if (this.props.auth.isAuthunticated) this.props.history.push('/dashboard');
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.err) this.setState({ err: nextProps.err });
    }
    onSubmit = (e) => {
        e.preventDefault();
        let { email, name, password, confrim, occupation, age } = this.state;
        this.props.registerUser({ email, name, password, confrim, occupation, age }, this.props.history);
    }
    render() {
        const { err } = this.state;
        return (
            <div className="Register topMargin">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 googleSigmarFont color-blue">Register</h1>
                            <form noValidate onSubmit={this.onSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <TextField
                                            type='email'
                                            name='email'
                                            placeholder='Email'
                                            value={this.state.email}
                                            onChange={this.onChange}
                                            err={err.email}
                                        />
                                        <TextField
                                            type='text'
                                            name='age'
                                            placeholder='Age'
                                            value={this.state.age}
                                            onChange={this.onChange}
                                            err={err.age}
                                        />
                                        <TextField
                                            type='password'
                                            name='password'
                                            placeholder='Password'
                                            value={this.state.password}
                                            onChange={this.onChange}
                                            err={err.password}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <TextField
                                            type='text'
                                            name='name'
                                            placeholder='Name'
                                            value={this.state.name}
                                            onChange={this.onChange}
                                            err={err.name}
                                        />
                                        <TextField
                                            type='occupation'
                                            name='occupation'
                                            placeholder='Occupation'
                                            value={this.state.occupation}
                                            onChange={this.onChange}
                                            err={err.occupation}
                                        />
                                        <TextField
                                            type='password'
                                            name='confrim'
                                            placeholder='Confrim Password'
                                            value={this.state.confrim}
                                            onChange={this.onChange}
                                            err={err.confrim}
                                        />
                                    </div>
                                </div>


                                <input type="submit" className="btn btn-outline-primary googleSigmarFont" value="Register" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    err: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth,
    err: state.err
})
export default connect(mapStateToProps, { registerUser })(withRouter(Register));