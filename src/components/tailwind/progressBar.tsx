export const ProgressBar = (props: { percentage: string }) => {
	return (
		<div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
			<div
				className="bg-blue-600 h-2.5 rounded-full dark:bg-purple-500 w-full"
				style={{ width: props.percentage }}
			></div>
		</div>
	);
};
