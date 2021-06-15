import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { removeComment } from '../../actions/post';
import Moment from 'react-moment';

const CommentItem = ({ auth, postId, comment: { _id, text, name, avatar, user, date } }) => {
    return (
        <div className="comment-item p-1 my-1">
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
            { !auth.loading && user === auth.user._id && (
              <button onClick={() => removeComment(postId, _id)} type="button" className="btn btn-danger">
                <i className="fas fa-trash"></i>
              </button>
            )} 
          </div>
        </div>
    )
}

CommentItem.propTypes = {
    auth: PropTypes.object.isRequired,
    postId: PropTypes.number.isRequired,
    comment: PropTypes.object.isRequired,
    removeComment: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { removeComment })(CommentItem);
