import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Home.css'

export function Home() {

    const [homePageContent, setHomePageContent] = useState({});

    useEffect(() => {
        async function fetchData(){
            try {
                axios.get("https://api.tvmaze.com/shows?page=0")
                    .then(response => {
                        setHomePageContent(response.data)
                        console.log(response.data)
                    })
            } catch(e) {
                console.error(e)
                alert('Failed to load series! Please try again in 30 seconds, if it still fails the API might be down. Sorry for any inconvience! Please try again tomorrow.')
            }
        }
        fetchData();
    }, [])

    return (
        <section>
            <article>
                <p>Action</p>
                <div className="categoryWrapper">
                    <img src={homePageContent[0].image.medium} alt={homePageContent[0].name}/>
                    <img src={homePageContent[1].image.medium} alt={homePageContent[0].name}/>
                </div>

            </article>







        </section>
    );
}