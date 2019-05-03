import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';


const Navbar = (props) => {
    const { auth, profile } = props;
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">TodoApp</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">

                    {auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />}

                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return (
        { auth: state.firebase.auth, profile: state.firebase.profile }
    )
}

export default connect(mapStateToProps)(Navbar);