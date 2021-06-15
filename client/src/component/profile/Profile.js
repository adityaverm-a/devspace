import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { getProfileById } from '../../actions/profile';
import { Button } from '@material-ui/core';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import ProfileGithub from './ProfileGithub';

const Profile = ({ 
    getProfileById, 
    profile: { profile, loading },
    auth,
    match
}) => {
    useEffect(() => {
        getProfileById(match.params.id);
    }, [getProfileById, match.params.id]);

    return (
        <div className='dash'>
            { profile === null || loading ? (
                <Spinner />
            ) : (
                <Fragment>
                    {auth.isAuthenticated && 
                        auth.loading === false && 
                        auth.user._id === profile.user._id && (
                            <Button variant='outlined' color='primary' href='/edit-profile' style={{ fontFamily: ['Montserrat','sans-serif'].join(',')}} >Edit Profile</Button>
                        )
                    }
                    <div className='profile-grid my-1'>
                        <ProfileTop profile={profile} />
                        <ProfileAbout profile={profile} />
                        <div className='profile-exp p-2'>
                            <h2>Experience</h2>
                            {profile.experience.length > 0 ? (
                                <Fragment>
                                    {profile.experience.map(experience => (
                                        <ProfileExperience key={experience._id} experience={experience} />
                                    ))}
                                </Fragment>
                            ) : (
                                <h4>No Experience Credentials</h4>
                            )}
                        </div>
                        <div className='profile-edu p-2'>
                            <h2>Education</h2>
                            {profile.education.length > 0 ? (
                                <Fragment>
                                    {profile.education.map(education => (
                                        <ProfileEducation key={education._id} education={education} />
                                    ))}
                                </Fragment>
                            ) : (
                                <h4>No Education Credentials</h4>
                            )}
                        </div>
                        {profile.githubusername && (
                            <ProfileGithub username={profile.githubusername} />
                        )}
                    </div>
                </Fragment>
            ) }
        </div>
    )
}

Profile.propTypes = {
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    getProfileById: PropTypes.func.isRequired
}

const mapStateToProps = state =>({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, { getProfileById })(Profile);
