import React from 'react';
import { makeStyles } from '@material-ui/core';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      margin: theme.spacing(2),
    },
  },
}))


const AlertUI = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
              <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              />
        </div>
    )
}


export default AlertUI;