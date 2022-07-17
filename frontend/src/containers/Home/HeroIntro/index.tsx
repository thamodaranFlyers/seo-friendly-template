import { Col, Row } from 'antd';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { AnimatedText, Button, Watermark } from '../../../components';
import './styles.scss';
import AnimatedCharacter from './AnimatedCharacter';
// import Model from '../../../assets/modal/model';

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

	// const hue = (h: number) => `hsl(${h}, 100%, 50%)`;
	// const background = `linear-gradient(306deg, ${hue(340)}, ${hue(10)})`;

	// function Rig() {
	// 	return useFrame((state) => {
	// 		state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, 1 + state.mouse.x / 4, 0.075);
	// 		state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, 1.5 + state.mouse.y / 4, 0.075);
	// 	});
	// }

	return (
		<Row className="hero_intro" align="middle">
			{/* <div className="splash" style={{ background }} /> */}
			<Col xl={12} style={{ height: '100%' }}>
				<AnimatedCharacter />
			</Col>
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
