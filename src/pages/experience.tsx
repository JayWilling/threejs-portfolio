import { InfoCard } from "../components/tailwind/infoCard";

export const ExperienceSection = () => {
	return (
		<div className="flex justify-start p-10 w-screen">
			<InfoCard heading="Experience" text="">
				<div className="shadow-lg rounded-md p-6">
					<div className="flex font-bold justify-between">
						<div>Junior Full Stack Developer</div>
						<div>Feb 2023 - Jul 2023</div>
					</div>
					<div className="font-bold">Avolution</div>
					<ul className="list-disc ml-8 indent-2 text-sm">
						<li>Designed and implemented new software features</li>
						<li>
							Identified and fixed functional, performance and
							visual defects
						</li>
						<li>
							Designed and developed tools to manage Internet
							Information Services (IIS)
						</li>
						<li>
							Contributed to documentation, code review and
							testing
						</li>
						<li>
							Handled the migration, upgrade and testing of
							components in React
						</li>
						<li>
							Utilised C# and VB.NET to fix defects in back-end
							functions
						</li>
					</ul>
				</div>
				<div className="shadow-lg rounded-md p-6">
					<div className="flex font-bold justify-between">
						<div>Tutor and Mentor</div>
						<div>Feb 2024 - Current</div>
					</div>
					<div className="font-bold">Art of Smart Education</div>
					<ul className="list-disc ml-8 indent-2 text-sm">
						<li>
							Tailoring lesson plans to fit the specific needs of
							students.
						</li>
						<li>
							Continued communication with students to adapt
							teaching methods to the learning styles of students.
						</li>
						<li>
							Building a strong understanding of content and the
							curriculum/syllabus.
						</li>
						<li>
							Maintaining a regular feedback loop for assessments
							and assignments to foster steady academic
							improvement.
						</li>
					</ul>
				</div>
			</InfoCard>
		</div>
		// <div className="inner left">
		// </div>
	);
};
