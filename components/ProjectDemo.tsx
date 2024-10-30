import { StaticImageData } from "next/image";
import React, { useState } from "react";
import ImageZoom from "@/components/ImageZoom";
import { PiArrowFatLinesRightFill } from "react-icons/pi";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";
import clsx from "clsx";

type ProjectType = {
	fn_ID: number;
	Fn_Text: string;
	Fn_Img: StaticImageData;
}[];

const ProjectDemo = ({
	projectfunctions,
}: {
	projectfunctions: ProjectType;
}) => {
	const [Curr_FnID, setCurr_FnID] = useState(1);
	const [isClickImg, setisClickImg] = useState(false);
	const [Curr_Fn, setCurr_Fn] = useState(
		projectfunctions?.find((item) => item.fn_ID === Curr_FnID)
	);

	const Update_FnID = (ID_Change: number) => {
		if (ID_Change > 0 && Curr_FnID === projectfunctions?.length!) return;
		if (ID_Change < 0 && Curr_FnID === 1) return;

		setCurr_FnID(Curr_FnID + ID_Change);
		setCurr_Fn(
			projectfunctions?.find(
				(item) => item.fn_ID === Curr_FnID + ID_Change
			)
		);
	};

	return (
		<div>
			{isClickImg && (
				<ImageZoom
					imgPath={Curr_Fn?.Fn_Img.src!}
					Height={Curr_Fn?.Fn_Img.height!}
					Width={Curr_Fn?.Fn_Img.width!}
					setisClickImg={setisClickImg}
				/>
			)}
			<div>
				<h4>Demonstration</h4>

				<div className="item-box2 flex flex-col gap-5">
					<div className="flex gap-20 max-lg:gap-5 justify-center items-center ">
						<div
							onClick={() => Update_FnID(-1)}
							className={clsx(
								"arrow",
								Curr_FnID === 1 && "opacity-20"
							)}
						>
							<PiArrowFatLinesLeftFill />
						</div>

						<div
							onClick={() => setisClickImg(true)}
							className="animate-zoomIn w-1/2 max-lg:w-3/4 cursor-pointer hover_scale2 flex justify-center"
						>
							<img
								className="rounded-lg object-contain  max-h-[500px] "
								src={Curr_Fn?.Fn_Img.src}
								alt="function-img"
							/>
						</div>

						<div
							onClick={() => Update_FnID(1)}
							className={clsx(
								"arrow",
								Curr_FnID === projectfunctions.length &&
									"opacity-20"
							)}
						>
							<PiArrowFatLinesRightFill />
						</div>
					</div>
					<div className="text-w text-center font-mono text-xl max-lg:text-sm flex justify-center w-full">
						<div className="lg:w-1/2">{Curr_Fn?.Fn_Text}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDemo;
