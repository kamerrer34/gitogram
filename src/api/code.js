import { makeRequest } from './requests'

export const getCode = ({ clientId, clientSecret, code }) => {
    return makeRequest({
        url: 'https://webdev-api.loftschool.com/github',
        method: 'POST',
        data: {
            clientId, clientSecret, code
        },
        headers: {
            'Content-Type': 'application/json'
        }
    })
}