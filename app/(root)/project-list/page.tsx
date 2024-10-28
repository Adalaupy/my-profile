import ButtonURL from "@/components/ButtonURL";
import ProjectDetail from "@/constants/ProjectData";
import { FaGithub } from "react-icons/fa";
import { PiTestTubeFill } from "react-icons/pi";
import { BiMessageDetail } from "react-icons/bi";

const page = () => {
	return (
		<div className="container">
			<div className="flex flex-wrap gap-10 justify-center items-center">
				{ProjectDetail.map((project) => (
					<div
						key={project.id}
						className="lg:w-[600px] max-lg:w-[300px] min-h-[500px] item-box flex flex-col gap-10 justify-center"
					>
						<h3>{project.Name}</h3>
						<img
							className="rounded-xl"
							src={project.CoverPhoto.src}
							alt={project.Name}
						/>

						<div className="flex  items-center justify-center gap-8 max-lg:gap-5 max-lg:flex-col">
							<ButtonURL url={project.GithubURL} content="Github">
								{<FaGithub />}
							</ButtonURL>

							<ButtonURL
								url={`/project-detail/${project.id}`}
								content="Detail Page"
							>
								{<BiMessageDetail />}
							</ButtonURL>

							{project.TryMe && (
								<ButtonURL url={project.TryMe} content="Try Me">
									<PiTestTubeFill />
								</ButtonURL>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default page;
