import Link from "next/link";

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
				<Link
					className="btn1 hover_scale2"
					rel="noopener noreferrer"
					href={url}
				>
					{children}
					{content}
				</Link>
			) : (
				<Link
					className="btn1 hover_scale2"
					rel="noopener noreferrer"
					target="_blank"
					href={url}
				>
					{children}
					{content}
				</Link>
			)}
		</div>
	);
};

export default ButtonURL;
