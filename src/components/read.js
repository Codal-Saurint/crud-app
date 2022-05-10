import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Table, Button, TableBody } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Read = () => {
	const [apiData, setApiData] = useState([]);
	useEffect(() => {
		axios
			.get(`https://6270ed216a36d4d62c1f0621.mockapi.io/fakeData`)
			.then((response) => {
				setApiData(response.data);
			});
	}, []);

	const setData = (data) => {
		console.log(data);
		let { id, firstName, lastName, checkbox } = data;
		localStorage.setItem("ID", id);
		localStorage.setItem("First Name", firstName);
		localStorage.setItem("Last Name", lastName);
		localStorage.setItem("Checkbox Value", checkbox);
	};
	const onDelete = (id) => {
		axios
			.delete(`https://6270ed216a36d4d62c1f0621.mockapi.io/fakeData/${id}`)
			.then(() => {
				getData();
			});
	};
	const getData = () => {
		axios
			.get(`https://6270ed216a36d4d62c1f0621.mockapi.io/fakeData`)
			.then((getData) => {
				setApiData(getData.data);
			});
	};

	return (
		<div className="main">
			<h2 className="main-header">React Crud Operations</h2>
			<Table>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>First Name</Table.HeaderCell>
						<Table.HeaderCell>Last Name</Table.HeaderCell>
						<Table.HeaderCell>Checked</Table.HeaderCell>
						<Table.HeaderCell>Update</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{apiData.map((data) => {
						return (
							<Table.Row>
								<Table.Cell>{data.firstName}</Table.Cell>
								<Table.Cell>{data.lastName}</Table.Cell>
								<Table.Cell>
									{data.checkbox ? `Checked` : `Unchecked`}
								</Table.Cell>
								<Link to="/update">
									<Table.Cell>
										<button onClick={() => setData(data)}>Update</button>
									</Table.Cell>
								</Link>
								<Table.Cell>
									<Button onClick={() => onDelete(data.id)}>Delete</Button>
								</Table.Cell>
							</Table.Row>
						);
					})}
				</Table.Body>
			</Table>
		</div>
	);
};

export default Read;
