import "./styles/App.css"
import CounterButton from "./components/CounterButton.tsx";
import {useState} from "react";
import CounterDisplay from "./components/CounterDisplay.tsx";

function App() {
	const [counter, setCounter] = useState(0);
	const incrementCounter = (value:number) => {
		setCounter(counter + value)
	}
	return (
		<div className={"app-container"}>
			<CounterButton value='+10' onClick={incrementCounter}/>
			<CounterButton value='-100' onClick={incrementCounter}/>
			<CounterButton value='+25' onClick={incrementCounter}/>
			<CounterDisplay counter={counter}/>
		</div>
	)
}

export default App
