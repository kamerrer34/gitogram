import { makeRequest } from './requests'

export const getStarred = () => {
    return makeRequest({
        url: 'https://api.github.com/user/starred',
        headers: {
            Authorization: `token ${localStorage.getItem('token')}`
        }
    })
}