import React from 'react';
import './FilterOnCategory.css'

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
                                <img key={index} src={show.image.medium} alt={show.name} />
                            ))}
                        </div>
                    </article>
    );
};