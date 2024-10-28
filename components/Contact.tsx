"use client";

import { useState } from "react";
import { SendEmail } from "../api/email";
import ButtonURL from "./ButtonURL";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
	const [FirstName, setFirstName] = useState("");
	const [LastName, setLastName] = useState("");
	const [Email, setEmail] = useState("");
	const [Message, setMessage] = useState("");

	const Fn_SendEmail = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		SendEmail({ FirstName, LastName, Message, Email });

		setFirstName("");
		setLastName("");
		setEmail("");
		setMessage("");
	};

	return (
		<section id="contact" className="w-full mt-11 border-t-2 bg-zinc-800 ">
			<h3 className="mt-5 text-4xl font-extrabold text-w mb-10 max-lg:text-xl">
				Contact Me
			</h3>
			<form
				className="text-w flex flex-col justify-center items-center gap-10"
				onSubmit={(event) => Fn_SendEmail(event)}
			>
				<div className="flex justify-center items-center gap-10 max-lg:flex-col max-lg:gap-2 ">
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

				<div className="flex gap-2 justify-center items-center w-full flex-col input-box">
					<label>Write something here...</label>
					<textarea
						rows={4}
						className="w-1/2"
						value={Message}
						onChange={(e) => {
							setMessage(e.target.value);
						}}
					/>
				</div>

				<div className="mb-10 hover_scale2  ">
					<input
						className="cursor-pointer"
						id="submit"
						type="submit"
						value="Submit"
					/>
				</div>
			</form>
			<div className="text-w flex justify-center items-center gap-10 pb-10 mt-10 max-lg:text-xs">
				<a
					href="https://github.com/Adalaupy/"
					className="flex justify-center items-center gap-2"
				>
					<FaGithub />
					Github
				</a>

				<a
					className="flex justify-center items-center gap-2"
					href="https://www.linkedin.com/in/ada-l-729728227/"
				>
					<FaLinkedin />
					LinkedIn
				</a>
			</div>
		</section>
	);
};

export default Contact;
