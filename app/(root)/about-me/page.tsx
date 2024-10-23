import React from "react";

const page = () => {
	return (
		<div className="container">
			<div className="flex justify-center items-ceneter gap-10">
				<div className="item-box basis-1/4">
					<h3>Profile photo</h3>
				</div>

				<div className="flex flex-col gap-10 basis-3/4">
					<div className="item-box">
						<h3>Education</h3>
					</div>
					<div className="item-box">
						<h3>Certificant</h3>
					</div>
					<div className="item-box">
						<h3>Skill</h3>
					</div>
					<div className="item-box">
						<h3>Working History</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
