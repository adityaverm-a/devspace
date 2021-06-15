import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Alert from '@material-ui/lab/Alert';
import { Collapse, IconButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      margin: theme.spacing(2),
    },
  },
}))


const AlertUI = ({ alerts }) => {
    const classes = useStyles();

    const [open, setOpen] = useState(true);

    return (
        <div className={classes.root}>
          <Collapse in={open} >
            {alerts.map((alert) => (
              <Alert
                style={{ marginBottom: 10 }}
                key={alert.id}
                severity={alert.alertType}
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <i className="fas fa-times"></i>
                    </IconButton>
                }
              >
                {alert.msg}
              </Alert>
            ))}
          </Collapse>
        </div>
    )
}

AlertUI.propTypes = {
    alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    alerts: state.alert
})

export default connect(mapStateToProps, {})(AlertUI);