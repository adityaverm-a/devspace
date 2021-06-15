import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';


const guestLinks = (props) => {
    const { history } = props;

    const handleNavClicks = (pageURL) => {
        history.push(pageURL);
      }

    return (
        <div>
            <Button color='inherit' onClick={() => handleNavClicks('/profiles')} style={{ fontFamily: ['Montserrat','sans-serif'].join(','),}}>Developers</Button>
            <Button color='inherit' onClick={() => handleNavClicks('/register')} style={{ fontFamily: ['Montserrat','sans-serif'].join(','),}}>Register</Button>
            <Button color='inherit' onClick={() => handleNavClicks('/login')} style={{ fontFamily: ['Montserrat','sans-serif'].join(','),}}>Login</Button>
        </div>
    )
}

export default withRouter(guestLinks);
