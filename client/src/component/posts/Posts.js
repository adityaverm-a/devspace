import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { getPosts } from '../../actions/post';
import PostItem from './PostItem';
import PostForm from './PostForm';

const Posts = ({ getPosts, post: { posts, loading } }) => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);

    return (
        <div className='dash'>
            { loading ? <Spinner /> : <Fragment>
                <h1>Posts</h1>
                <p className="lead"><i className="fas fa-user"></i> Welcome to the community!</p>
                <PostForm />
                <div className='posts'>
                    { posts.map(post => (
                        <PostItem key={post._id} post={post} />
                    )) }
                </div>
            </Fragment> }
        </div>
    )
}

Posts.propTypes = {
    post: PropTypes.object.isRequired,
    getPosts: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, { getPosts })(Posts);
