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
    return makeRequest({
        url: `/user/starred/${owner}/${repo}`,
        method: method,
        data: {
            owner: owner,
            repo: repo,
        },
        headers: {
            Authorization: `token ${localStorage.getItem('token')}`
        }
    })
}