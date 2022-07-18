import { Col, Row } from 'antd';
import { AnimatePresence, motion } from 'framer-motion';
import { AnimatedText, Button, Watermark } from '../../../components';
import AnimatedCharacter from './AnimatedCharacter';
import './styles.scss';
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
			<Col xl={12} sm={0} xs={0} style={{ height: '100%' }}>
				<AnimatePresence>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							duration: 1.5,
							// type: 'spring',
						}}
						style={{ height: '100%', width: '100%' }}>
						<AnimatedCharacter />
					</motion.div>
				</AnimatePresence>
			</Col>
			<Col xl={12} sm={24} xs={24}>
				<AnimatePresence>
					<div className="watermark_area">
						<Watermark text="PRODUCT" />
					</div>
				</AnimatePresence>
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
