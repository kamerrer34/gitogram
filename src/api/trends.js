import { makeRequest } from './requests'

const addStartZero = (val) => val < 10 ? `0${val}` : val

export const getTrends = () => {
    const params = new URLSearchParams();
    const weekMs = 7 * 24 * 60 * 60 * 1000;
    const weekAgo = new Date(Date.now() - weekMs);
    const formatDate = [
        weekAgo.getFullYear(),
        addStartZero(weekAgo.getMonth() + 1),
        addStartZero(weekAgo.getDate())
    ].join('-');

    params.append('order', 'desc');
    params.append('sort', 'stars');
    params.append('per_page', '10');
    params.append('q', `language:javascript created:>${formatDate}`);

    return makeRequest({
        url: `/search/repositories?${params}`
    });
}