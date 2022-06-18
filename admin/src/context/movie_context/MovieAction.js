// Get Movie Start
export const getMoviesStart = () => ({
	type: "GET_MOVIES_START",
});

// Get Movie Success
export const getMoviesSuccess = (movies) => ({
	type: "GET_MOVIES_SUCCESS",
	payload: movies,
});

// Get Movie Failure
export const getMoviesFailure = () => ({
	type: "GET_MOVIES_FAILURE",
});

// Create Movie Start
export const createMoviesStart = () => ({
	type: "CREATE_MOVIE_START",
});

// Create Movie Success
export const createMoviesSuccess = (movie) => ({
	type: "CREATE_MOVIE_SUCCESS",
	payload: movie,
});

// Create Movie Failure
export const createMoviesFailure = () => ({
	type: "CREATE_MOVIE_FAILURE",
});

// Delete 	Movie Start
export const deleteMovieStart = () => ({
	type: "DELETE_MOVIE_START",
});

// Delete Movie Success
export const deleteMovieSuccess = (id) => ({
	type: "DELETE_MOVIE_SUCCESS",
	payload: id,
});

// Delete Movie Failure
export const deleteMovieFailure = () => ({
	type: "DELETE_MOVIE_FAILURE",
});
