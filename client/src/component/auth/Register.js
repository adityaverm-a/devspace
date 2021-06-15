import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types'
import { Button, Container, CssBaseline, makeStyles, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: '#e5e7eb',
        },
    },
    title: {
        marginTop: theme.spacing(5),
        fontFamily: [
          'Montserrat',
          'sans-serif'
        ].join(','),
        fontWeight: 600
      },
    paper: {
        
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: [
            'Montserrat',
            'sans-serif'
          ].join(','),
    },
    btndown: {
        fontFamily: [
            'Montserrat',
            'sans-serif'
          ].join(','),
        fontSize: '0.8rem'
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        fontFamily: [
            'Montserrat',
            'sans-serif'
          ].join(','),
    },
}))

const Register = ({ setAlert, register, isAuthenticated }) => {
    const classes = useStyles();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(password !== password2){
            setAlert('Passwords do not match', 'error');
        } else {
            register({ name, email, password })
        }
    }

    if(isAuthenticated) {
        return <Redirect to='/dashboard' />
    }

    return (
        <Container className='main' component= 'main' maxWidth='xs'>
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component='h1' variant='h5' className={classes.title}>Sign Up</Typography>
                <form className={classes.form} noValidate onSubmit={e => onSubmit(e)}>
                    <TextField 
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        id='name'
                        label='Name'
                        name='name'
                        value={name}
                        autoComplete='name'
                        autoFocus
                        onChange={e => onChange(e)}
                    />
                    <TextField 
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        id='email'
                        label='Email'
                        name='email'
                        type='email'
                        value={email}
                        autoComplete='email'
                        onChange={e => onChange(e)}
                    />
                    <TextField 
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        id='password'
                        label='Password'
                        name='password'
                        type='password'
                        value={password}
                        autoComplete='current-password'
                        onChange={e => onChange(e)}
                    />
                    <TextField 
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        id='password2'
                        label='Confirm Password'
                        name='password2'
                        type='password'
                        value={password2}
                        autoComplete='confirm-password'
                        onChange={e => onChange(e)}
                    />
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                        className={classes.submit}
                    >Register</Button>
                    <Typography variant='subtitle1' className={classes.btndown}>Already have an account? <Link to='/login'>Sign In</Link></Typography>
                </form>
            </div>
        </Container>
    )
};

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert, register })(Register);
