import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addComment } from '../../actions/post';
import { Button, TextField } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(3),
    },
    dashbtn: {
        marginTop: '10px',
        '@media (max-width:600px)': {
            fontSize: '0.775rem',
        },
    },
  }));

const CommentForm = ({ addComment, postId }) => {
    const classes = useStyles();

    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        addComment(postId, {text});
        setText('');
    }

    return (
        <div className="post-form">
            <div className="bg-primary p">
                <h3>Leave a Comment...</h3>
            </div>
            <form className={classes.form} onSubmit={e => onSubmit(e)}>
                <TextField 
                    variant='outlined'
                    fullWidth
                    multiline
                    rows={5}
                    id="outlined-multiline-static"
                    placeholder="Add a comment"
                    name="text"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <Button type='submit' variant='contained' className={classes.dashbtn} color='primary' style={{ fontFamily: ['Montserrat','sans-serif'].join(',')}}>Post</Button>
            </form>
        </div>
    )
}

CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired,
}

export default connect(null, { addComment })(CommentForm);
