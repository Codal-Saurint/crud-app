import axios from "axios";
import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Create = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [checkbox, setCheckbox] = useState(false);
	const postData = (e) => {
		e.preventDefault();
		axios.post("https://6270ed216a36d4d62c1f0621.mockapi.io/fakeData", {
			firstName,
			lastName,
			checkbox,
		});
		console.log(firstName, lastName, checkbox);
	};
	return (
		<div className="main">
			<h2 className="main-header">React crud operation</h2>

			<Form className="create-form">
				<Form.Field>
					<label>First Name</label>

					<input
						placeholder="First Name"
						onChange={(e) => setFirstName(e.target.value)}
					/>
					<br />
				</Form.Field>
				<Form.Field>
					<label>Last Name</label>
					<input
						placeholder="Last Name"
						onChange={(e) => setLastName(e.target.value)}
					/>
					<br />
				</Form.Field>
				<Form.Field>
					<Checkbox
						label="I agree to the terms and conditions"
						onChange={(e) => setCheckbox(!checkbox)}
					/>
				</Form.Field>

				<Link to="/read">
					<Button type="submit" onClick={postData}>
						Submit
					</Button>
				</Link>
			</Form>
		</div>
	);
};

export default Create;
