import Spoon from "./Spoon";
import CtaButton from "./CtaButton";
import Image from "next/image";

function About() {
	return (
		<section className="p-6 bg-[url('/about-bg.png')] bg-cover bg-center bg-no-repeat relative overflow-hidden">
			<div className="flex flex-col gap-24 md:flex-row items-center justify-center relative z-20">
				<div className="flex flex-col gap-4 items-center md:items-end md:w-1/3">
					<h2 className="text-brand text-3xl">About Us</h2>
					<Spoon flip={true} />
					<p className="text-center md:text-end">
						We are a team of 10 people who love to eat and cook. We are a team of 10 people who love to eat and cook.
					</p>
					<CtaButton text="Know More" />
				</div>
				<div className="hidden md:flex">
					<Image src="/knife.svg" alt="knife" width={500} height={500} className="h-full w-full" />
				</div>
				<div className="flex flex-col gap-4 items-center md:items-start md:w-1/3">
					<h2 className="text-brand text-3xl">Our History</h2>
					<Spoon />
					<p className="text-center md:text-start">
						Our history is a story of love and passion. We started our journey in 2005 with a vision to provide the best food to our customers.
					</p>
					<CtaButton text="Know More" />
				</div>
			</div>
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[url('/G.svg')] bg-contain bg-center bg-no-repeat z-10"></div>
		</section>
	)
}

export default About;