// Using what you’ve learned this week, create a page of an application that enables 
//users to vote and leave reviews on movies.
// You should include at least the following components: 
// //NOTE FOR DEZI: CSS ANIMATIONS
// MovieList: a container for all the Movie components and their data.

import React from 'react'
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Col, Row, Button, Form, Card } from "react-bootstrap";

export default function MovieList() {
    const [clicked, setClicked] = useState(false);
    const [stars, setStars] = useState(null);
    const [review, setReview] = useState("");
    // const [reviews, setReviews] = useState([]);


    const movieList = [
        {
            title: "Ferris Bueller's Day Off",
            poster: "https://upload.wikimedia.org/wikipedia/en/9/9b/Ferris_Bueller%27s_Day_Off.jpg",
            rating: "PG-13",
            runTime: "1h 38m",
            reviews: [
                {
                    starValue: null,
                    reviewText: ""
                }
            ]
        },
        {
            title: "Zootopia",
            poster: "https://lumiere-a.akamaihd.net/v1/images/movie_poster_zootopia_866a1bf2.jpeg",
            rating: "PG",
            runTime: "1h 48m",
            reviews: [
                {
                    starValue: null,
                    reviewText: ""
                }
            ]
        },
        {
            title: "Matilda: The Musical",
            poster: "https://static.wikia.nocookie.net/international-entertainment-project/images/2/2b/Matilda_the_Musical_-_poster.jpg/revision/latest?cb=20230303195341",
            rating: "PG",
            runTime: "1h 57m",
            reviews: [
                {
                    starValue: null,
                    reviewText: ""
                }
            ]
        },
        {
            title: "Blade Runner",
            poster: "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
            rating: "R",
            runTime: "1h 50m",
            reviews: [
                {
                    starValue: null,
                    reviewText: ""
                }
            ]
        },
        {
            title: "Serenity",
            poster: "https://m.media-amazon.com/images/M/MV5BMTc5YjQ0MGQtOTdjZS00OGZhLTk1ZGItMThjOGFiZmMxYWRjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
            rating: "PG-13",
            runTime: "1h 59m",
            reviews: [
                {
                    starValue: null,
                    reviewText: ""
                }
            ]
        },
        {
            title: "The Fifth Element",
            poster: "https://m.media-amazon.com/images/M/MV5BZWFjYmZmZGQtYzg4YS00ZGE5LTgwYzAtZmQwZjQ2NDliMGVmXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_FMjpg_UX1000_.jpg",
            rating: "PG-13",
            runTime: "1h 53m",
            reviews: [
                {
                    starValue: null,
                    reviewText: ""
                }
            ]
        },
        {
            title: "Sonic The Hedgehog",
            poster: "https://upload.wikimedia.org/wikipedia/en/4/45/Sonic_the_Hedgehog_film_poster.jpg",
            rating: "PG",
            runTime: "1h 38m",
            reviews: [
                {
                    starValue: null,
                    reviewText: ""
                }
            ]
        },
        {
            title: "The Phantom of The Opera",
            poster: "https://m.media-amazon.com/images/M/MV5BNDczNzg4OTM3MV5BMl5BanBnXkFtZTcwOTQzMTEzMw@@._V1_FMjpg_UX1000_.jpg",
            rating: "PG-13",
            runTime: "2h 23m",
            reviews: [
                {
                    starValue: null,
                    reviewText: ""
                }
            ]
        },
        {
            title: "Hook",
            poster: "https://upload.wikimedia.org/wikipedia/en/0/0e/Hook_poster_transparent.png",
            rating: "PG",
            runTime: "2h 22m",
            reviews: [
                {
                    starValue: null,
                    reviewText: ""
                }
            ]
        },
        {
            title: "Clue",
            poster: "https://m.media-amazon.com/images/M/MV5BM2VlNTE1ZmMtOTAyNS00ODYwLWFmY2MtZWEzOTE2YjE1NDE2XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg",
            rating: "PG",
            runTime: "1h 37m",
            reviews: [
                {
                    starValue: null,
                    reviewText: ""
                }
            ]
        },
        {
            title: "Rocky Horror Picture Show",
            poster: "https://m.media-amazon.com/images/M/MV5BOGIzYjM3YzMtMjk5ZS00NDY2LTllMjEtNjYwZjhmMDNhMDBkXkEyXkFqcGdeQXVyODUzMjQxMTA@._V1_FMjpg_UX1000_.jpg",
            rating: "R",
            runTime: "1h 38m",
            reviews: [
                {
                    starValue: null,
                    reviewText: ""
                }
            ]
        },
        {
            title: "The Fast and The Furious",
            poster: "https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
            rating: "PG-13",
            runTime: "1h 46m",
            reviews: [
                {
                    starValue: null,
                    reviewText: ""
                }
            ]
        }
    ]

    const onMouseOver = (rating) => {
        if (clicked) return;
        [...Array(rating)].map((star, j) => {
          document.querySelector(`#star-${j + 1}`).classList.replace("unStar", "star")
        })
      };
      const onMouseOut = (rating) => {
        if (clicked) return;
        [...Array(rating)].map((star, j) => {
          document.querySelector(`#star-${j + 1}`).classList.replace("star", "unStar")
        })
      };
      const onClick = (rating) => {
        setClicked(true);
        setStars(rating);
        //reset stars
        [...Array(5)].map((star, j) => {
          document.querySelector(`#star-${j + 1}`).classList.replace("star", "unStar")
        });
        //highlight
        [...Array(rating)].map((star, j) => {
          document.querySelector(`#star-${j + 1}`).classList.replace("unStar", "star")
        })
      };
      const resetForm = (e) => {
        e.preventDefault();
        [...Array(5)].map((star, j) => {
          document.querySelector(`#star-${j + 1}`).classList.replace("star", "unStar")
        });
        setStars(1);
        setReview("");
        setClicked(false);
      };
      const submitReview = (e, index) => {
        e.preventDefault();
        movieList[index].reviews.push(
            {
                starValue: stars,
                reviewText: review
            }
        );
            console.log(movieList[index].reviews);
    
        resetForm(e);
      };




    return (
        <div>
            {movieList.map((movie, i) => {
                return (
                <div>
                    <h1>{movieList[i].title}</h1>
                    <img src={movieList[i].poster} alt="" />
                    <h2>{movieList[i].rating}</h2>
                    <h3>{movieList[i].runTime}</h3>
                    <Container fluid className='App text-light text-center'>
                    <Col md={{ span: 6, offset: 3}}>
                        <Row className='mt-5' >
                            <Col>
                                {[...Array(5)].map((star, j) => {
                                return (
                                <FaStar 
                                    key={j}
                                    className='unStar display-4'
                                    onMouseOver={(e) => onMouseOver(j + 1)}
                                    onMouseOut={(e) => onMouseOut(j + 1)}
                                    onClick={(e) => onClick(j + 1)}
                                    id={`star-${j + 1}`}
                                    />
                                    );
                                })}
                            </Col>
                        </Row>
                        <Row className='mt-5' >
                            <Col>
                                <Form.Group>
                                <Form.Control
                                    key="reviewForm" 
                                    as="textarea" 
                                    rows={3} value={review} 
                                    onChange={(e) => setReview(e.target.value)} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col>
                                <Button 
                                key="resetButton"
                                variant="warning" 
                                onClick={(e) => resetForm(e)}>Reset</Button>
                                <Button 
                                key= "submitButton"
                                variant='success'
                                disabled={review == ""} 
                                onClick={(e) => submitReview(e, i)}>Submit</Button>
                            </Col>
                        </Row>
                    </Col>
                </Container>    
                </div>
                )}
            )
            }
        </div>
    )
}


