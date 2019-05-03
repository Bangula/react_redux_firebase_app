import React from 'react';
import moment from 'moment';

function ProjectSummary({ project }) {
    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-text">Posted by {project.authorFirstName} {project.authorLastName}</p>
                <p className="card-text text-secondary">
                    {moment(project.createdAt.toDate()).calendar()}
                </p>
            </div>
        </div>
    )
}

export default ProjectSummary;