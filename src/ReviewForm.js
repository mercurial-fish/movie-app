// ReviewForm: a form at the bottom of a Movie component that allows users to leave reviews. 
//When submitted, the review should be added to the movie. All this data can be stored in an array, 
//no networking or database needed for this assignment.

import React from 'react'
import StarRating from './StarRating'

export default function ReviewForm() {
  return (
    <div>
        <form>
            <StarRating />
            <textarea />
            <button>Submit</button>
            
        </form>
    </div>
  )
}

/*
The value of the input taken in the form must be pushed to the array in the movieList object
*/