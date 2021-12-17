import { makeRequest } from './requests'

export const getRepos = () => {
    return makeRequest({
        url: `https://api.github.com/users/${localStorage.getItem('login')}/repos`,
        headers: {
            Authorization: `token ${localStorage.getItem('token')}`
        }
    })
}