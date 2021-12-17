import { makeRequest } from './requests'

export const getUser = () => {
    return makeRequest({
        url: 'https://api.github.com/user',
        headers: {
            Authorization: `token ${localStorage.getItem('token')}`
        }
    })
}