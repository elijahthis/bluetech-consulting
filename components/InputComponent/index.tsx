interface InputComponentProps {
	label: string;
	name: string;
	value?: string;
	onChange?: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	type:
		| "text"
		| "email"
		| "password"
		| "number"
		| "tel"
		| "url"
		| "search"
		| "textarea"
		| undefined;
	placeholder?: string;
}

const InputComponent = ({
	label,
	name,
	value,
	onChange,
	type,
	placeholder,
}: InputComponentProps) => {
	return (
		<label
			htmlFor=""
			className="flex flex-col items-stretch gap-2 text-[051C2C] font-medium "
		>
			{label}
			{type === "textarea" ? (
				<textarea
					name={name}
					id=""
					cols={30}
					rows={5}
					// onChange={onChange}
					placeholder={placeholder}
					className={`font-medium py-4 px-6 rounded border border-[#CCC] focus:outline-none focus:ring-2 focus:ring-[#1E86FF] focus:border-transparent `}
				></textarea>
			) : (
				<input
					name={name}
					type={type}
					// value={value}
					// onChange={onChange}
					placeholder={placeholder}
					className={`font-medium py-4 px-6 rounded border border-[#CCC] focus:outline-none focus:ring-2 focus:ring-[#1E86FF] focus:border-transparent `}
				/>
			)}
		</label>
	);
};

export default InputComponent;
