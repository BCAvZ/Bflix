import React from 'react';
import './FilterOnCategory.css'
import {NavLink} from "react-router-dom";


export function FilterOnCategory({apiResult, category}) {

    const filteredArray = apiResult.filter(show =>
        show.rating.average >= 7 &&
        show.genres.some(genre => genre === category)
    );

    return (
                    <article>
                        <p>{category}</p>
                        <div className="categoryWrapper">
                            {filteredArray.map((show, index) => (
                                <NavLink to={`/${show.id}`} key={index}>
                                    <img src={show.image.medium} alt={show.name} />
                                </NavLink>
                            ))}
                        </div>
                    </article>
    );
};