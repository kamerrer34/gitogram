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
    console.log(user, method);
    return makeRequest({
        url: `/user/following/${user}`,
        method: method,
        data: {
            username: user
        },
        headers: {
            Authorization: `token ${localStorage.getItem('token')}`
        }
    })
}
