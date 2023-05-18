// Using what you’ve learned this week, create a page of an application that enables 
//users to vote and leave reviews on movies.
// You should include at least the following components: 
// //NOTE FOR DEZI: CSS ANIMATIONS
// MovieList: a container for all the Movie components and their data.
// Movie: a component that represents movie data (i.e. image, synopsis, rating, etc…)
// Stars: a one to five-star rating component that allows users to rate something 
//(movies in this case, but remember that components are reusable, so you could use it elsewhere!)
// ReviewList: a container inside of a Movie that houses Review components.
// Review: A text review a user can leave on a movie.
// ReviewForm: a form at the bottom of a Movie component that allows users to leave reviews. 
//When submitted, the review should be added to the movie. All this data can be stored in an array, 
//no networking or database needed for this assignment.

/*REVIEW - There is going to be a heading. Then there will be movies. Then we will need something that, for each movie,
there is going to be a 5 star check box. There will also be a review form and on submit, both the stars and the review
will be added to the movie
*/

/*
if these were classes, the first class would be the MovieList and it would
be an empty array for objects, which would be the movie
The next class would be movie. It would be made up of 

this.deck.push(new Card(face, value, suit))

this.reviews.push(new Review(stars, text))

movieList is the playerHand

the deck is the movie?

we didnt then just put the whole deck into the playerHand. It was split up
first. what needs to be manipulated between here and there?

how do the reviews get to the movie?
in this case I don't need to loop the data. I could have the data written as
an object with all the info and then just have the empty array. But then how
would i push the review into the empty array?

Ok I can push an object into an empty array without needing to pass some type
of prop or something. I can just have an empty array as an object. So... 

How about I write out a MovieList with all the functionality and then figure out how to
break it up?

*/

import React from 'react'
import { useState } from "react"
import { FaStar } from "react-icons/fa"

export default function MovieList() {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [review, setReview] = useState("");


    const movieList = [
        {
            title: "Ferris Bueller's Day Off",
            poster: "https://upload.wikimedia.org/wikipedia/en/9/9b/Ferris_Bueller%27s_Day_Off.jpg",
            rating: "PG-13",
            runTime: "1h 38m",
            reviews: [
                {
                    starValue: "",
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
                    starValue: "",
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
                    starValue: "",
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
                    starValue: "",
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
                    starValue: "",
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
                    starValue: "",
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
                    starValue: "",
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
                    starValue: "",
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
                    starValue: "",
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
                    starValue: "",
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
                    starValue: "",
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
                    starValue: "",
                    reviewText: ""
                }
            ]
        }
    ]

    function addReview(e, i) {
        e.preventDefault();

        movieList[i].reviews.starValue.push(rating);
        movieList[i].reviews.reviewText.push(review);

        return (
            <div>
                <h1>{movieList[i].title}</h1>
                <img src={movieList[i].poster} alt="" />
                <h2>{movieList[i].rating}</h2>
                <h3>{movieList[i].runTime}</h3>
                <div>
                    {[...Array(rating)].map(
                        <FaStar
                            color="#ffc107"
                            />
                    )}
                    <p>{movieList[i].reviews.reviewText}</p>
                </div>
            </div>
        )
    }


    return (
        <div>
            {movieList.map((movie, i) => (
                <div>
                    <h1>{movieList[i].title}</h1>
                    <img src={movieList[i].poster} alt="" />
                    <h2>{movieList[i].rating}</h2>
                    <h3>{movieList[i].runTime}</h3>
                    <form>
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
                        <textarea
                            onChange={(e) => setReview(e.target.value)} />
                        <button onClick={(e) => addReview(e)}>Submit</button>
                    </form>
                </div>
            ))}
        </div>
    )
}


