// import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";


const AroundYou = () => {
    const [country, setCountry] = useState('')
    const [loading, setLoading] = useState(true)
    const {activeSong, isPlaying} = useSelector((state) => (
        state.player
    ))
    console.log(country)
    useEffect(() => {
        axios.get(`https://api.geoapify.com/v1/ipinfo?&apiKey=f0690c74758f49a1b446c3e6efafb3e8`)
            .then((res) => setCountry(res?.data?.location?.country))
            // .then((res) => res?.country?.iso_code)
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [country])
    
    return(
        <div></div>
    )
}

export default AroundYou
