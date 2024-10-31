"use client";

import { useParams } from "next/navigation";
import ProjectDetail from "@/constants/ProjectData";
import ProjectDemo from "@/components/ProjectDemo";
import ProjectPoint from "@/components/ProjectPoint";

import ProjectURL from "@/components/ProjectURL";
import ProjectLang from "@/components/ProjectLang";

const page = () => {
	const { id } = useParams();

	const project = ProjectDetail.find((project) => project.id === Number(id))!;

	return (
		<div className="container">
			<div className="flex flex-col text-left gap-5">
				<h1 className="max-lg:text-2xl text-4xl font-bold text-w mb-10 underline underline-offset-[10px]">
					{project?.Name}
				</h1>

				<div className="text-w text-xl max-lg:text-lg font-mono mb-16">
					{project?.Introduction}
				</div>
				<div className=" flex flex-col gap-16 ">
					<ProjectDemo projectfunctions={project.detail.function} />
					<ProjectLang lang={project.tags} />
					<ProjectPoint
						title="Installed Packages"
						pointList={project.detail.packages}
					/>

					<ProjectPoint
						title="Challenges and Improvements"
						pointList={project.detail.challenge_improvement}
					/>
					<ProjectURL
						tryme={project.TryMe!}
						github={project.GithubURL}
					/>
				</div>
			</div>
		</div>
	);
};

export default page;
