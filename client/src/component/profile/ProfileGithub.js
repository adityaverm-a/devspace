import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { getUserRepos } from '../../actions/profile';

const ProfileGithub = ({ repos, getUserRepos, username }) => {
    useEffect(() => {
        getUserRepos(username);
    }, [getUserRepos, username]);

    return (
        <div className='profile-github'>
            {repos!==null && (<h2 className='my-1'>Github Repos</h2>)}
            {repos===null ? <Spinner/> : (
                repos.map(repo => (
                    <div key={repo._id} className='repo p-1 my-1'>
                        <div>
                            <h4><a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a></h4>
                            <p>{repo.description}</p>
                        </div>
                        <div>
                            <ul>
                                <li className='badge badge-primary'>Stars: {repo.stargazers_count}</li>
                                <li className='badge badge-dark'>Watchers: {repo.watchers_count}</li>
                                <li className='badge badge-light'>Forks: {repo.forks_count}</li>
                            </ul>
                        </div>
                    </div>
                ))
            ) }
        </div>
    )
}

ProfileGithub.propTypes = {
    repos: PropTypes.array.isRequired,
    username: PropTypes.string.isRequired,
    getUserRepos: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    repos: state.profile.repos
})

export default connect(mapStateToProps, { getUserRepos })(ProfileGithub);
