import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Home.css'
import {FilterShows} from "../../components/FilterOnCategory/FilterShows";

export function Home() {

    const [apiReturn, setApiReturn] = useState([]);

    useEffect(() => {
        async function fetchData(){
            try {
                axios.get("https://api.tvmaze.com/shows")
                    .then(response => {
                        setApiReturn(response.data)
                    })
            } catch(e) {
                console.error(e)
                alert('Failed to load! Please try again in 30 seconds, if it still fails the API might be down. Sorry for any inconvenience! Please try again tomorrow.')
            }
        }
        fetchData();
    }, [])


    return (
        <section>
            {apiReturn.length>1 ?
                <div className="homePage">
                    <FilterShows apiResult = {apiReturn} category="Action"/>
                    <FilterShows apiResult = {apiReturn} category="Comedy"/>
                    <FilterShows apiResult = {apiReturn} category="Anime"/>
                    <FilterShows apiResult = {apiReturn} category="Science-Fiction"/>
                    <FilterShows apiResult = {apiReturn} category="Horror"/>
                    <FilterShows apiResult = {apiReturn} category="Adventure"/>
                    <FilterShows apiResult = {apiReturn} category="Thriller"/>
                    <FilterShows apiResult = {apiReturn} category="Espionage"/>
                    <FilterShows apiResult = {apiReturn} category="Drama"/>
                    <FilterShows apiResult = {apiReturn} category="Mystery"/>
                </div>
                :
                <p>Loading ...</p>
            }
        </section>
    );
}