import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect, Link } from 'react-router-dom';
import moment from 'moment';

function ProjectDetails(props) {

    const { id } = props.match.params;
    const projects = props.projects ? (
        props.projects.filter(project => {
            return project.id === id
        })
    ) : null;

    if (!props.auth.uid) return <Redirect to='/signin' />

    return (
        <div className='container section mt-5'>
            <div className="mt-5 mb-5">
                <Link to='/'>{'<< '}Back</Link>
            </div>
            {projects && projects.map(project => {
                return (
                    <div className="card" key={project.id}>
                        <div className="card-body">

                            <h3 className="card-title">
                                {project.title}
                            </h3>
                            <p className="card-text">{project.content}</p>
                        </div>
                        <div className="card-body card-details-footer">
                            <div>Posted By {project.authorFirstName} {project.authorLastName}</div>
                            {moment(project.createdAt.toDate()).calendar()}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {

    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectDetails);