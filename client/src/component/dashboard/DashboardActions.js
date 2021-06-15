import React from 'react';
import { withRouter } from 'react-router';
import { Button } from '@material-ui/core';

const DashboardActions = ({ history }) => {
    const handleButtonClick = (pageURL) => {
        history.push(pageURL);
    }

    return (
        <div>
            <Button variant='contained' color='primary' size='large' style={{ fontFamily: 'Montserrat', margin: 10 }} onClick={() => handleButtonClick('/edit-profile')}><i className="fas fa-user-circle" style={{marginRight: 5, marginBottom: 2}}></i>Edit Profile</Button>
            <Button variant='contained' color='primary' size='large' style={{ fontFamily: 'Montserrat', margin: 10}} onClick={() => handleButtonClick('/add-experience')}><i className="fas fa-user-tie hide-sm" style={{marginRight: 5, marginBottom: 2}}></i>Add Experience</Button>
            <Button variant='contained' color='primary' size='large' style={{ fontFamily: 'Montserrat', margin: 10 }} onClick={() => handleButtonClick('/add-education')}><i className="fas fa-graduation-cap hide-sm" style={{marginRight: 5, marginBottom: 2}}></i>Add Education</Button>
        </div>
    )
}

export default withRouter(DashboardActions);
