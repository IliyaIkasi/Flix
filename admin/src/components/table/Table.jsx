import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { tableData } from "../../data";

export const Tables = () => {
	return (
		<TableContainer className="table-section" component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell className="table-cell">Tracking ID</TableCell>
						<TableCell className="table-cell">Product</TableCell>
						<TableCell className="table-cell">Customer</TableCell>
						<TableCell className="table-cell">Date</TableCell>
						<TableCell className="table-cell">Amount</TableCell>
						<TableCell className="table-cell">Payment Method</TableCell>
						<TableCell className="table-cell">Status</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{tableData.map((row) => (
						<TableRow key={row.id}>
							<TableCell className="table-cell">{row.id}</TableCell>
							<TableCell className="table-cell">
								<div className="cell-wrapper">
									<img
										src={row.image}
										alt={row.image}
										className="product-image"
									/>
									{row.product}
								</div>
							</TableCell>
							<TableCell className="table-cell">{row.customer}</TableCell>
							<TableCell className="table-cell">{row.date}</TableCell>
							<TableCell className="table-cell">{row.amount}</TableCell>
							<TableCell className="table-cell">{row.method}</TableCell>
							<TableCell className="table-cell">
								<span className={`status ${row.status}`}>{row.status}</span>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default Tables;
