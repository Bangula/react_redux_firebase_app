import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/create">New Project</Link>
            </li>
            <li className="nav-item">
                { // eslint-disable-next-line 
                    <a href='#' className="nav-link" onClick={props.signOut}>Logout</a>
                }
            </li>
            <li className="nav-item">
                <Link style={{ padding: '8px', borderRadius: '50%' }} className="nav-link ml-2 bg-secondary text-success" to="/">{props.profile.initails}</Link>
            </li>
        </ul>
    )
}

export default connect(null, { signOut })(SignedInLinks);