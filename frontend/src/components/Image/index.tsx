import React from 'react';
import './style.scss';

const CircularSpinner = () => {
	return (
		<div className="showbox">
			<div className="loader">
				<svg className="circular" viewBox="25 25 50 50">
					<circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" />
				</svg>
			</div>
		</div>
	);
};

interface VImageProps {
	src: string;
	style?: React.CSSProperties;
	alt?: string;
	className?: string;
	title?: string;
	onClick?: () => void;
	serverImage?: boolean;
}

const Image = ({ src = '', style = {}, alt = '', className = '', title = '', onClick, serverImage = false }: VImageProps) => {
	const [loading, setLoading] = React.useState(true);

	return (
		<>
			<img {...{ src, style, className, onClick, alt, title }} onLoad={() => setLoading(false)} onError={() => setLoading(false)} />
			{loading && <CircularSpinner />}
		</>
	);
};

export default Image;
