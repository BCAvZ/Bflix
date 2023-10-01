import React, {useEffect, useState} from 'react';
import "./DetailPage.css"
import axios from "axios";
import {useParams} from "react-router-dom";


export function DetailPage() {

    const [apiReturnShow, setApiReturnShow] = useState({});
    const [apiReturnSeasons, setApiReturnSeasons] = useState({})
    const {id} = useParams();

    function reverseDate(str) {
        return str?.split('-').reverse().join('-');
    }

    useEffect(() => {
        async function fetchData(){
            try {
                axios.get(`https://api.tvmaze.com/shows/${id}`)
                    .then(response => {
                        setApiReturnShow(response.data)
                    })
            } catch(e) {
                console.error(e)
                alert('Failed to load! Please try again in 30 seconds, if it still fails the API might be down. Sorry for any inconvenience! Please try again tomorrow.')
            }
        }
        fetchData();
    }, [id])

    useEffect(() => {
        async function fetchData(){
            try {
                axios.get(`https://api.tvmaze.com/shows/${id}/seasons`)
                    .then(response => {
                        setApiReturnSeasons(response.data)
                    })
            } catch(e) {
                console.error(e)
                alert('Failed to load! Please try again in 30 seconds, if it still fails the API might be down. Sorry for any inconvenience! Please try again tomorrow.')
            }
        }
        fetchData();
    }, [id])


    return (
        <section>
            {apiReturnShow.name && apiReturnSeasons.length>0 ?
                <article>
                    <p>{apiReturnShow.category}</p>
                    <div className="categoryWrapper">
                        { apiReturnShow.image ? <img src={apiReturnShow.image.medium} alt={apiReturnShow.name} /> : <p>No image available of {apiReturnShow.name}</p>}
                        <div className="detailCard">
                            <h4>Genres</h4>
                            {apiReturnShow.genres + ''}
                            <h4>Premiered</h4>
                            {reverseDate(apiReturnShow.premiered)}
                            <h4>Ended</h4>
                            {reverseDate(apiReturnShow.ended)}
                            <h4>Rating</h4>
                            {apiReturnShow.rating.average}
                            <h4>Official site</h4>
                            <a href={apiReturnShow.officialSite}>Click here!</a>
                        </div>
                    </div>
                    <h3>{apiReturnShow.name}</h3>
                    <div dangerouslySetInnerHTML={{ __html: apiReturnShow.summary }} className="summary" />
                    <div className="episodes">
                        {apiReturnSeasons.map((show) => (
                            <div key={show.number}>
                                <h4>Season {show.number}</h4>
                                <div
                                    dangerouslySetInnerHTML={{ __html: show.summary }}
                                    className="summary"
                                />
                                <p>This season has {show.episodeOrder} episodes.</p>
                            </div>
                        ))}
                    </div>
                </article>
             :
            <p>Loading ...</p>
            }
        </section>
    );
}