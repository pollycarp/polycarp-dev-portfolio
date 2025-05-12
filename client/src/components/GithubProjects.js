//import React, { useEffect, useState } from 'react';
//import axios from 'axios';
//
//const GithubProjects = ({ username }) => {
//  const [repos, setRepos] = useState([]);
//
//  useEffect(() => {
//    axios.get(`https://api.github.com/users/${username}/repos?sort=updated`)
//      .then((res) => {
//        setRepos(res.data);
//      })
//      .catch((err) => {
//        console.error('GitHub API error:', err);
//      });
//  }, [username]);
//
//  return (
//    <div className="row">
//      {repos.slice(0, 6).map((repo) => (
//        <div className="col-md-4 mb-4" key={repo.id}>
//          <div className="card h-100 shadow">
//            <div className="card-body">
//              <h5 className="card-title">{repo.name}</h5>
//              <p className="card-text text-muted">
//                {repo.description || 'No description available.'}
//              </p>
//              <span className="badge bg-primary me-2">{repo.language || 'N/A'}</span>
//              <a href={repo.html_url} className="btn btn-sm btn-outline-dark mt-2" target="_blank" rel="noopener noreferrer">
//                View on GitHub
//              </a>
//            </div>
//          </div>
//        </div>
//      ))}
//    </div>
//  );
//};
//
//export default GithubProjects;
