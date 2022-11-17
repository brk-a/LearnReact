import axios from "axios";

export const baseUrl = process.env.REACT_RAPID_API_URL

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        // params: {
        //     agencySlug: 'patriot-real-estate-7737',
        //     sort: 'price-asc',
        // },
        headers: {
            'x-rapidapi-key': process.env.REACT_RAPID_API_KEY,
            'x-rapidapi-host': process.env.REACT_RAPID_API_HOST 
        }
    })

    return data
}