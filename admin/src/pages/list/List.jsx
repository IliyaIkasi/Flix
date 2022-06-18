import "./list.scss";
import SideBar from "../../components/sidebar/SideBar";
import NavBar from "../../components/navbar/NavBar";
import UserTable from "../../components/user-table/UserTable";

const List = ({ context, dispatch, title, link }) => {
	return (
		<div className="list-section">
			<SideBar />
			<div className="list-container">
				<NavBar />
				<UserTable
					context={context}
					dispatch={dispatch}
					title={title}
					link={link}
				/>
			</div>
		</div>
	);
};

export default List;
