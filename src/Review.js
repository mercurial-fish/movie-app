import React from 'react'
import { Rating } from '@mui/material'

export default function Review({individualReview}) {
 
    if (individualReview.stars === null) {
        return (
            <div></div>
        )
    } else {
        return (
            <>
            <Rating 
                readOnly
                value={individualReview.stars} />
            <div>{individualReview.review}</div>
            </>
        )
    }
}
