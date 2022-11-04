import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Host': process.env.REACT_RAPID_API_HOST,
    'X-RapidAPI-Key': process.env.REACT_RAPID_API_KEY
}

const baseUrl = process.env.REACT_RAPID_API_BASE_URL

const createRequest = (url) => ({url, headers: cryptoApiHeaders})
// const createRequest = (url) => url

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({query: () => createRequest('/coins')})
    })
})

export const {
    useGetCryptosQuery,
} = cryptoApi