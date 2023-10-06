# Movie Search

Create a basic routing for a movie search and storage application. Preview working application

For the backend, use themoviedb.org API(https://www.themoviedb.org/). 
You need to register (you can enter any data) and get API key. The following endpoints will be used in this work.

/trending/get-trending a list of the most popular movies for today to create a collection on the home page page.
/search/search-movies keyword search for a movie on the movies page.
/movies/get-movie-details Request full movie info for the movie page.
/movies/get-movie-credits Request cast info for the movie page.
/movies/get-movie-reviews requesting reviews for the movie page.
Documentation link(https://developers.themoviedb.org/3/getting-started/introduction)

Routes.​

The app should have the following routes. If a user has accessed a non-existent route, it must be redirected to the home page.

The ``Home'' component, the home page with a list of popular movies.   
The /'/movies' - component Movies, a page of movie search by keyword. keyword.   
/movies/:movieId' - component MovieDetails, a page with detailed information about the movie.  
/movies/:movieId/cast - component Cast, information about the cast. Rendered on the page MovieDetails.  
/movies/:movieId/reviews - component Reviews, information about reviews. Rendered on the page MovieDetails.  
Code Splitting​

Add asynchronous JS code loading for the application routes using React.lazy() and <Suspense>.
