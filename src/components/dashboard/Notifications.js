import React from 'react';
import moment from 'moment';

function Notifications(props) {
    const { notifications } = props;
    return (
        <div className="section">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title ">Notifications</h5>
                    <ul className='list-group'>

                        {notifications && notifications.map(not => {
                            return (
                                <li key={not.id} className='list-group-item'>
                                    <span className='text-danger'>{not.user} </span>
                                    <span>{not.content}</span>
                                    <br />
                                    <span className='text-secondary font-wight-light'>{moment(not.time.toDate()).calendar()}</span>
                                </li>
                            )
                        })}

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notifications;