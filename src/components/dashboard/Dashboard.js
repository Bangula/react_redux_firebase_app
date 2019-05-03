import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { Redirect } from 'react-router-dom';

function Dashboard(props) {
    const { projects, auth, notifications } = props;
    if (!auth.uid) return <Redirect to='/signin' />

    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-md-6 bane">
                    <ProjectList projects={projects} />
                </div>
                <div className="col-md-5 bane ml-auto">
                    <Notifications notifications={notifications} />
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications

    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' },
        { collection: 'notifications', limit: 5 }
    ])
)(Dashboard);