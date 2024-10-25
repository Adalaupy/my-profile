const ImageZoom = ({
	imgPath,
	setisClickImg,
}: {
	imgPath: string;
	setisClickImg: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return (
		<div
			className="w-full h-full fixed top-0 left-0 bottom-0 flex justify-center items-center z-10 img-zoom"
			onClick={() => setisClickImg(false)}
		>
			<div className="w-3/4 ">
				{imgPath}
				<img src={imgPath} alt="function-img" />
			</div>
		</div>
	);
};

export default ImageZoom;
