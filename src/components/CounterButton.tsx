import "../styles/CounterButton.css"

interface CounterButtonProps {
	value: string
	onClick:(value:number) => void
}

const CounterButton = ({value, onClick}:CounterButtonProps) => {

	return (
		<div className={"counterButton"} onClick={() => {onClick(Number(value))}}>
			{value}
		</div>
	);
};

export default CounterButton;
