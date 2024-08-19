import {
	Sheet,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet"
import { AlignJustify } from "lucide-react";
import Logo from "./Logo";
import Nav from "./Nav";
import CtaButton from "./CtaButton";




function MobileNav() {
	return (
		<Sheet>
			<SheetTrigger className="flex items-center justify-center">
				<AlignJustify />
			</SheetTrigger>
			<SheetContent className="w-[400px] sm:w-[540px] flex flex-col items-center justify-center gap-16">
				<div className="flex items-center justify-center">
					<Logo />
				</div>
				<Nav containerStyles="flex flex-col items-center gap-8" />
				<CtaButton text="Book Table" />
			</SheetContent>
		</Sheet>

	)
}

export default MobileNav;