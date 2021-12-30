import { makeRequest } from './requests'

export const getStarred = () => {
    return makeRequest({
        url: '/user/starred',
        headers: {
            Authorization: `token ${localStorage.getItem('token')}`
        }
    })
}

export const follow = ({ owner, repo, method }) => {
    let data = {};
    if (method === 'PUT') {
        data = {
            owner: owner,
            repo: repo,
        }
    }
    return makeRequest({
        url: `/user/starred/${owner}/${repo}`,
        method: method,
        data: data,
        headers: {
            Authorization: `token ${localStorage.getItem('token')}`
        }
    })
}