import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '3d538aaecemsh5e888af873c1171p15097djsnab1b52004330',
//       'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '3d538aaecemsh5e888af873c1171p15097djsnab1b52004330')
            return headers
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: () => ('/charts/world')}),
    }),
})

export const {
    useGetTopChartsQuery,
} = shazamCoreApi