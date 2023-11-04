import "../styles/CounterButton.css"

interface CounterButtonProps {
	onClick:() => void
}

const CounterButton = ({onClick}:CounterButtonProps) => {

	return (
		<div className={"counterButton"} onClick={onClick}>
			+1
		</div>
	);
};

export default CounterButton;
