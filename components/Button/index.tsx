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
			className={`rounded-2xl bg-[#051C2C] text-white w-max px-10 py-6 text-base `}
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
