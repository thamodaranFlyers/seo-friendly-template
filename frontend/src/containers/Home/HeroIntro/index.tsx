import { Col, Row } from 'antd';
import { motion } from 'framer-motion';
import { AnimatedText } from '../../../components';
import './styles.scss';

const HeroIntro = () => {
	const placeholderText = [
		{ type: 'heading1', text: 'BUSINESS' },
		{
			type: 'heading1',
			text: 'FROM IDEA TO',
		},
		{
			type: 'heading1',
			text: 'LAUNCHING.',
		},
		{
			type: 'paragraph',
			text: 'As far as we might be concerned, making an extraordinary',
		},
		{
			type: 'paragraph',
			text: 'impact on the world is a big deal.',
		},
	];

	const container = {
		visible: {
			transition: {
				staggerChildren: 0.025,
			},
		},
	};

	return (
		<Row className="hero_intro" align="middle">
			<Col xl={12}></Col>
			<Col xl={12}>
				<motion.div initial="hidden" animate="visible" variants={container}>
					<div className="container">
						{placeholderText.map((item, index) => {
							return <AnimatedText {...item} key={index} />;
						})}
					</div>
				</motion.div>
			</Col>
		</Row>
	);
};

export default HeroIntro;
