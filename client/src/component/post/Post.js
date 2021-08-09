import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPost } from '../../actions/post';
import Spinner from '../layout/Spinner';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const Post = ({ getPost, post: { post, loading }, match, history  }) => {
    

    useEffect(() => {
        getPost(match.params.id);
    }, [getPost, match.params.id]);

    return loading || post === null ? (<Spinner />) : (<div className='dash'>
        <Button variant='outlined' color='primary' style={{ fontFamily: ['Montserrat','sans-serif'].join(',')}} onClick={() => history.push('/posts')}>Go Back</Button>
        <PostItem post={post} showButtons={false} />
        <CommentForm postId={post._id} />
        <div>
            {post.comments.map(comment => (
                <CommentItem key={comment._id} comment={comment} postId={post._id} />
            ))}
        </div>
    </div>)
}

Post.propTypes = {
    post: PropTypes.object.isRequired,
    getPost: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, { getPost })(withRouter(Post));
