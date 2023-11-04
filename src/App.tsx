import "./styles/App.css"
import CounterButton from "./components/CounterButton.tsx";
import {useState} from "react";
import CounterDisplay from "./components/CounterDisplay.tsx";

function App() {
	const [counter, setCounter] = useState(0);
	const incrementCounter = () => {
		setCounter(counter + 1)
	}
	return (
		<div className={"app-container"}>
			<CounterButton onClick={incrementCounter}/>
			<CounterDisplay counter={counter}/>
		</div>
	)
}

export default App
