import { Scroll, useScroll } from "@react-three/drei";
import React, { useState } from "react";
import * as THREE from "three";
import "./../../styling/Overlay.css";
import { ExperienceSection } from "../../pages/experience";
import { DescriptionSection } from "../../pages/description";
import { ContactSection } from "../../pages/contact";
import { TitleSection } from "../../pages/title";
import { ProjectsSection } from "../../pages/projects";
import { useFrame } from "@react-three/fiber";
import { Section } from "./Section";

export const Overlay = () => {
	const scroll = useScroll();
	const [opacityFirstSection, setOpacityFirstSection] = useState<number>(1);
	const [opacitySecondSection, setOpacitySecondSection] = useState<number>(1);
	const [opacityThirdSection, setOpacityThirdSection] = useState<number>(1);
	const [opacityFourthSection, setOpacityFourthSection] = useState<number>(1);
	const [opacityFifthSection, setOpacityFifthSection] = useState<number>(1);

	useFrame(() => {
		setOpacityFirstSection(1 - scroll.range(0, 1 / 5));
		setOpacitySecondSection(scroll.curve(1 / 5 - (1 / 5) * 0.2, 1 / 5));
		setOpacityThirdSection(scroll.curve(2 / 5, 1 / 5));
		setOpacityFourthSection(scroll.curve(3 / 5 + (1 / 5) * 0.2, 1 / 5));
		setOpacityFifthSection(scroll.range(4 / 5, 1 / 5));
	});

	return (
		<Scroll
			html
			style={{ scrollSnapType: "y mandatory", overflowY: "scroll" }}
		>
			<Section opacity={opacityFirstSection}>
				<TitleSection />
			</Section>
			<Section opacity={opacitySecondSection}>
				<DescriptionSection />
			</Section>
			<Section opacity={opacityThirdSection}>
				<ExperienceSection />
			</Section>
			<Section opacity={opacityFourthSection}>
				<ProjectsSection />
			</Section>
			<Section opacity={opacityFifthSection}>
				<ContactSection />
			</Section>
		</Scroll>
	);
};
