import React from 'react';
import { connect } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Button, Typography } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif'
    ].join(','),
  },
});

theme.typography.h2 = {
  fontSize: '2.2rem',
  fontFamily: 'Montserrat',
  marginBottom: 20,
  '@media (min-width:600px)': {
    fontSize: '2.5rem',
    marginBottom: 20
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3.4rem',
    marginBottom: 20
  },
};

theme.typography.subtitle1 = {
  fontSize: '1.2rem',
  fontFamily: 'Montserrat',  
  marginBottom: 20,
  '@media (min-width:600px)': {
    fontSize: '1.0rem',
    marginBottom: 20
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
    marginBottom: 20
  },
};

const Landing = ({ isAuthenticated }) => {
  const history = useHistory();

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  }

  if(isAuthenticated){
    return <Redirect to='/dashboard'/>
  }

    return (
      <ThemeProvider theme={theme}>
        <div className='landing'>
          <div className="containerfluid">
            <Typography variant='h2' style={{ fontWeight: 800 }}>Developer Connector</Typography>
            <Typography variant='subtitle1' style={{ fontWeight: 300 }}>Create a developer profile/portfolio, share posts and get help from other developers.</Typography>
            <div style={{ borderTop: "1px solid #b0b5b5 ", marginTop: 20, marginBottom: 20 }}></div>
            <Button variant='contained' color='primary' size='large' style={{ marginRight: 10, marginBottom:10 }} onClick={() => handleButtonClick('/register')}>Sign Up</Button>
            <Button variant='outlined' color='primary' size='large' style={{ marginRight: 10, marginBottom:10 }} onClick={() => handleButtonClick('/login')}>Login</Button>
          </div>
        </div>
      </ThemeProvider>
    )
}

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);






