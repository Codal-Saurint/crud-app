import axios from "axios";
import React, { useState } from "react";

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
		<form className="create-form" onSubmit={postData}>
			<label>First Name</label>

			<input
				placeholder="First Name"
				onChange={(e) => setFirstName(e.target.value)}
			/>
			<br />

			<label>Last Name</label>
			<input
				placeholder="Last Name"
				onChange={(e) => setLastName(e.target.value)}
			/>
			<br />

			<input
				type="checkbox"
				id="terms"
				name="terms"
				onChange={(e) => setCheckbox(!checkbox)}
			/>
			<label>I agree to the Terms and Conditions</label>
			<button className="submit-button" type="submit">
				Submit
			</button>
		</form>
	);
};

export default Create;
