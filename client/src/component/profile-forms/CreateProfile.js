import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createProfile } from '../../actions/profile';

import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(3)
    },
    formItemSM: {
        marginRight: theme.spacing(2),
        width: '30ch',
        '@media (max-width:600px)': {
            width: '20ch',
        },
    },
    formItemSocial: {
        display: 'inline-flex',
        marginBottom: theme.spacing(1.5),
        marginRight: theme.spacing(2),
        width: '30ch'
    },
    dashbtn: {
        '@media (max-width:600px)': {
            fontSize: '0.775rem',
        },
    },
  }));

  const professions = [
    {
        value: '0',
        label: 'Select Professional Status',
    },
    {
      value: 'Developer',
      label: 'Developer',
    },
    {
      value: 'Junior Developer',
      label: 'Junior Developer',
    },
    {
      value: 'Senior Developer',
      label: 'Senior Developer',
    },
    {
      value: 'Manager',
      label: 'Manager',
    },
    {
      value: 'Student',
      label: 'Student or Learning',
    },
    {
        value: 'Instructor',
        label: 'Instructor',
    },
    {
        value: 'Intern',
        label: 'Intern',
    },
    {
        value: 'Other',
        label: 'Other',
    },
  ];

const CreateProfile = ({ createProfile, history }) => {
    const classes = useStyles();
    const [displaySocials, toggleSocials] = useState(false);

    const [formData, setFormData] = useState({
        company: '',
        website: '',
        location: '',
        status: '',
        skills: '',
        githubusername: '',
        bio: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        youtube: '',
        instagram: ''
    });

    const { company, website, location, status, skills, githubusername, bio, twitter, facebook, linkedin, youtube, instagram } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        createProfile(formData, history);
    }

    return (
        <div className='dash'>
            <h1 className="large">Create Your Profile</h1>
            <p className="lead"><i className="fas fa-user"></i> Let's get some information to make your profile stand out</p>
            <small>* = required field</small>
            <div style={{ borderTop: "1px solid #b0b5b5 ", marginTop: 20, marginBottom: 20 }}></div>
            <form className={classes.form} onSubmit={e => onSubmit(e)}>
                <TextField
                    id="outlined-select-profession"
                    margin='normal'
                    size="small"
                    select
                    label="Status *"
                    name="status"
                    value={status}
                    onChange={e => onChange(e)}
                    SelectProps={{
                        native: true,
                    }}
                    helperText="Give us an idea of where you are at in your career"
                    variant="outlined"
                >
                {professions.map((option) => (
                    <option key={option.value} value={option.value}>
                    {option.label}
                    </option>
                ))}
                </TextField>
                <div>
                    <TextField 
                        variant='outlined'
                        margin='normal'
                        size="small"
                        id='Company'
                        className={classes.formItemSM}
                        label='Company'
                        name='company'
                        value={company}
                        helperText="Could be your own company or one you work for"
                        onChange={e => onChange(e)}
                    />
                    <TextField 
                        variant='outlined'
                        margin='normal'
                        size="small"
                        id='Website'
                        className={classes.formItemSM}
                        label='Website'
                        name='website'
                        value={website}
                        helperText="Could be your own or a company website"
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className='form-group'>
                    <TextField 
                        variant='outlined'
                        margin='normal'
                        size="small"
                        id='Location'
                        className={classes.formItemSM}
                        label='Location'
                        name='location'
                        value={location}
                        helperText="State & Country suggested (eg. Delhi, India)"
                        onChange={e => onChange(e)}
                    />
                    <TextField 
                        variant='outlined'
                        margin='normal'
                        size="small"
                        id='Github Username'
                        className={classes.formItemSM}
                        label='Github Username'
                        name='githubusername'
                        value={githubusername}
                        helperText="Could be your own or a company website"
                        onChange={e => onChange(e)}
                    />
                </div>
                <TextField 
                    variant='outlined'
                    margin='normal'
                    size="small"
                    fullWidth
                    id='Skills'
                    label='Skills *'
                    name='skills'     
                    value={skills}
                    helperText="Please use comma separated values (eg. HTML, CSS, JavaScript, NodeJS)"
                    onChange={e => onChange(e)}
                />
                <TextField 
                    variant='outlined'
                    margin='normal'
                    fullWidth
                    multiline
                    rows={2}
                    id="outlined-multiline-static"
                    label="Bio"
                    name="bio"
                    value={bio}
                    helperText="Tell us a little about yourself"
                    onChange={e => onChange(e)}
                />
                <div className="my-2">
                    <Button variant="contained" style={{ fontFamily: ['Montserrat','sans-serif'].join(','),marginRight: 10, marginBottom:10 }} onClick={() => toggleSocials(!displaySocials)}>Add Social Network Links</Button>
                    <span>Optional</span>
                </div>
               { displaySocials &&  <div className="socials">
                    <div className={classes.formItemSocial}>
                        <i className="fab fa-twitter" id="twitter"></i>
                            <TextField 
                                variant='outlined'  
                                size="small"
                                id="input-with-icon-grid" 
                                label="Twitter URL" 
                                name="twitter"
                                value={twitter}
                                onChange={e => onChange(e)}
                            />
                    </div>
                    <div className={classes.formItemSocial}>
                        <i className="fab fa-facebook-square" id="fb"></i>
                            <TextField 
                                variant='outlined'  
                                size="small"
                                id="input-with-icon-grid" 
                                label="Facebook URL" 
                                name="facebook"
                                value={facebook}
                                onChange={e => onChange(e)}
                            />
                    </div>
                    <div className={classes.formItemSocial}>
                        <i className="fab fa-youtube" id="yt"></i>
                            <TextField 
                                variant='outlined'
                                size="small"  
                                id="input-with-icon-grid" 
                                label="YouTube URL" 
                                name="youtube"
                                value={youtube}
                                onChange={e => onChange(e)}
                            />
                    </div>
                    <div className={classes.formItemSocial}>
                        <i className="fab fa-linkedin" id="linkedin"></i>
                            <TextField 
                                variant='outlined'
                                size="small"  
                                id="input-with-icon-grid" 
                                label="LinkedIn URL" 
                                name="linkedin"
                                value={linkedin}
                                onChange={e => onChange(e)}
                            />
                    </div>
                    <div className={classes.formItemSocial}>
                        <i className="fab fa-instagram" id="insta"></i>
                            <TextField 
                                variant='outlined' 
                                size="small" 
                                id="input-with-icon-grid" 
                                label="Instagram URL" 
                                name="instagram"
                                value={instagram}
                                onChange={e => onChange(e)}
                            />
                    </div>
                </div> }
                <div className="create-profile-btn">
                    <Button type='submit' variant='contained' className={classes.dashbtn} color='primary' style={{ fontFamily: ['Montserrat','sans-serif'].join(','), marginRight: 10}}>Submit</Button>
                    <Button variant='outlined' color='primary' className={classes.dashbtn} style={{ fontFamily: ['Montserrat','sans-serif'].join(','),marginRight: 10}} onClick={() => history.push('/dashboard')}>Go Back</Button>
                </div>
            </form>
        </div>
    )
}

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired
}

export default connect(null, { createProfile })(withRouter(CreateProfile));
