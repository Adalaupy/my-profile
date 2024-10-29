import Education from "../../../constants/Education.json";
import Skill from "../../../constants/Skills.json";
import Cert from "../../../constants/Cert.json";
import Work from "../../../constants/WorkHistory.json";
import Me from "@/public/images/profile.jpg";
const page = () => {
	const Self_Introduction =
		"I am a self-motivated and responsible person who graduated in City University of Hong Kong specialising in Business Analysis. In order to enhance my ability of teamwork and adaptability, I have also applied different part-time job and internship program to jack up my experiences and learnt some skills that out of my major. I am now working as a Data Engineer, and I sincerely hope that my application will be accepted.";

	Work.sort((a, b) => b.FromMonth - a.FromMonth || b.FromYear - a.FromYear);

	return (
		<div className="container">
			<div className="flex justify-center lg:items-start gap-10 max-lg:flex-col max-lg:items-center">
				<div className="item-box basis-1/4 flex flex-col justify-center items-center">
					<img
						className="mb-5 h-56 object-cover"
						src={Me.src}
						alt="my-pic"
					/>
					<h3>Profile photo</h3>
				</div>

				<div className="flex flex-col gap-10 basis-3/4">
					<div className="item-box introbox">
						<h3>About Me</h3>
						<p className="font-sans">{Self_Introduction}</p>
					</div>

					<div className="item-box introbox">
						<h3>Education</h3>

						<div className="flex flex-col gap-10">
							{Education.map((item) => (
								<div
									key={item.From}
									className="flex justify-between"
								>
									<div className="basis-1/4">
										{item.From} - {item.To}
									</div>
									<div className="basis-3/4 flex flex-col gap-2 text-end">
										<span className="font-bold ">
											{item.SchoolName}
										</span>
										<span>{item.Desc}</span>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="item-box introbox">
						<h3>Certificant</h3>
						<div className="flex flex-col gap-10">
							{Cert.map((item) => (
								<div
									key={item.Desc}
									className="flex justify-between"
								>
									<div className="basis-1/4">{item.Date}</div>
									<div className="font-bold basis-3/4 text-end">
										{item.Desc}
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="item-box introbox">
						<h3>Skill</h3>
						<div className="flex flex-col gap-10">
							{Skill.map((item) => (
								<div
									key={item.skill}
									className="flex justify-between"
								>
									<div className="">{item.skill}</div>
									<div className="">
										{"⚫".repeat(item.familiarity)}
										{"⚪".repeat(5 - item.familiarity)}
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="item-box introbox">
						<h3>Working History</h3>
						<div className="flex flex-col gap-10">
							{Work.map((item) => (
								<div
									key={item.Company}
									className="flex justify-between gap-10"
								>
									<div className="basis-1/4">
										{item.FromYear}.
										{item.FromMonth.toString().padStart(
											2,
											"0"
										)}
										- {item.ToYear}.
										{item.ToMonth.toString().padStart(
											2,
											"0"
										)}
									</div>

									<div className="basis-3/4 flex flex-col gap-4">
										<div className="flex flex-col justify-start ">
											<span className="font-bold text-2xl max-lg:text-xl">
												{item.Title}
											</span>
											<span className="text-xl max-lg:text-lg">
												{item.Company}
											</span>
										</div>

										<ul className="flex flex-col gap-3 list-outside list-disc text-lg max-lg:text-sm">
											{item.Job.map((duty) => (
												<li key={duty}>{duty}</li>
											))}
										</ul>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
