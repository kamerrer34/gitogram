import { makeRequest } from './requests'

export const getUser = () => {
    return makeRequest({
        url: '/user',
        headers: {
            Authorization: `token ${localStorage.getItem('token')}`
        }
    })
}