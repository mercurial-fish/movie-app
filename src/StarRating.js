// Stars: a one to five-star rating component that allows users to rate something 
//(movies in this case, but remember that components are reusable, so you could use it elsewhere!)
import { useState } from "react"
import React from 'react'
import { FaStar } from "react-icons/fa"


export default function StarRating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [newReview, setNewReview] = useState("");

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={100}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)} 
            />
          </label>
        )
      })}
  </div>
  )

}

// function handleSubmit(ratingValue, text) {
//   setRating(ratingValue);
//   movieList[i].reviews.starRating.push(ratingValue)
// }


/* when submit is hit, the rating value would then need to be rendered into that number of stars. They would be
smaller and gold. and they would be above the text review. the rating value (1-5) would need to be pushed to the array
along with the review. From the array will come the rendering of the new stars and review text */
