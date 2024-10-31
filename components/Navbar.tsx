"use client";

import { useState } from "react";
import ProjectDetail from "../constants/ProjectData";
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
		<div className=" text-w text-xl sticky top-0 z-20">
			<div
				className={clsx(
					"flex gap-16 lg:justify-end lg:items-center lg:pr-10 lg:p-5 max-lg:flex-col max-lg:h-screen max-lg:justify-center bg2",
					!isOpen && "max-lg:hidden"
				)}
			>
				{NavItemList.map((item, index) => (
					<div
						key={index}
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
						className=" after:bg-w hover_underline relative flex justify-center cursor-pointer"
					>
						<a className="z-30" href={item.redirect}>
							{item.label}
						</a>
						{isProjectHover && item.label === "My Project" && (
							<div className="max-lg:hidden absolute pt-16 w-[250px] ">
								<div className="flex flex-col gap-5 text-lg font-semibold textshadow bg3">
									{ProjectDetail.map((proj) => (
										<a
											href={`/project-detail/${proj.id}`}
											key={proj.id}
											className="hover_scale "
										>
											{proj.Name}
										</a>
									))}
								</div>
							</div>
						)}
					</div>
				))}
			</div>

			{/* Mobile */}

			<div className="absolute right-9 top-8 lg:hidden ">
				<div
					className="text-3xl p-2 shadow rounded-full"
					onClick={() => {
						setisOpen((prev) => !prev);
					}}
				>
					<PiNavigationArrowFill
						strokeWidth={20}
						stroke="#585258e2"
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
