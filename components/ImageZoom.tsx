import clsx from "clsx";
import Image from "next/image";
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
			<div
				className={clsx(
					"relative w-full h-full",
					Height < Width && "w-3/4"
				)}
				style={{ height: Height > Width ? DisplayHeight : "" }}
			>
				<Image
					className={clsx(
						"object-contain",
						Height < Width ? "lg:p-32 max-lg:p-3" : "lg:p-5"
					)}
					src={imgPath}
					alt="function-img"
					fill
					unoptimized
				/>
			</div>
		</div>
	);
};

export default ImageZoom;
