import { Col, Row } from 'antd';
import { motion } from 'framer-motion';
import { AnimatedText } from '../../../components';

const HeroIntro = () => {
	const placeholderText = [
		{ type: 'heading1', text: 'BUSINESS' },
		{
			type: 'heading1',
			text: 'FROM IDEA TO PRODUCT',
		},
		{
			type: 'heading1',
			text: 'LAUNCHING',
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
		<Row>
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
