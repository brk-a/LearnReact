import axios from "axios";

export const baseUrl = process.env.REACT_RAPID_API_URL

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': process.env.REACT_RAPID_API_KEY,
            'X-RapidAPI-Host': process.env.REACT_RAPID_API_HOST 
        }
    })

    return data
}