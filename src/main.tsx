import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Preloader from "./components/Preloader";
import React, { useEffect, useState } from "react";

const Root = () => {
	const [showPreloader, setShowPreloader] = useState(true);
	useEffect(() => {
		// Check if current path is registry page - disable preloader if true
		const isRegistryPage = window.location.pathname.includes('/registry');
		if (isRegistryPage) {
			setShowPreloader(false);
			return;
		}

		let loadFired = false;
		let minMsPassed = false;

		const onLoad = () => {
			loadFired = true;
			if (minMsPassed) setShowPreloader(false);
		};

		const timer = setTimeout(() => {
			minMsPassed = true;
			if (loadFired) setShowPreloader(false);
		}, 6000); // minimum 6 seconds

		if (document.readyState === "complete") {
			loadFired = true;
		} else {
			window.addEventListener("load", onLoad);
		}

		// if both already satisfied
		if (loadFired && minMsPassed) setShowPreloader(false);

		return () => {
			clearTimeout(timer);
			window.removeEventListener("load", onLoad);
		};
	}, []);

	return (
		<>
			{showPreloader && <Preloader />}
			<App />
		</>
	);
};

createRoot(document.getElementById("root")!).render(<Root />);
