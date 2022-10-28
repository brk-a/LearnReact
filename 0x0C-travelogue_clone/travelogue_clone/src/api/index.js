import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

// const options = {
//   params: {
//     bl_latitude: '11.847676',
//     tr_latitude: '12.838442',
//     bl_longitude: '109.095887',
//     tr_longitude: '109.149359',
//     limit: '',
//     currency: 'USD',
//     open_now: 'false',
//     lunit: 'km',
//     lang: 'en_GB'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'b645d2d559mshfaba903111cc2c9p155c10jsn43dc6a6cfe2a',
//     'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

export const getPlacesData = async (sw, ne) => {
    try {
        const  {data: {data}} = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                currency: 'KES',
                open_now: 'false',
                lunit: 'km',
                lang: 'en_GB'
              },
              headers: {
                'X-RapidAPI-Key': 'b645d2d559mshfaba903111cc2c9p155c10jsn43dc6a6cfe2a',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
              }
        })
        return data
    } catch (error) {
        console.log(error)
    }
}