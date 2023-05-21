// ReviewForm: a form at the bottom of a Movie component that allows users to leave reviews. 
//When submitted, the review should be added to the movie. All this data can be stored in an array, 
//no networking or database needed for this assignment.

import React, { useState } from 'react';
import { Container, Col, Row, Button, Form, Accordion } from "react-bootstrap";
import { Rating } from '@mui/material';
import ReviewList from './ReviewList';

export default function ReviewForm({listOfReviews}) {
  const [review, setReview] = useState("");
  const [value, setValue] = useState(null);
  const [reviews, setReviews] = useState(listOfReviews);


  const submitReview = (e) => {
    e.preventDefault();
    const newReview = {
      stars: value,
      review: review,
    };

    setReviews([...reviews, newReview]);
    setValue(null);
    setReview("");
  };
  
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
          <Accordion.Header>Reviews</Accordion.Header>
                 <Accordion.Body>
                 <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                  <Form.Group>
                  <Form.Control
                      key="reviewForm" 
                      as="textarea" 
                      rows={3} value={review} 
                      onChange={(e) => setReview(e.target.value)} />
                  </Form.Group>
                    <Button 
                    key= "submitButton"
                    variant='success'
                    disabled={review === ""} 
                    onClick={(e) => submitReview(e)}>Submit</Button>
                <ReviewList individualMovieReviews={reviews}/>
                </Accordion.Body>
          </Accordion.Item>
    </Accordion>
  )
}

/*
The value of the input taken in the form must be pushed to the array in the movieList object
*/