import { InfoCard } from "../components/tailwind/infoCard";
import { ProgressBar } from "../components/tailwind/progressBar";

export const DescriptionSection = () => {
	return (
		<div className="flex justify-between p-10 w-screen">
			<InfoCard heading="Jack Willing" text="">
				<p>
					Graduate university student studying a Bachelor of Computing
					Science (Honours) at the University of Technology, Sydney
					(UTS).
					<br />
					<br />
					Growing up I had quite a physical childhood, playing
					baseball and continuing to do Karate and rock climbing into
					my adult life, teaching me discipline and allowing me to
					operate in team-oriented environments.
					<br />
					<br />
					Throughout highschool and my personal life computers played
					a more prominent role both in work and relaxation. My
					fathers work as a senior systems engineer peaked my interest
					in the field from a young age and has carried itself all the
					way through into my career.
				</p>
			</InfoCard>
			<InfoCard heading="Skillset" text="">
				<div className="">
					<div className="mb-2">Typescript, React</div>
					<ProgressBar percentage="90%" />
					<div className="mb-2">Algorithms</div>
					<ProgressBar percentage="70%" />
					<div className="mb-2">Design</div>
					<ProgressBar percentage="75%" />
					<div className="mb-2">C#, C++</div>
					<ProgressBar percentage="58%" />
					<div className="mb-2">Interaction</div>
					<ProgressBar percentage="90%" />
				</div>
			</InfoCard>
		</div>
	);
	// return (
	// 	<>
	// 		<div className="inner left">
	// 			<div className="contents">
	// 				<h1>Jack Willing</h1>
	// 				<p>

	// 				</p>
	// 			</div>
	// 		</div>
	// 		<div className="inner right">
	// 			<div className="contents">
	// 				<h1>Who Am I</h1>
	// 				<p>
	// 					{" "}
	// 					Graduate university student studying a Bachelor of
	// 					Computing Science (Honours) at the University of
	// 					Technology, Sydney (UTS).
	// 					<br />
	// 					Growing up I had quite a physical childhood, playing
	// 					baseball and continuing to do Karate and rock climbing
	// 					into my adult life, teaching me discipline and allowing
	// 					me to operate in team-oriented environments.
	// 					<br />
	// 					<br />
	// 					Throughout highschool and my personal life computers
	// 					played a more prominent role both in work and
	// 					relaxation. My fathers work as a senior systems engineer
	// 					peaked my interest in the field from a young age and has
	// 					carried itself all the way through into my career.
	// 				</p>
	// 			</div>
	// 		</div>
	// 	</>
	// );
};
