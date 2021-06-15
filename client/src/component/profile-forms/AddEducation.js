import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEducation } from '../../actions/profile';

import { Button, Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(3),
    },
    formItemSM: {
        marginRight: theme.spacing(2),
        width: '30ch',
        '@media (max-width:600px)': {
            width: '20ch',
        },
    },
    datepickgroup: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: theme.spacing(3)
    },
    datepicking: {
        marginRight: theme.spacing(8),
        width: '30ch'
    },
    dashbtn: {
        '@media (max-width:600px)': {
            fontSize: '0.775rem',
        },
    },
  }));

const AddEducation = ({ addEducation, history }) => {
    const classes = useStyles();
    const [disableDate, toggleDisable] = useState(false);

    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: false,
        description: ''
    });

    const { school, degree, fieldofstudy, from, to, current, description } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addEducation(formData, history);
    }
    return (
        <div className='dash'>
            <h1 className="large">Add Your Education</h1>
            <p className="lead"><i className="fas fa-graduation-cap"></i> Add any school, bootcamp, etc that you have attended</p>
            <small>* = required field</small>
            <div style={{ borderTop: "1px solid #b0b5b5 ", marginTop: 20, marginBottom: 20 }}></div>
            <form className={classes.form} style={{ fontFamily: ['Montserrat','sans-serif'].join(',') }} onSubmit={e => onSubmit(e)}>
                <div>
                    <TextField 
                        variant='outlined'
                        margin='normal'
                        size="small"
                        id='title'
                        className={classes.formItemSM}
                        label='School or Bootcamp *'
                        name='school'
                        value={school}
                        onChange={e => onChange(e)}
                    />
                    <TextField 
                        variant='outlined'
                        margin='normal'
                        size="small"
                        id='Company'
                        className={classes.formItemSM}
                        label='Degree or Certificate *'
                        name='degree'
                        value={degree}
                        onChange={e => onChange(e)}
                    />
                </div>
                <TextField 
                    variant='outlined'
                    margin='normal'
                    size="small"
                    id='Location'
                    className={classes.formItemSM}
                    label='Field of Study'
                    name='fieldofstudy'
                    value={fieldofstudy}
                    onChange={e => onChange(e)}
                />
                <div className={classes.datepickgroup}>
                    <TextField
                        id="date"
                        label="From Date"
                        type="date"
                        className={classes.datepicking}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        name='from'
                        value={from}
                        onChange={e => onChange(e)}
                    />
                    <TextField
                        id="date"
                        disabled={disableDate ? 'disabled' : ''}
                        label="To Date"
                        type="date"
                        defaultValue="2017-05-24"
                        className={classes.datepicking}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        name='to'
                        value={to}
                        onChange={e => onChange(e)}
                    />
                </div>
                <FormControlLabel control={
                    <Checkbox
                        checked={current}
                        onChange={() => {
                            setFormData({ ...formData, current: !current });
                            toggleDisable(!disableDate);
                        }}
                        name="current"
                        color="primary"
                        value={current} 
                    />
                }
                label="Current School"
                />
                <TextField 
                    variant='outlined'
                    margin='normal'
                    fullWidth
                    multiline
                    rows={2}
                    id="outlined-multiline-static"
                    label="Program Description"
                    name="description"
                    value={description}
                    onChange={e => onChange(e)}
                />
                <div className="addexp-btn">
                    <Button type='submit' variant='contained' className={classes.dashbtn} color='primary' style={{ fontFamily: ['Montserrat','sans-serif'].join(','), marginRight: 10}}>Submit</Button>
                    <Button variant='outlined' color='primary' className={classes.dashbtn} style={{ fontFamily: ['Montserrat','sans-serif'].join(','),marginRight: 10}} onClick={() => history.push('/dashboard')}>Go Back</Button>
                </div>
            </form>
        </div>
    )
}

AddEducation.propTypes = {
    addEducation: PropTypes.func.isRequired
}

export default connect(null, { addEducation })(withRouter(AddEducation));
