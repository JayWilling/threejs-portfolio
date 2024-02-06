import React from "react";
import * as THREE from "three";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { UnrealBloomPass, BloomPass } from "three-stdlib";
import { Node, extend, useFrame } from "@react-three/fiber";
import { Effects } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { KernelSize, Resolution } from "postprocessing";

extend({ UnrealBloomPass, OutputPass });

declare module "@react-three/fiber" {
	interface ThreeElements {
		unrealBloomPass: Node<UnrealBloomPass, typeof UnrealBloomPass>;
		outputPass: Node<OutputPass, typeof OutputPass>;
	}
}

export const BloomEffect = () => {
	// var width = window.innerWidth || 1;
	// var height = window.innerHeight || 1;
	// var parameters = {
	// 	minFilter: THREE.LinearFilter,
	// 	magFilter: THREE.LinearFilter,
	// 	format: THREE.RGBAFormat,
	// 	stencilBuffer: false,
	// };

	// var renderTarget = new THREE.WebGLRenderTarget(width, height, parameters);

	// useFrame((state) => {
	// 	const { gl } = state;
	// 	gl.outputColorSpace = THREE.SRGBColorSpace;
	// 	gl.toneMapping = THREE.ACESFilmicToneMapping;
	// 	gl.toneMappingExposure = 1.5;
	// 	gl.shadowMap.enabled = true;
	// 	gl.setClearColor(0x000000, 0);
	// });

	return (
		// <EffectComposer>
		// 	<unrealBloomPass
		// 		intensity={1.0} // The bloom intensity.
		// 		blurPass={undefined} // A blur pass.
		// 		kernelSize={KernelSize.SMALL} // blur kernel size
		// 		luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
		// 		luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
		// 		mipmapBlur={false} // Enables or disables mipmap blur.
		// 		resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
		// 		resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
		// 	/>
		// </EffectComposer>
		<Effects disableGamma>
			<unrealBloomPass threshold={1.0} strength={0.4} radius={0.0} />
			{/* @ts-ignore */}
			<outputPass args={[THREE.ACESFilmicToneMapping]} />
		</Effects>
		// <EffectComposer>
		// 	<Bloom
		// 		intensity={1.0} // The bloom intensity.
		// 		blurPass={undefined} // A blur pass.
		// 		// kernelSize={KernelSize.LARGE} // blur kernel size
		// 		luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
		// 		luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
		// 		mipmapBlur={false} // Enables or disables mipmap blur.
		// 		// resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
		// 		// resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
		// 	/>
		// </EffectComposer>
	);
};
