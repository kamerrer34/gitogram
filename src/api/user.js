import { makeRequest } from './requests'

export const getUser = () => {
    return makeRequest({
        url: '/user',
        headers: {
            Authorization: `token ${localStorage.getItem('token')}`
        }
    })
}

export const getFollowing = () => {
    return makeRequest({
        url: `/users/${localStorage.getItem('login')}/following`,
        headers: {
            Authorization: `token ${localStorage.getItem('token')}`
        }
    })
}

export const follow = ({ user, method }) => {
    let data = {};
    if (method === 'PUT') {
        data = {
            username: user
        }
    }
    return makeRequest({
        url: `/user/following/${user}`,
        method: method,
        data: data,
        headers: {
            Authorization: `token ${localStorage.getItem('token')}`
        }
    })
}
