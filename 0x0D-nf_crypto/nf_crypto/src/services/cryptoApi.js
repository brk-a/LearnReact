import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Host': process.env.REACT_RAPID_API_HOST,
    'X-RapidAPI-Key': process.env.REACT_RAPID_API_KEY
}

const baseUrl = process.env.REACT_RAPID_API_BASE_URL

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    // prepareHeaders: (cryptoApiHeaders, { getState }) => {
    //     const token = getState().auth.token
    //     if (token) {
    //         cryptoApiHeaders.set('authorization', `Bearer ${token}`)
    //       }
      
    //       return cryptoApiHeaders
    //     },
    endpoints: (builder) => ({
        getCryptos: builder.query({query: () => createRequest('/coins')})
    })
})

export const {
    useGetCryptosQuery,
} = cryptoApi