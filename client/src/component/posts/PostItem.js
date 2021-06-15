import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({ auth, post: { _id, text, name, avatar, user, likes, comments, date }, addLike, removeLike, deletePost, showButtons }) => {
    return (
        <div className="post p-1 my-1">
          <div className='pt-1'>
            <Link to={`/profile/${user}`}>
              <img className="round-img" src={avatar} alt="" />
              <h4>{name}</h4>
            </Link>
          </div>
          <div>
            <p className="mb-1">{text}</p>
             <p className="post-date">
                Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
            </p>
            { showButtons && <div>
              <button onClick={() => addLike(_id)} type="button" className="btn btn-light">
                <i className="fas fa-thumbs-up"></i>
                <span>{ likes.length > 0 && (<span>{likes.length}</span>) }</span>
              </button>
              <button onClick={() => removeLike(_id)} type="button" className="btn btn-light">
                <i className="fas fa-thumbs-down"></i>
              </button>
              <Link to={`/posts/${_id}`} className="btn btn-primary">
                Discussion { comments.length > 0 && (<span className='comment-count'>{comments.length}</span>) }
              </Link>
              {!auth.loading && user === auth.user._id && (
                  <button onClick={e => deletePost(_id)} type="button" className="btn btn-danger">
                      <i class="fas fa-times"></i>
                  </button>
              )}
            </div>} 
          </div>
        </div>
    )
}

PostItem.defaultProps = {
  showButtons: true
}

PostItem.propTypes = {
    auth: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(PostItem);
