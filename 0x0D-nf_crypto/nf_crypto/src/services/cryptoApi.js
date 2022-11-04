import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query'

const cryptoApiHeaders = {
    'X-rapidapi-host': process.env.REACT_RAPID_API_HOST,
    'X-rapidapi-key': process.env.REACT_RAPID_API_KEY
}

const baseUrl = process.env.REACT_RAPID_API_BASE_URL

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({query: () => createRequest('/exchanges')})
    })
})