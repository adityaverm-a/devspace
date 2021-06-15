import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';


const authLinks = (props) => {
    const { history } = props;

    const handleNavClicks = (pageURL) => {
        history.push(pageURL);
      }

    return (
        <div>
            <Button color='inherit' onClick={() => handleNavClicks('/posts')} style={{ fontFamily: ['Montserrat','sans-serif'].join(','),}}>Posts</Button>
            <Button color='inherit' onClick={() => handleNavClicks('/dashboard')} style={{ fontFamily: ['Montserrat','sans-serif'].join(','),}}>Dashboard</Button>
            <Button color='inherit' onClick={() => handleNavClicks('/profiles')} style={{ fontFamily: ['Montserrat','sans-serif'].join(','),}}>Developers</Button>
        </div>
    )
}

export default withRouter(authLinks);
