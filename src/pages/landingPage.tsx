import { Canvas } from "@react-three/fiber";
import React from "react";
import { SolarSystem } from "../components/threejs/solarSystem";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Overlay } from "../components/threejs/Overlay";

export const LandingPage = () => {
	return (
		<div className="landingPage">
			<div className="canvasContainer">
				<SpaceCanvas />
			</div>
		</div>
	);
};

const SpaceCanvas = () => {
	return (
		<Canvas frameloop="demand" className="landingPage-canvas">
			<ambientLight intensity={1} />
			<OrbitControls enabled={false} enableZoom={false} makeDefault />
			<ScrollControls pages={5}>
				<Overlay />
				<SolarSystem />
			</ScrollControls>
		</Canvas>
	);
};
