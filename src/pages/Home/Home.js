import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Home.css'
import {FilterOnCategory} from "../../components/FilterOnCategory/FilterOnCategory";

export function Home() {

    const [apiReturn, setApiReturn] = useState({});

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
                <>
                    <FilterOnCategory apiResult = {apiReturn} category="Action"/>
                    <FilterOnCategory apiResult = {apiReturn} category="Comedy"/>
                    <FilterOnCategory apiResult = {apiReturn} category="Anime"/>
                    <FilterOnCategory apiResult = {apiReturn} category="Science-Fiction"/>
                    <FilterOnCategory apiResult = {apiReturn} category="Horror"/>
                    <FilterOnCategory apiResult = {apiReturn} category="Thriller"/>
                    <FilterOnCategory apiResult = {apiReturn} category="Espionage"/>
                </>
                :
                <p>Loading ...</p>
            }
        </section>
    );
}