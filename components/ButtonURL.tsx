import React from "react";

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
		<a
			className="btn1 hover_scale2"
			rel="noopener noreferrer"
			target="_blank"
			href={url}
		>
			{children}
			{content}
		</a>
	);
};

export default ButtonURL;
