import React,  { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { login } from '../../actions/auth';
import { Button, Container, CssBaseline, makeStyles, Typography } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';


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
        marginTop: theme.spacing(5),
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

const Login = ({ login, isAuthenticated }) => {
    const classes = useStyles();

    const [formData, setFormData ] = useState({
        email: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true);
        login(email, password);

        setTimeout(() => setSubmitted(false), 5000);
    }

    const demoLogin = (e) => {
        const dEmail = 'adarshbalak@gmail.com';
        const dPassword = 'adarsh';

        login(dEmail, dPassword);
    }

    if(isAuthenticated){
        return <Redirect to='/dashboard' />
    }

    return (
        <Container className='main' component= 'main' maxWidth='xs'>
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component='h1' variant='h5' className={classes.title}>Login</Typography>
                <ValidatorForm as='form' className={classes.form} noValidate onSubmit={e => onSubmit(e)}>
                    <TextValidator
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        id='email'
                        label='Email'
                        name='email'
                        value={email}
                        autoComplete='email'
                        autoFocus
                        onChange={e => onChange(e)}
                        validators={['required', 'isEmail']}
                        errorMessages={['Please enter your Email', 'this Email is not valid']}
                    />
                    <TextValidator 
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
                        validators={['required']}
                        errorMessages={['Please enter your Password']}
                    />
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                        className={classes.submit}
                        disabled={submitted}
                    >Login</Button>
                    <Typography variant='subtitle1' className={classes.btndown}>Don't have an account? <Link to='/register'>Sign Up</Link></Typography>
                    <div className='demo-login'>
                        <div style={{ borderTop: "1px solid #b0b5b5 ", width: '40%' }}></div>
                        <Typography variant='subtitle1' className={classes.btndown}>OR</Typography>
                        <div style={{ borderTop: "1px solid #b0b5b5 ", width: '40%' }}></div>
                    </div>
                    <Button
                        fullWidth variant='contained' color='primary' className={classes.submit} onClick={e => demoLogin(e)}>Login as a Demo User</Button>
                </ValidatorForm>
            </div>
        </Container>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
