import { Suspense } from 'react';
import {
	Canvas,
	// useFrame
} from '@react-three/fiber';
import Model from '../../../assets/modal/modal';

const AnimatedCharacter = () => {
	return (
		<Canvas camera={{ position: [1, 1.5, 2.5], fov: 50 }}>
			<ambientLight />
			<directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
			<group position={[0, -1, 0]}>
				<Suspense fallback={null}>
					<Model />
				</Suspense>
			</group>
			<mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1, 0]} receiveShadow>
				<planeBufferGeometry args={[10, 10, 1, 1]} />
				<shadowMaterial transparent opacity={0.2} />
			</mesh>
		</Canvas>
	);
};

export default AnimatedCharacter;
