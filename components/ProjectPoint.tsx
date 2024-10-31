import clsx from "clsx";

const ProjectPoint = ({
	pointList,
	title,
}: {
	pointList: string[];
	title: string;
}) => {
	return (
		<div>
			<h4>{title}</h4>
			<div className="item-box2 ">
				<ul
					className={clsx(
						"pl-10 pr-10 text-xl max-lg:text-sm",
						title == "Installed Packages" && "columns-2"
					)}
				>
					{pointList.map((item, index) => (
						<li
							key={index}
							className="text-w font-mono list-outside list-disc mt-3 "
						>
							{item}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ProjectPoint;
