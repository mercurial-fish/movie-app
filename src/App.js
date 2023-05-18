import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import MovieList from "./MovieList";

/*REVIEW - 
1. There is going to be a heading.
2. Then there will be a carousel of movie posters - MovieList
3. When you click on the poster, it will open up and show - Movie
  a. the name
  b. synopsis
  c. run time
  d. reviews - reviews
    i. Text and the star rating
  e. review form -ReviewForm, StarRating
    i. Form for entering text, button to submit, function to submit the star rating and text review to the movie/review?

 Then we will need something that, for each movie,
there is going to be a 5 star check box. There will also be a review form and on submit, both the stars and the review
will be added to the movie
*/



/*NOTE This is going to be an app that has the image, synopsis and rating */


function App() {

  return (
    <>

    <MovieList />
    </>
  );
}



export default App;
