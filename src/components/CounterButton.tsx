import "../styles/CounterButton.css"
import {useState} from "react";

const CounterButton = () => {
	const [counter, setCounter] = useState(0);

	return (
		<div className={"counterButton"} onClick={() => setCounter(counter + 1)}>
			{counter}
		</div>
	);
};

export default CounterButton;
