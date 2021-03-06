import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Update = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [checkbox, setCheckbox] = useState(false);
	const [id, setID] = useState(null);

	useEffect(() => {
		setID(localStorage.getItem("ID"));
		setFirstName(localStorage.getItem("First Name"));
		setLastName(localStorage.getItem("Last Name"));
		setCheckbox(
			localStorage.getItem("Checkbox Value") === "true" ? true : false
		);
	}, []);
	const updateAPIData = () => {
		axios.put(`https://6270ed216a36d4d62c1f0621.mockapi.io/fakeData/${id}`, {
			firstName,
			lastName,
			checkbox,
		});
	};
	return (
		<div className="main">
			<h2 className="main-header">React Update operation</h2>
			<Form className="create-form">
				<Form.Field>
					<label>First Name</label>
					<input
						placeholder="First Name"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					></input>
				</Form.Field>
				<Form.Field>
					<label>Last Name</label>
					<input
						value={lastName}
						placeholder="Last Name"
						onChange={(e) => setLastName(e.target.value)}
					></input>
				</Form.Field>
				<Form.Field>
					<Checkbox
						checked={checkbox}
						label="I agree to the Terms and Conditions"
						onChange={(e) => setCheckbox(!checkbox)}
					></Checkbox>
				</Form.Field>
				<Link to="/read">
					<Button type="submit" onClick={updateAPIData}>
						Update
					</Button>
				</Link>
			</Form>
		</div>
	);
};

export default Update;
