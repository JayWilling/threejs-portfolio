import { PropsWithChildren } from "react";
import { JsxElement } from "typescript";

interface CardProps extends PropsWithChildren {
	heading: string;
	text: string;
}

export const InfoCard = (props: CardProps) => {
	return (
		<div className="p-6 m-10 w-1/3 bg-gray-800 rounded-xl shadow-lg flex items-start overflow-y-auto">
			<div className="w-full">
				<h1 className="text-3xl font-bold text-white mb-5">
					{props.heading}
				</h1>
				<p className="text-slate-500 m-2">{props.text}</p>
				{props.children}
			</div>
		</div>
	);
};
