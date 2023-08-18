import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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

/** New instance 
 * 
 * import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://shazam-core7.p.rapidapi.com/search',
  params: {
    term: 'Sorry',
    limit: '10'
  },
  headers: {
    'X-RapidAPI-Key': 'b645d2d559mshfaba903111cc2c9p155c10jsn43dc6a6cfe2a',
    'X-RapidAPI-Host': 'shazam-core7.p.rapidapi.com'
  }
};

try {
    const response = await axios.request(options);
    console.log(response.data);
} catch (error) {
    console.error(error);
}
*/

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core7.p.rapidapi.com', //https://shazam-core.p.rapidapi.com/v1 -> previous
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'b645d2d559mshfaba903111cc2c9p155c10jsn43dc6a6cfe2a') //prev -> 'X-RapidAPI-Key', '3d538aaecemsh5e888af873c1171p15097djsnab1b52004330'
            return headers
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => ('/charts/get-top-songs-in-world') }), // prev -> '/charts/world'
        getSongDetails: builder.query({ query: ({ songid }) => (`/songs/get_details?id=${songid}`) }), // prev -> `/tracks/details?track_id=${songid}`
        getSongRelated: builder.query({ query: ({ songid }) => (`/songs/list-recommendations?id=${songid}`) }), // prev -> `/tracks/related?track_id=${songid}`
        getArtistDetails: builder.query({ query: (artistId) => (`/artist/get-details?id=${artistId}`) }), // prev ->`/artists/details?artist_id=${artistId}`
        getSongsByCountry: builder.query({ query: (countryCode) => `/charts/get-top-songs-in-country?country_code=${countryCode}` }), // prev ->`/charts/country?country_code=${countryCode}`
        getSongsByGenre: builder.query({ query: (genre) => `/charts/get-top-songs-in_world_by_genre?genre=${genre}` }), // `/charts/genre-world?genre_code=${genre}`
        getSongsBySearch: builder.query({ query: (searchTerm) => `/search?term=${searchTerm}` }), //prev -> `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`
    }),
})

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
    useGetSongsByGenreQuery,
    useGetSongsBySearchQuery,
} = shazamCoreApi