import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({profile : { bio, skills }}) => {
    return (
        <div className='profile-about p-1'>
            { bio && (
                <Fragment>
                    <h2>About Me</h2>
                    <p>{bio}</p>
                    <div className="line"></div>
                </Fragment>
            )}
          
          <h2>Skill Set</h2>
          <div className="skills">
              { skills.map((skill, index) => (
                  <div className='p-1'>
                      <i className="fa fa-check"></i> {skill}
                  </div>
              ))}
          </div>
        </div>
    )
}

ProfileAbout.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileAbout;
