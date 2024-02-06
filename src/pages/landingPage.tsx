import { Canvas } from "@react-three/fiber";
import React from "react";
import { SolarSystem } from "../components/threejs/solarSystem";
import { BloomEffect } from "../assets/shaders/Bloom";
import { OrbitControls, ScrollControls } from "@react-three/drei";

export const LandingPage = () => {
	return (
		<div className="landingPage">
			{/* <div className="section title">
				<span>This is the landing page.</span>
			</div>
			<div className="section description">
				<span>Description</span>
			</div>
			<div className="section hobbies">
				<span>hobbies</span>
			</div>
			<div className="section experience">
				<span>experience</span>
			</div>
			<div className="section projects">
				<span>projects</span>
			</div>
			<div className="section contact">
				<span>contact</span>
			</div> */}
			<div className="canvasContainer">
				<SpaceCanvas />
			</div>
		</div>
	);
};

const SpaceCanvas = () => {
	return (
		<Canvas className="landingPage-canvas">
			<ambientLight intensity={1} />
			<OrbitControls enableZoom={false} />
			<ScrollControls pages={5} damping={0.25}>
				<SolarSystem />
			</ScrollControls>
		</Canvas>
	);
};
