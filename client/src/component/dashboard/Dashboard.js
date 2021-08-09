import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteAccount, getCurrentProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';

import { Button } from '@material-ui/core';

const Dashboard = ({ deleteAccount, getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {
    useEffect(() => {
        getCurrentProfile();
    }, [user, getCurrentProfile]);

    const history = useHistory();

    const handleButtonClick = (pageURL) => {
        history.push(pageURL);
    }

    return loading && profile === null ?
        <Spinner /> : <div className='dash'>
            <h1 className='large'>DashBoard</h1>
            <p className='lead'><i className='fas fa-user'></i>Welcome { user && user.name }</p>
            <div style={{ borderTop: "1px solid #b0b5b5 ", marginTop: 20, marginBottom: 20 }}></div>
            {profile !== null ? (
                <Fragment>
                    <DashboardActions />
                    <Experience experience={profile.experience} />
                    <Education education={profile.education} />
                    <div className='my-2'>
                        <Button variant='contained' color='secondary' style={{ fontFamily: 'Montserrat'}} onClick={() => deleteAccount()}><i className='fas fa-user-minus hide-sm' style={{ marginRight: 3}}></i>Delete My Account</Button>
                    </div>
                </Fragment>
            ) : (
                <Fragment>
                    <p>You have not yet created a profile, please add some info</p>
                    <Button variant='contained' color='primary' size='large' style={{ fontFamily: 'Montserrat', marginTop: 10, marginBottom: 10 }} onClick={() => handleButtonClick('/create-profile')}>Create Profile</Button>
                </Fragment>
            ) }
        </div>
    
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, { deleteAccount, getCurrentProfile })(Dashboard);
