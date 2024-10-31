const Shape = () => {
	const shapeList = Array.from({ length: 10 }, (_, index) => index);

	return (
		<div>
			{shapeList.map((num) => {
				const rotateIndex = num * 20;

				return (
					<div
						style={{ transform: `rotate(${rotateIndex}deg` }}
						key={num}
						className=" -left-[90px] -right-[90px] max-lg:top-32 absolute bg4 h-full max-lg:h-[30%] rounded-[60%] -z-10 "
					/>
				);
			})}
		</div>
	);
};

export default Shape;
