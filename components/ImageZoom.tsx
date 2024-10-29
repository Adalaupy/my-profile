import clsx from "clsx";

const ImageZoom = ({
	imgPath,
	setisClickImg,
	Height,
	Width,
}: {
	imgPath: string;
	setisClickImg: React.Dispatch<React.SetStateAction<boolean>>;
	Height: number;
	Width: number;
}) => {
	const DisplayHeight = window.innerHeight * 0.75 + "px";

	return (
		<div
			className="w-full h-full fixed top-0 left-0 bottom-0 flex justify-center items-center z-10 img-zoom"
			onClick={() => setisClickImg(false)}
		>
			<div className={clsx(Height < Width && "w-3/4")}>
				<img
					style={{ height: Height > Width ? DisplayHeight : "" }}
					src={imgPath}
					alt="function-img"
				/>
			</div>
		</div>
	);
};

export default ImageZoom;
