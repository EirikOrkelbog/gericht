import Link from "next/link";

const navLinks = [
	{
		link: "home",
		path: "/",
	},
	{
		link: "menu",
		path: "/menu",
	},
	{
		link: "about",
		path: "/about",
	},
	{
		link: "contact",
		path: "/contact",
	},
];

function Nav({ containerStyles }: { containerStyles: string }) {
	return (
		<nav className="flex items-center">
			<ul className={`capitalize ${containerStyles}`}>
				{navLinks.map((navLink) => (
					<Link href={navLink.path}><li>{navLink.link}</li></Link>
				))}
			</ul>
		</nav>
	)
}
export default Nav;