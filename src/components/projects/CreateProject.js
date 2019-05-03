import React, { useState } from 'react';
import { createProject } from '../../store/actions/createProject';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

function CreateProject(props) {
    const [task, setTask] = useState({
        title: '',
        content: ''
    });

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.id]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.createProject(task);
        props.history.push('/');
        setTask({
            title: '',
            content: ''
        })
    }
    if (!props.auth.uid) return <Redirect to='/signin' />

    return (
        <div className='container mt-5'>
            <form onSubmit={handleSubmit}>
                <h5 className="text-center">Create Project</h5>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id='title' value={task.title} onChange={handleChange} />
                    <label htmlFor="content">Content</label>
                    <textarea className="form-control" id='content' value={task.content} onChange={handleChange}></textarea>
                    <button className='btn btn-primary mt-2' type='submit'>Create</button>
                </div>
            </form>
        </div>
    )
}
const mapStateToProps = (state) => ({
    auth: state.firebase.auth
})

export default connect(mapStateToProps, { createProject })(CreateProject);