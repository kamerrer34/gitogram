import { makeRequest } from './requests'

export const getIssues = ({ owner, repo }) => {
    return makeRequest({
        url: `https://api.github.com/repos/${owner}/${repo}/issues`,
        headers: {
            Authorization: `token ${localStorage.getItem('token')}`
        }
    })
}