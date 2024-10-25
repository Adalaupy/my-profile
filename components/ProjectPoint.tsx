const ProjectPoint = ({ pointList }: { pointList: string[] }) => {
	return (
		<div>
			<h4>Installed Packages</h4>
			<div className="item-box2 ">
				<ul className="pl-10 pr-10 text-xl ">
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
