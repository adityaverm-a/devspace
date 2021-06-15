import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth';
import GuestLinks from './guestLinks';
import AuthLinks from './authLinks';
import { AppBar, Button, IconButton, Link, Menu, Toolbar } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    color: '#fff',
    flexGrow: 1,
    cursor: "pointer",
    fontFamily: [
      'Montserrat',
      'sans-serif'
    ].join(','),
    fontSize: '1.5rem',
    '@media (max-width:600px)': {
      fontSize: '1.3rem',
      fontFamily: 'Montserrat, sans-serif',
      display: 'flex'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5rem',
      fontFamily: 'Montserrat, sans-serif'
    },
    '&:hover': {
      color: '#fff',
      textDecoration: 'none',
    },
  },
  mlinks: {
    display: 'flex',
    textAlign: 'left',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontFamily: [
      'Montserrat',
      'sans-serif'
    ].join(','),
    color: '#343a40',
    fontSize: '1rem',
    boxSizing: 'border-box',
    fontWeight: 400,
    lineHeight: '1.5',
    whiteSpace: 'nowrap',
    letterSpacing: '0.00938em',
    padding: '6px 16px',
    cursor: "pointer",
    '&:hover': {
      color: '#343a40',
      textDecoration: 'none',
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
}));


const Navibar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const classes = useStyles();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const handleMobileMenuOpen = (e) => {
    setMobileMoreAnchorEl(e.currentTarget);
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  }

  const renderMobileMenu = (
    <Menu 
      id='mobileMenu'
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={Boolean(mobileMoreAnchorEl)}
      onClose={() => setMobileMoreAnchorEl(null)}
    >
      {!loading && isAuthenticated ? 
        <div>
          <Link component={RouterLink} className={classes.mlinks} to='/posts' onClick={() => handleMobileMenuClose()} >Posts</Link>
          <Link component={RouterLink} className={classes.mlinks} to='/login'>Dashboard</Link>
          <Link component={RouterLink} className={classes.mlinks} to='/profiles' onClick={() => handleMobileMenuClose()} >Developers</Link>
          <Link component={RouterLink} className={classes.mlinks} to='/login' onClick={logout} ><i className='fas fa-sign-out-alt'></i>{' '}Logout</Link>
        </div>
        : 
        <div>
            <Link component={RouterLink} className={classes.mlinks} to='/profiles'onClick={() => handleMobileMenuClose()} >Developers</Link>
            <Link component={RouterLink} className={classes.mlinks} to='/register'onClick={() => handleMobileMenuClose()} >Register</Link>
            <Link component={RouterLink} className={classes.mlinks} to='/login'onClick={() => handleMobileMenuClose()} >Login</Link>
        </div>
      }
    </Menu>
  );

    return (
      
        <div className={classes.root}>
          <AppBar position='sticky'>
            <Toolbar>
              <Link to='/' component={RouterLink} className={classes.title} color='inherit' ><i className="fas fa-code" style={{paddingTop: '7px'}}></i> DevConnector</Link>
              <div className={classes.sectionDesktop}>
                {!loading && isAuthenticated ? 
                   <div style={{ display: 'flex'}}>
                     <AuthLinks />
                     <Button color='inherit' onClick={logout} style={{ fontFamily: ['Montserrat','sans-serif'].join(','),}}><i className='fas fa-sign-out-alt'></i>{' '}Logout</Button> 
                   </div>
                   : 
                  <GuestLinks /> }
              </div>
              <div className={classes.sectionMobile}>
                <IconButton aria-label="show more" aria-controls="mobileMenu" aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit"><i className="fas fa-ellipsis-v"></i></IconButton>
              </div>
            </Toolbar>
          </AppBar>
          {renderMobileMenu}
        </div>
    )
}

Navibar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStatetoProps = state => ({
  auth: state.auth
});

export default connect(mapStatetoProps, { logout })(Navibar);