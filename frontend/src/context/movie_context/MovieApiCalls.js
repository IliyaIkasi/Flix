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
	getOneMoviesFailure,
	getOneMoviesStart,
	getOneMoviesSuccess,
} from "./MovieAction";

export const getMovies = async (dispatch) => {
	dispatch(getMoviesStart());
	try {
		const res = await axios.get("http://localhost:4000/flix/movies", {
			headers: {
				"flix-token": JSON.parse(localStorage.getItem("user-front")).token,
			},
		});

		dispatch(getMoviesSuccess(res.data.data));
	} catch (error) {
		dispatch(getMoviesFailure());
	}
};

export const getOneMovies = async (id, dispatch) => {
	dispatch(getOneMoviesStart());
	try {
		const url = "http://localhost:4000/flix/movies/find/" + id;
		const res = await axios.get(url, {
			headers: {
				"flix-token": JSON.parse(localStorage.getItem("user-front")).token,
			},
		});
		dispatch(getOneMoviesSuccess(res.data.movie));
	} catch (error) {
		dispatch(getOneMoviesFailure());
	}
};

export const getRandomMovies = async (type, dispatch) => {
	dispatch(getMoviesStart());
	try {
		const res = await axios.get(
			`http://localhost:4000/flix/movies/random?type=${type}`,
			{
				headers: {
					"flix-token": JSON.parse(localStorage.getItem("user-front")).token,
				},
			}
		);
		dispatch(getMoviesSuccess(res.data.movie));
	} catch (error) {
		dispatch(getMoviesFailure());
	}
};

export const createMovie = async (movie, dispatch) => {
	dispatch(createMoviesStart());
	try {
		const res = await axios.post("http://localhost:4000/flix/movies/", movie, {
			headers: {
				"flix-token": JSON.parse(localStorage.getItem("user-front")).token,
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
				"flix-token": JSON.parse(localStorage.getItem("user-front")).token,
			},
		});
		dispatch(deleteMovieSuccess(id));
	} catch (error) {
		dispatch(deleteMovieFailure());
	}
};
