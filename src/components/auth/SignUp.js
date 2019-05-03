import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

function SignUp(props) {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.id]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.signUp(user);
        setUser({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        })
    }

    if (props.auth.uid) return <Redirect to='/' />

    return (
        <div className='container mt-5'>
            <form onSubmit={handleSubmit}>
                <h5 className="text-center">Sign Up</h5>
                <div className="form-group">

                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" id='firstName' value={user.firstName} onChange={handleChange} />

                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" id='lastName' value={user.lastName} onChange={handleChange} />

                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id='email' value={user.email} onChange={handleChange} />

                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id='password' value={user.password} onChange={handleChange} />

                    <button className='btn btn-primary mt-2' type='submit'>Submit</button>
                </div>
                <p className="text-center text-danger">
                    {props.authError ? props.authError : null}
                </p>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.firebase.auth,
    authError: state.auth.authError
})

export default connect(mapStateToProps, { signUp })(SignUp);