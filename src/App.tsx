import React from "react";
import "./styling/App.css";
import { LandingPage } from "./pages/landingPage";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="app">
			<header className="header">
				<span>Blah</span>
			</header>
			<div className="routeContainer">
				<Routes>
					<Route element={<LandingPage />} path="/" />
				</Routes>
			</div>
		</div>
	);
}

export default App;
