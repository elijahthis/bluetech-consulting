"use client";
import { MouseEvent } from "react";

interface ButtonProps {
	children: string | JSX.Element;
	className?: string;
	onClick: () => void;
	loading?: boolean;
	disabled?: boolean;
	type?: "button" | "submit" | "reset" | undefined;
}

const Button = ({
	children,
	className = "",
	onClick,
	loading = false,
	disabled = false,
	type = "button",
}: ButtonProps) => {
	return (
		<button
			className={`lg:rounded-2xl rounded-lg bg-[#051C2C] text-white w-max lg:px-10 px-6 lg:py-6 py-4 text-base `}
			onClick={(e: MouseEvent<HTMLButtonElement>) => {
				if (disabled) e.preventDefault();
				else if (!loading) onClick && onClick();
			}}
			type={type}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default Button;
