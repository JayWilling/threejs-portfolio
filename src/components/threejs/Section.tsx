interface SectionProps extends React.PropsWithChildren {
	opacity: number;
}

export const Section = (props: SectionProps) => {
	return (
		<section
			className={"overlaySection"}
			style={{ opacity: props.opacity }}
		>
			{props.children}
		</section>
	);
};
