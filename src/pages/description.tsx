import { Section } from "../components/threejs/Section";

export const DescriptionSection = () => {
	return (
		<>
			<div className="inner left">
				<h1>Who Am I</h1>
				<div>This is the inner div</div>
			</div>
			<div className="inner right">
				<h1>Hobbies</h1>
				<span>These are the hobbies</span>
			</div>
		</>
	);
};
