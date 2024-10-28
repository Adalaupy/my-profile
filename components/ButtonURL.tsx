const ButtonURL = ({
	url,
	content,
	children,
}: {
	url: string;
	content: string;
	children: React.ReactElement;
}) => {
	return (
		<div>
			{content === "Detail Page" ? (
				<a
					className="btn1 hover_scale2"
					rel="noopener noreferrer"
					href={url}
				>
					{children}
					{content}
				</a>
			) : (
				<a
					className="btn1 hover_scale2"
					rel="noopener noreferrer"
					target="_blank"
					href={url}
				>
					{children}
					{content}
				</a>
			)}
		</div>
	);
};

export default ButtonURL;
