import './styles.scss';

const Watermark = ({ text = '' }) => {
	return <span className="watermark">{text}</span>;
};

export default Watermark;
