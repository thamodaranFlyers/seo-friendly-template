import { Col, Row } from 'antd';
import { motion } from 'framer-motion';
import { AnimatedText, Button, Watermark } from '../../../components';
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
				<div className="watermark_area">
					<Watermark text="PRODUCT" />
				</div>
				<motion.div initial="hidden" animate="visible" variants={container}>
					<div className="container">
						{placeholderText.map((item, index) => {
							return <AnimatedText {...item} key={index} />;
						})}
						<Row>
							<Col xl={8} className="button_area">
								<Button onClick={() => console.log('onclick')}>Contact Us</Button>
							</Col>
						</Row>
					</div>
				</motion.div>
			</Col>
		</Row>
	);
};

export default HeroIntro;
