interface TestProps {
	title: string;
}

export default function Test({ title }: TestProps) {
	return <div>{title}</div>;
}
