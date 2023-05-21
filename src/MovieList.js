import React, {useState} from 'react';
import Movie from './Movie';
import ReviewForm from './ReviewForm';



export default function MovieList({movies}) {
  
  function addReview() {
    
  }
  return (
    <div className='movie-container'>
        {movies.map((movie, index) => (
          <div key={index}>
          <Movie 
            movie={movie}
          />
          <ReviewForm 
            listOfReviews={movie.reviews} />
          </div>
        ))}
    </div>
  )
}



