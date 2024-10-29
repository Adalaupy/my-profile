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
		<section
			id="contact"
			className="w-full mt-11 border-t-2 border-dotted "
		>
			<div className="flex max-lg:flex-col-reverse justify-center w-full">
				<div className="basis-1/2 flex flex-col justify-center bg4 max-lg:bg5">
					<h1 className="text-w text-2xl text-center font-mono  max-lg:text-xl pt-10 ">
						FOLLOW ME
					</h1>

					<div className="text-w flex justify-center items-center gap-10 pb-10 mt-10 max-lg:text-xs ">
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
				</div>
				<form
					className="text-w flex flex-col justify-center items-center gap-10 basis-1/2 bg5"
					onSubmit={(event) => Fn_SendEmail(event)}
				>
					<div className="flex flex-col items-center gap-2 max-lg:flex-col max-lg:gap-2 ">
						<h1 className="mt-5 text-2xl text-w mb-5 max-lg:text-xl font-mono">
							Contact Me
						</h1>
						<input
							type="text"
							id="FirstName"
							name="firstname"
							placeholder="Enter Your First Name"
							value={FirstName}
							onChange={(e) => {
								setFirstName(e.target.value);
							}}
						/>

						<input
							type="text"
							id="LastName"
							name="lastname"
							placeholder="Enter Your Last Name"
							value={LastName}
							onChange={(e) => {
								setLastName(e.target.value);
							}}
						/>

						<input
							type="email"
							id="email"
							name="email"
							placeholder="Enter Your Email"
							value={Email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</div>

					<textarea
						rows={4}
						placeholder="Write something here..."
						value={Message}
						onChange={(e) => {
							setMessage(e.target.value);
						}}
					/>

					<div className="mb-10 hover_scale2  ">
						<input
							className="cursor-pointer"
							id="submit"
							type="submit"
							value="Submit"
						/>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
