import { Button } from "./ui/button";

function CtaButton({ variant, text, className }: { variant?: "ghost"; text: string; className?: string }) {
	return (
		<Button variant={variant} className={className}>{text}</Button>
	)
}

export default CtaButton;