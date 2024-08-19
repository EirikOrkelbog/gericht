import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Logo from "./Logo";
import CtaButton from "./CtaButton";

function Header() {
	return (
		<header className="flex justify-between items-center py-4 px-6 md:px-16">
			<Logo />
			<div className="hidden md:flex">
				<Nav containerStyles="flex gap-8" />
			</div>
			<CtaButton variant="ghost" className="hidden md:flex" text="Book Table" />
			<div className="md:hidden">
				<MobileNav />
			</div>
		</header>
	)
}

export default Header;