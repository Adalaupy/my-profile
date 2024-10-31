import Shape from "@/components/Shape";
import Me from "@/public/images/homepage.png";
import Image from "next/image";
const page = () => {
	const Page_Title = "Hello World!";
	const Page_Introduction =
		"A non-IT graduate who works as a Data Engineer/Programmer. To make up my deficiency in technical, I learn coding by trying to solve problems in my daily life.Here you can find my Working Experience, Education, Skill Set, Certification as well as My Project";

	return (
		<div className="container min-h-[800px]">
			<div className="flex gap-5 justify-center items-center">
				<div className="animate-movel text-w flex flex-col gap-10 text-left basis-1/2 max-lg:z-10 max-lg:textshadow">
					<h1 className="text-4xl font-sans">
						{Page_Title.toUpperCase()}
					</h1>
					<div className=" work-sans text-2xl max-lg:text-lg leading-10 ">
						{Page_Introduction}
					</div>
				</div>

				<div className="basis-1/2 w-full flex justify-center items-center max-lg:absolute max-lg:opacity-[0.5] max-lg:mt-10">
					<div className="animate-mover relative flex justify-center mt-5 lg:ml-10">
						<Image
							unoptimized
							className=" object-contain"
							src={Me.src}
							alt="my-pic"
							height={500}
							width={175}
						/>
						<Shape />
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
