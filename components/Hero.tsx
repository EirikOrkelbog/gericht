import Image from "next/image";
import LargeImage from "./LargeImage";
import { Button } from "./ui/button";

function Hero() {
	return (
		<section className="m-6">
			<div className="flex flex-col gap-24 sm:flex-row sm:justify-between">
				<div className="max-w-96 my-auto sm:max-w-full">
					<p>Chase the new Flavour</p>
					<Image src="./spoon.svg" width={50} height={50} alt="spoon" />
					<h1 className="text-brand text-5xl sm:text-6xl">The key to Fine dining</h1>
					<p>some text</p>
					<Button>Book Table</Button>
				</div>
				<LargeImage />
			</div>
		</section>
	)
}

export default Hero;