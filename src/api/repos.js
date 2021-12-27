import { makeRequest } from './requests'

export const getRepos = () => {
    return makeRequest({
        url: `/users/${localStorage.getItem('login')}/repos`,
        headers: {
            Authorization: `token ${localStorage.getItem('token')}`
        }
    })
}

export const getReadme = ({ owner, repo }) => {
    return makeRequest({
        url: `/repos/${owner}/${repo}/readme`,
        headers: {
            accept: 'application/vnd.github.v3.html+json'
        }
    })
}

export const getIssues = ({ owner, repo }) => {
    return makeRequest({
        url: `/repos/${owner}/${repo}/issues`,
        headers: {
            Authorization: `token ${localStorage.getItem('token')}`
        }
    })
}
