import { motion } from 'framer-motion';

interface MotionDivProps {
	initial?: string;
	whileInView?: string;
	viewport?: { once: boolean; amount: number };
	children?: React.ReactNode;
	className?: string;
	variants?: {
		offscreen?: any;
		onscreen?: any;
	};
}

export const MOTION_ANIMATION = {
	FADE_IN: {
		offscreen: { y: 80, opacity: 0 },
		onscreen: {
			y: 0,
			opacity: 1,
			transition: {
				bounce: 0.4,
				duration: 0.8,
				// type: 'spring',
			},
		},
	},
};

const MotionDiv = ({
	className = '',
	initial = 'offscreen',
	whileInView = 'onscreen',
	viewport = { once: false, amount: 0.8 },
	children,
	variants = MOTION_ANIMATION.FADE_IN,
}: MotionDivProps) => {
	return (
		<motion.div
			{...{
				className,
				initial,
				whileInView,
				viewport,
				variants,
			}}
			className="solution_card">
			{children}
		</motion.div>
	);
};

export default MotionDiv;
