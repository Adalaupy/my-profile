"use client";

import { useState } from "react";

const Contact = () => {
	const [FirstName, setFirstName] = useState("");
	const [LastName, setLastName] = useState("");
	const [Email, setEmail] = useState("");
	const [Message, setMessage] = useState("");

	const Fn_SendEmail = () => {};
	return (
		<section id="contact" className="w-full mt-11 border-t-2 bg-zinc-800">
			<h3 className="mt-5 text-4xl  font-extrabold text-w mb-10">
				Contact Me
			</h3>

			<form
				className="text-w flex flex-col justify-center items-center gap-10"
				onSubmit={Fn_SendEmail}
			>
				<div className="flex justify-center items-center gap-10">
					<div className="input-box">
						<label>First Name: </label>
						<input
							type="text"
							id="FirstName"
							name="firstname"
							placeholder=""
							value={FirstName}
							onChange={(e) => {
								setFirstName(e.target.value);
							}}
						/>
					</div>

					<div className="input-box">
						<label>Last Name: </label>
						<input
							type="text"
							id="LastName"
							name="lastname"
							placeholder=""
							value={LastName}
							onChange={(e) => {
								setLastName(e.target.value);
							}}
						/>
					</div>

					<div className="input-box">
						<label>Email: </label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder=""
							value={Email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<label>Write something here...</label>
					<textarea
						cols={50}
						rows={4}
						value={Message}
						onChange={(e) => {
							setMessage(e.target.value);
						}}
					/>
				</div>

				<div>
					<input id="submit" type="submit" value="Submit" />
				</div>
			</form>
		</section>
	);
};

export default Contact;
