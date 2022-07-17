import React, { Fragment } from 'react';
import './button.scss';

interface VButtonProps {
	onClick: () => void;
	disabled?: boolean;
	loading?: boolean | string;
	noShadow?: boolean;
	type?: string;
	className?: string;
	style?: object;
	icon?: boolean;
	children: string;
}

const Button = ({
	type = 'primary',
	children = '',
	onClick,
	disabled = false,
	loading = false,
	icon = false,
	style = {},
	noShadow = false,
	className = '',
}: VButtonProps) => {
	const renderButton = () => (
		<button
			onClick={onClick}
			className={`${className} vButton ${type} ${loading ? 'loading disablebutton' : ''} ${noShadow ? 'noShadow' : ''}`}
			disabled={disabled}
			style={style}>
			{!loading ? (
				<>
					{icon ? <div style={{ marginRight: 5 }}>{icon}</div> : null}
					{children}
				</>
			) : (
				<span className="loader" />
			)}
		</button>
	);

	return <Fragment>{renderButton()}</Fragment>;
};

export default Button;
