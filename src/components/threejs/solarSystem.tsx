import {
	Float,
	Sphere,
	Stars,
	Text,
	Text3D,
	useScroll,
} from "@react-three/drei";
import gsap from "gsap";
import React, { useLayoutEffect, useRef, useState } from "react";
import { BloomEffect } from "../../assets/shaders/Bloom";
import { useFrame, useThree } from "@react-three/fiber";

export const SECTION_HEIGHT = 15;
export const SECTION_COUNT = 5;

export const SolarSystem = () => {
	// REFERENCES
	const timelineRef = useRef<gsap.core.Timeline | null>(null);
	const solarSystemRef = useRef<THREE.Group | null>(null);
	const starRef = useRef<THREE.Group | null>(null);
	// Secitons
	const introductionRef = useRef<THREE.Group | null>(null);
	const descriptionRef = useRef<THREE.Group | null>(null);
	const experienceRef = useRef<THREE.Group | null>(null);
	const projectsRef = useRef<THREE.Group | null>(null);
	const contactRef = useRef<THREE.Group | null>(null);

	// SCROLLING
	const scroll = useScroll();

	// THREE.JS ESSENTIALS
	// const { camera } = useThree();

	useFrame(() => {
		if (timelineRef.current === null) {
			return;
		}
		timelineRef.current.seek(
			scroll.offset * timelineRef.current.duration()
		);
	});

	useLayoutEffect(() => {
		// if (timelineRef.current === null) {
		//     return;
		// }

		timelineRef.current = gsap.timeline();

		if (
			starRef.current === null ||
			solarSystemRef.current === null ||
			descriptionRef.current === null ||
			experienceRef.current === null ||
			projectsRef.current === null ||
			contactRef.current === null
		) {
			return;
		}

		// 1. Initial vertical movement
		timelineRef.current.to(
			solarSystemRef.current.position,
			{
				duration: 1,
				y: SECTION_HEIGHT,
			},
			0
		);

		// 1.5 Zoom out from name
		timelineRef.current.to(
			solarSystemRef.current.position,
			{
				duration: 0.5,
				z: (-SECTION_HEIGHT / 5) * (SECTION_COUNT - 1),
			},
			0.5
		);

		// 2. Main description

		// 2.1 Animate planets orbiting
		timelineRef.current.to(
			descriptionRef.current.rotation,
			{
				duration: 1,
				z: 2 * Math.PI,
			},
			0.0
		);
		timelineRef.current.to(
			experienceRef.current.rotation,
			{
				duration: 1,
				z: 1.5 * Math.PI,
			},
			0.0
		);
		timelineRef.current.to(
			projectsRef.current.rotation,
			{
				duration: 1,
				z: 0.5 * Math.PI,
			},
			0.0
		);
		timelineRef.current.to(
			contactRef.current.rotation,
			{
				duration: 1,
				z: 3 * Math.PI,
			},
			0.0
		);

		// 2.2 Rotate solar system around the horizontal
		timelineRef.current.to(
			solarSystemRef.current.rotation,
			{
				duration: 1,
				x: -0.5 * Math.PI,
			},
			1
		);
		// 2.2+ Move star back to centre
		timelineRef.current.to(
			starRef.current.position,
			{
				duration: 1,
				x: 0,
				y: 0,
				z: -SECTION_HEIGHT,
			},
			1
		);
		// 2.2+ Move planets on to the right plane
		timelineRef.current.to(
			descriptionRef.current.position,
			{
				duration: 1,
				x: 0,
				y: 0,
				z: -5,
			},
			1
		);
		timelineRef.current.to(
			experienceRef.current.position,
			{
				duration: 1,
				x: 0,
				y: 0,
				z: -5,
			},
			1
		);
		timelineRef.current.to(
			projectsRef.current.position,
			{
				duration: 1,
				x: 0,
				y: 0,
				z: -5,
			},
			1
		);
		timelineRef.current.to(
			contactRef.current.position,
			{
				duration: 1,
				x: 0,
				y: 0,
				z: -5,
			},
			1
		);

		// 2.2+ rotate camera an eigth turn
		// timelineRef.current.to(
		// 	camera.rotation,
		// 	{
		// 		duration: 1,
		// 		x: -0.5 * Math.PI,
		// 	},
		// 	1
		// );

		// 3. Experience
		timelineRef.current.to(
			solarSystemRef.current.rotation,
			{
				duration: 1,
				z: (1 * Math.PI) / 32,
			},
			1
		);

		// 4. Projects
		timelineRef.current.to(
			solarSystemRef.current.rotation,
			{
				duration: 1,
				z: (17 * Math.PI) / 32,
			},
			2
		);

		// 5. Contact
		timelineRef.current.to(
			solarSystemRef.current.rotation,
			{
				duration: 1,
				z: (32 * Math.PI) / 32,
			},
			3
		);

		// timelineRef.current.from(
		// 	solarSystemRef.current.position,
		// 	{
		// 		duration: 1,
		// 		y: SECTION_HEIGHT * (SECTION_COUNT - 1),
		// 	},
		// 	1
		// );

		// Planet orbits
		// timelineRef.current.to()
	});

	return (
		<group position={[0, 0, 0]} ref={solarSystemRef}>
			<Stars
				radius={250}
				depth={50}
				count={2500}
				factor={4}
				saturation={0}
				fade
				speed={1}
			/>
			<Stars
				radius={100}
				depth={50}
				count={2500}
				factor={4}
				saturation={0}
				fade
				speed={1}
			/>
			<Stars
				radius={50}
				depth={50}
				count={1000}
				factor={4}
				saturation={0}
				fade
				speed={1}
			/>
			<Text>JACK WILLING</Text>
			<group ref={starRef} position={[0, -SECTION_HEIGHT, -10]}>
				<Star />
			</group>
			<group
				ref={descriptionRef}
				position={[0, -SECTION_HEIGHT - 10, -10]}
			>
				<Planet
					radius={10}
					position={10}
					velocity={10}
					ref={descriptionRef}
				/>
			</group>
			<group ref={experienceRef} position={[0, -SECTION_HEIGHT, -10]}>
				<Planet
					radius={15}
					position={5}
					velocity={10}
					ref={experienceRef}
				/>
			</group>
			<group ref={projectsRef} position={[0, -SECTION_HEIGHT, -10]}>
				<Planet
					radius={20}
					position={15}
					velocity={10}
					ref={projectsRef}
				/>
			</group>
			<group ref={contactRef} position={[0, -SECTION_HEIGHT, -10]}>
				<Planet
					radius={25}
					position={2}
					velocity={5}
					ref={contactRef}
				/>
			</group>
		</group>
	);
};

const Star = () => {
	const [hovered, setHovered] = useState<boolean>();

	return (
		<mesh
			onPointerOver={(event) => setHovered(true)}
			onPointerOut={(event) => setHovered(false)}
		>
			<sphereGeometry args={[5, 16, 16]} />
			<pointLight intensity={5000} />
			<meshStandardMaterial
				emissive="red"
				emissiveIntensity={10}
				color={hovered ? "hotpink" : "orange"}
			/>
			<BloomEffect />
		</mesh>
	);
};

interface SectionProps {
	radius: number;
	position: number;
	velocity: number;
	ref: React.MutableRefObject<THREE.Group | null>;
}

const Planet = (props: SectionProps) => {
	return (
		<mesh position={[0, -SECTION_HEIGHT, -10]}>
			<sphereGeometry args={[0.5, 16, 16]} />
			<meshStandardMaterial color={"green"} />
		</mesh>
	);
};
