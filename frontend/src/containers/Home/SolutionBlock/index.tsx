import { Col, Row } from 'antd';
import { IMAGES } from '../../../assets/img';
import { Image, MotionDiv, Watermark } from '../../../components';
import './styles.scss';

const SolutionBlock = () => {
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
		<Row className="solution_block" align="middle">
			<Col xl={24}>
				<div className="watermark_area">
					<Watermark text="SOLUTION" />
				</div>
				<Row justify="center" gutter={10}>
					<Col className="solution_container" xl={20}>
						<p>
							<h1>GREAT SOLUTIONS</h1>
							<h1>TRAILORED TO YOUR BUSINESS</h1>
						</p>
						<Row gutter={[10, 10]} className="solution_card_container">
							<Col xl={12}>
								<MotionDiv className="solution_card">
									<h3
										style={{
											color: '#17f3a3',
										}}>
										FOR BUSINESS
									</h3>
									<ul className="item_container">
										<li className="item">
											<Image alt="" className="item_image" src={`${IMAGES.greenCheck}`} />
											<span className="item_text">Create a great digital experiance</span>
										</li>
										<li className="item">
											<Image alt="" className="item_image" src={`${IMAGES.greenCheck}`} />
											<span className="item_text">Create a great digital experiance</span>
										</li>
									</ul>
									<Image className="card_background" src={`${IMAGES.hand}`} />
								</MotionDiv>
							</Col>
							<Col xl={12}>
								<MotionDiv className="solution_card">
									<h3
										style={{
											color: '#2296f3',
										}}>
										FOR BUSINESS
									</h3>
									<ul className="item_container">
										<li className="item">
											<Image alt="" className="item_image" src={`${IMAGES.blueCheck}`} />
											<span className="item_text">Create a great digital experiance</span>
										</li>
										<li className="item">
											<Image alt="" className="item_image" src={`${IMAGES.blueCheck}`} />
											<span className="item_text">Create a great digital experiance</span>
										</li>
									</ul>
									<Image className="card_background" src={`${IMAGES.hand}`} />
								</MotionDiv>
							</Col>
						</Row>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default SolutionBlock;
