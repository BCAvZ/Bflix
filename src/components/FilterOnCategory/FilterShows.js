import React from 'react';
import {NavLink} from "react-router-dom";

// This component demands an array as property apiResult however category and minimumRating ( the filters ) are both
// optional. The default minimumRating is quite high to keep the content on the main page of high quality.
// It returns an image per object that passes the filters which are contained in a NavLink to the detail page and
// the name of the category in a p element a single time.
// Essentially clickable images sorted in a category for easy navigation of the end user.

export function FilterShows({
                                apiResult,
                                category = null,
                                minimumRating = 8
}) {

    const filteredArray = apiResult.filter(show => {
        let ratingCheck = show.rating && show.rating.average >= minimumRating;

        let categoryCheck = true;
        if (category) {
            categoryCheck = show.genres && show.genres.some(genre => genre === category)
        }

        return ratingCheck && categoryCheck
    });


    console.log(minimumRating)

    return (
                    <article>
                        { category != null &&
                            <p>{category}</p>
                        }
                        <div className="categoryWrapper">
                            {filteredArray.map((show, index) => (
                                <NavLink to={`/${show.id}`} key={index}>
                                    { show.image ? <img src={show.image.medium} alt={show.name} /> : <p> No image available of {show.name} </p>}
                                </NavLink>
                            ))}
                        </div>
                    </article>
    );
}