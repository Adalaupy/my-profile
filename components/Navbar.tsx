"use client";

import { useState } from "react";
import ProjectDetail from "../assets/ProjectData";
import { PiNavigationArrowFill } from "react-icons/pi";
import clsx from "clsx";

const Navbar = () => {
	const NavItemList = [
		{ label: "Homepage", redirect: "/" },
		{ label: "About Me", redirect: "/about-me" },
		{ label: "My Project", redirect: "/project-list" },
		{ label: "Contact Me", redirect: "#contact" },
	];

	const [isProjectHover, setIsProjectHover] = useState(false);
	const [isOpen, setisOpen] = useState(false);

	return (
		<div className="lg:h-8 text-w text-2xl relative  ">
			<div
				className={clsx(
					"flex gap-16 lg:justify-end lg:pr-10 lg:pt-5 max-lg:flex-col max-lg:h-screen max-lg:justify-center",
					!isOpen && "max-lg:hidden"
				)}
			>
				{NavItemList.map((item, index) => (
					<a
						key={index}
						href={item.redirect}
						className=" after:bg-w hover_underline relative flex justify-center"
						onMouseOver={() =>
							item.label === "My Project" &&
							setIsProjectHover(true)
						}
						onMouseOut={() =>
							item.label === "My Project" &&
							setIsProjectHover(false)
						}
						onClick={() => {
							setisOpen(false);
						}}
					>
						{item.label}

						{isProjectHover && item.label === "My Project" && (
							<div className="max-lg:hidden absolute pt-12 w-[250px] ">
								<div className="flex flex-col gap-5 text-lg ">
									{ProjectDetail.map((proj) => (
										<div
											key={proj.id}
											className="hover_scale"
										>
											{proj.Name}
										</div>
									))}
								</div>
							</div>
						)}
					</a>
				))}
			</div>

			{/* Mobile */}

			<div className="absolute right-9 top-8 lg:hidden ">
				<div
					className="cursor-pointer"
					onClick={() => {
						setisOpen((prev) => !prev);
					}}
				>
					<PiNavigationArrowFill />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
