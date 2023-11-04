import "../styles/CounterDisplay.css"

interface CounterDisplayProps {
	counter:number;
}

const CounterDisplay = ({counter}:CounterDisplayProps) => {
	return (
		<div className={"counterDisplay"}>
			Counter: {counter}
		</div>
	);
};

export default CounterDisplay;
