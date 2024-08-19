import Link from "next/link"
import Image from "next/image"

function Logo() {
	return (
		<Link href="/">
			<Image src="/gericht-logo.svg" alt="logo" priority width={130} height={130} />
		</Link>
	)
}
export default Logo;