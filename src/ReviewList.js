import React from 'react'
import Review from './Review'

export default function ReviewList({individualMovieReviews}) {

  return (
    <div className='individual-movie-reviews'>
      {individualMovieReviews.map((individualReview, index) => <Review individualReview={individualReview}/>)}
    </div>
  )
}
