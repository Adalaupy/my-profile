import { FaGithub } from "react-icons/fa";
import ButtonURL from "./ButtonURL";
import { PiTestTubeFill } from "react-icons/pi";

const ProjectURL = ({ tryme, github }: { tryme: string; github: string }) => {
	return (
		<div>
			<h4>More detail</h4>
			<div className="item-box2 ">
				<div className="text-w flex items-center justify-evenly">
					<ButtonURL url={github} content="Github">
						{<FaGithub />}
					</ButtonURL>

					{tryme && (
						<ButtonURL url={tryme} content="Try Me">
							<PiTestTubeFill />
						</ButtonURL>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectURL;
