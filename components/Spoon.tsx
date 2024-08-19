import Image from "next/image";

function Spoon({flip}: {flip?: boolean}) {
	return (
		<Image src="/spoon.svg" alt="spoon" width={50} height={50} className={flip ? "rotate-180" : ""} />
	)
}

export default Spoon;