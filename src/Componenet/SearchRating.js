import React, { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';

function SearchRating({searchByrating}) {
    const [newRating, setnewRating] = useState("1");
    let onStarClick=(nextValue) =>
    {
        setnewRating(nextValue);
        console.log(nextValue);
     searchByrating(nextValue);
    // console.log(newRating)
      }
    return (
       
            <div> 
        <StarRatingComponent 
          name="rate1" 
          starCount={7}
          value={newRating}
          onStarClick={onStarClick}
        />
        </div>
       
    )
}

export default SearchRating
