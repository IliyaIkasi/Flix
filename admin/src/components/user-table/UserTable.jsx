import "./usertable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumn, movieColumn } from "../../data";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
	getMovies,
	deleteMovie,
} from "../../context/movie_context/MovieApiCalls";
import { getUsers, deleteUser } from "../../context/user_context/UserApiCalls";

const UserTable = ({ context, dispatch, title, link }) => {
	const [column, setColumn] = useState("users");

	useEffect(() => {
		getUsers(dispatch);
		getMovies(dispatch);
	}, [dispatch]);

	const handleDelete = (id) => {
		deleteMovie(id, dispatch);
		deleteUser(id, dispatch);
	};

	const actionCloumn = [
		{
			field: "action",
			headerName: "Action",
			width: 200,
			renderCell: (params) => {
				return (
					<div className="cellWithAction">
						<Link
							to={`/${link}/` + params.row._id}
							state={{ state: params.row }}
							style={{ textDecoration: "none" }}
						>
							<div className="viewButton">View</div>
						</Link>
						<div
							className="deleteButton"
							onClick={() => handleDelete(params.row._id)}
						>
							Delete
						</div>
					</div>
				);
			},
		},
	];

	return (
		<div className="usertable-section">
			<div className="usertable-title">
				{title}
				<Link to={`/${link}/new`} className="add-link">
					<div className="add-button">Add New</div>
				</Link>
			</div>
			{column === link ? (
				<DataGrid
					rows={context}
					columns={userColumn.concat(actionCloumn)}
					pageSize={9}
					rowsPerPageOptions={[9]}
					checkboxSelection
					getRowId={(r) => r._id}
				/>
			) : (
				<DataGrid
					rows={context}
					columns={movieColumn.concat(actionCloumn)}
					pageSize={9}
					rowsPerPageOptions={[9]}
					checkboxSelection
					getRowId={(r) => r._id}
				/>
			)}
		</div>
	);
};

export default UserTable;
