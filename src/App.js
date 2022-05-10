import "./App.css";
import Create from "./components/create";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./components/read";
import Update from "./components/update";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Create />}></Route>
				<Route exact path="/read" element={<Read />}></Route>
				<Route exact path="/update" element={<Update />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
