import Image from "next/image"

function LargeImage() {
	return (
		<div className="relative p-4 max-w-xl">
			<Image src="/hero.png" alt="" width={600} height={600} />
			<div className="h-2/3 w-2/3 bg-brand absolute top-0 right-0 -z-10"></div>
			<div className="h-2/3 w-2/3 bg-brand absolute bottom-0 left-0 -z-10"></div>
		</div>
	)
}

export default LargeImage;