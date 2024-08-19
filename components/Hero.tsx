import LargeImage from "./LargeImage";
import Spoon from "./Spoon";
import CtaButton from "./CtaButton";

function Hero() {
	return (
		<section className="m-6">
			<div className="flex flex-col gap-24 sm:flex-row sm:justify-between">
				<div className="max-w-96 my-auto sm:max-w-full">
					<p>Chase the new Flavour</p>
					<Spoon />
					<h1 className="text-brand text-5xl sm:text-6xl">The key to Fine dining</h1>
					<p>some text</p>
					<CtaButton text="Book Table" />
				</div>
				<LargeImage />
			</div>
		</section>
	)
}

export default Hero;