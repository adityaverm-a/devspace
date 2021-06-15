import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';

const ProfileItem = ({ 
    profile: { 
        user: { _id, name, avatar }, 
        status, 
        company, 
        location, 
        skills 
    }, history 
}) => {
    return (
        <div className='profile profiles'>
            <img src={avatar} alt='' className='round-img' />
            <div>
                <h2>{name}</h2>
                <p>{status}{company && <span> at {company}</span>}</p>
                <p className='my-1'>{location && <span>{location}</span>}</p>
                <Button variant='contained' color='primary' size="small" style={{ fontFamily: ['Montserrat','sans-serif'].join(',') }} onClick={() => history.push(`/profile/${_id}`)}>View Profile</Button>
            </div>
            <ul>
                {skills.slice(0, 4).map((skill, index) => (
                    <li key={index} className='skill-p'>
                        <i className='fas fa-check m'></i>{skill}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default withRouter(ProfileItem);
