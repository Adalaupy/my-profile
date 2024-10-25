const ProjectLang = ({ lang }: { lang: string[] }) => {
	const Fn_Code_color = (code: string) => {
		const colorcode = [
			{ language: "Python", color: "#3572A5" },
			{ language: "HTML", color: "#e34c26" },
			{ language: "CSS", color: "#563d7c" },
			{ language: "JavaScript", color: "#f1e05a" },
			{ language: "React", color: "#2fd7ed" },
		];

		return colorcode.find(
			(item) => item.language.toUpperCase() === code.toUpperCase()
		)?.color;
	};

	return (
		<div>
			<h4>Language / Framework</h4>
			<div className="item-box2">
				<div className="flex justify-between flex-wrap gap-5">
					{lang.map((item, index) => (
						<div
							key={index}
							style={{ backgroundColor: Fn_Code_color(item) }}
							className="textshadow3 rounded-2xl p-4 min-w-28 text-w text-center font-bold"
						>
							{item.toUpperCase()}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectLang;
