import image from "./medias/profile-img.jpg";

export const widgetData = [
	{
		id: 1,
		image: image,
		customer: "ikasi",
		status: "Pending",
	},
	{
		id: 2,
		image: image,
		customer: "ikasi",
		status: "Approved",
	},
	{
		id: 3,
		image: image,
		customer: "ikasi",
		status: "Declined",
	},
	{
		id: 4,
		image: image,
		customer: "ikasi",
		status: "Approved",
	},
	{
		id: 5,
		image: image,
		customer: "ikasi",
		status: "Pending",
	},
	{
		id: 6,
		image: image,
		customer: "ikasi",
		status: "Declined",
	},
];
export const tableData = [
	{
		id: 1,
		product: "iphone",
		image: image,
		customer: "ikasi",
		date: "12/02/22",
		amount: 1000,
		method: "Online",
		status: "Pending",
	},
	{
		id: 2,
		product: "iphone",
		image: image,
		customer: "ikasi",
		date: "12/02/22",
		amount: 1000,
		method: "Online",
		status: "Approved",
	},
	{
		id: 3,
		product: "iphone",
		image: image,
		customer: "ikasi",
		date: "12/02/22",
		amount: 1000,
		method: "Online",
		status: "Declined",
	},
	{
		id: 4,
		product: "iphone",
		image: image,
		customer: "ikasi",
		date: "12/02/22",
		amount: 1000,
		method: "Online",
		status: "Approved",
	},
	{
		id: 5,
		product: "iphone",
		image: image,
		customer: "ikasi",
		date: "12/02/22",
		amount: 1000,
		method: "Online",
		status: "Pending",
	},
	{
		id: 6,
		product: "iphone",
		image: image,
		customer: "ikasi",
		date: "12/02/22",
		amount: 1000,
		method: "Online",
		status: "Declined",
	},
];

export const userRow = [
	{
		id: 1,
		username: "Snow",
		image: image,
		status: "Active",
		email: "email@email.com",
		age: 35,
	},
	{
		id: 2,
		username: "Jaime",
		image: image,
		status: "Passive",
		email: "email@email.com",
		age: 42,
	},
	{
		id: 3,
		username: "Lannister",
		image: image,
		status: "Pending",
		email: "email@email.com",
		age: 45,
	},
	{
		id: 4,
		username: "Stark",
		image: image,
		status: "Active",
		email: "email@email.com",
		age: 16,
	},
	{
		id: 5,
		username: "Targaryen",
		image: image,
		status: "Pending",
		email: "email@email.com",
		age: 23,
	},
	{
		id: 6,
		username: "Melisandre",
		image: image,
		status: "Passive",
		email: "email@email.com",
		age: 15,
	},
	{
		id: 7,
		username: "Clifford",
		image: image,
		status: "Active",
		email: "email@email.com",
		age: 44,
	},
	{
		id: 8,
		username: "Frances",
		image: image,
		status: "Passive",
		email: "email@email.com",
		age: 36,
	},
	{
		id: 9,
		username: "Roxie",
		image: image,
		status: "Active",
		email: "email@email.com",
		age: 65,
	},
];

export const movieColumn = [
	{ field: "_id", headerName: "ID", width: 250 },
	{
		field: "movie",
		headerName: "Movie",
		width: 250,
		renderCell: (params) => {
			return (
				<div className="cellWithImg">
					<img
						className="cellImg"
						src={`http://localhost:4000/${params.row.img}`}
						alt={`http://localhost:4000/${params.row.img}`}
					/>
					{params.row.title}
				</div>
			);
		},
	},
	{ field: "genre", headerName: "Genre", width: 150 },
	{ field: "year", headerName: "Year", width: 100 },
	{ field: "limit", headerName: "Limit", width: 100 },
	{ field: "isSeries", headerName: "IsSeries", width: 100 },
];
export const userColumn = [
	{ field: "_id", headerName: "ID", width: 250 },
	{
		field: "username",
		headerName: "Username",
		width: 250,
		renderCell: (params) => {
			return (
				<div className="cellWithImg">
					<img
						className="cellImg"
						src={`http://localhost:4000/${params.row.profilePic}`}
						alt={params.row.username}
					/>
					{params.row.username}
				</div>
			);
		},
	},
	{ field: "email", headerName: "Email", width: 300 },
	{ field: "isAdmin", headerName: "Admin", width: 100 },
];

export const productData = [
	{ id: 1, label: "Title: ", type: "text", placeholder: "Product Title" },
	{
		id: 2,
		label: "Description: ",
		type: "text",
		placeholder: "Product Description",
	},
	{ id: 3, label: "Category: ", type: "text", placeholder: "Product Category" },
	{
		id: 4,
		label: "Price: ",
		type: "text",
		placeholder: "Product Price",
	},
	{ id: 5, label: "Stock: ", type: "text", placeholder: "Product in Stock" },
];
