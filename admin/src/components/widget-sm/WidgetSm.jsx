import "./widgetSm.scss";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useEffect, useState } from "react";
import axios from "axios";
import {
	Table,
	TableHead,
	TableRow,
	TableBody,
	TableCell,
	TableContainer,
	Paper,
} from "@mui/material";

const WidgetSm = () => {
	const [newUsers, setNewUsers] = useState([]);

	useEffect(() => {
		const getNewUsers = async () => {
			const url = "http://localhost:4000/flix/users?new=true";
			try {
				const res = await axios.get(url, {
					headers: {
						"flix-token": JSON.parse(localStorage.getItem("user")).token,
					},
				});
				setNewUsers(res.data.allUsers);
			} catch (error) {
				console.log(error.message);
			}
		};
		getNewUsers();
	}, []);

	return (
		<TableContainer className="table-section" component={Paper}>
			<Table sx={{ minWidth: 400 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell className="table-cell">Image</TableCell>
						<TableCell className="table-cell">Username</TableCell>
						<TableCell className="table-cell">Status</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{newUsers.map((user) => (
						<TableRow key={user._id}>
							<TableCell className="table-cell">
								<div className="cell-wrapper">
									<img
										src={`http://localhost:4000/${user.profilePic}`}
										alt={user.username}
										className="product-image"
									/>
								</div>
							</TableCell>
							<TableCell className="table-cell">{user.username}</TableCell>
							<TableCell className="table-cell">
								<span className="status">
									<VisibilityIcon className="status-icon" />
									Display
								</span>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default WidgetSm;
