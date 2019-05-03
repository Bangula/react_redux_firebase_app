import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

function SignIn(props) {
    const [user, setUser] = useState({
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
        props.signIn(user)
        setUser({
            email: '',
            password: ''
        })
    }
    const { authError, auth } = props;

    if (auth.uid) return <Redirect to='/' />

    return (
        <div className='container mt-5'>
            <form onSubmit={handleSubmit}>
                <h5 className="text-center">Sign In</h5>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id='email' value={user.email} onChange={handleChange} />
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id='password' value={user.password} onChange={handleChange} />
                    <button className='btn btn-primary mt-2' type='submit'>Submit</button>

                    {authError ? (
                        <p className='text-danger mt-3 text-center'>{authError}</p>
                    ) : (
                            <p className='text-success mt-3 text-center'></p>
                        )}

                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    authError: state.auth.authError,
    auth: state.firebase.auth
})

export default connect(mapStateToProps, { signIn })(SignIn);