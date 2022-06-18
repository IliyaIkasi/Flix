import axios from "axios";
import {
	createMoviesFailure,
	createMoviesStart,
	createMoviesSuccess,
	deleteMovieFailure,
	deleteMovieStart,
	deleteMovieSuccess,
	getMoviesFailure,
	getMoviesStart,
	getMoviesSuccess,
} from "./MovieAction";

export const getMovies = async (dispatch) => {
	dispatch(getMoviesStart());
	try {
		const res = await axios.get("http://localhost:4000/flix/movies", {
			headers: {
				"flix-token": JSON.parse(localStorage.getItem("user")).token,
			},
		});
		dispatch(getMoviesSuccess(res.data.allMovies));
	} catch (error) {
		dispatch(getMoviesFailure());
	}
};

export const createMovie = async (movie, dispatch) => {
	dispatch(createMoviesStart());
	try {
		const res = await axios.post("http://localhost:4000/flix/movies/", movie, {
			headers: {
				"flix-token": JSON.parse(localStorage.getItem("user")).token,
			},
		});
		dispatch(createMoviesSuccess(res));
	} catch (error) {
		dispatch(createMoviesFailure());
	}
};
export const deleteMovie = async (id, dispatch) => {
	dispatch(deleteMovieStart());
	try {
		await axios.delete("http://localhost:4000/flix/movies/" + id, {
			headers: {
				"flix-token": JSON.parse(localStorage.getItem("user")).token,
			},
		});
		dispatch(deleteMovieSuccess(id));
	} catch (error) {
		dispatch(deleteMovieFailure());
	}
};
