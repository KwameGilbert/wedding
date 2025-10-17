import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Preloader from "./components/Preloader";
import React, { useEffect, useState } from "react";

const Root = () => {
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		const onLoad = () => setLoaded(true);
		if (document.readyState === "complete") setLoaded(true);
		else window.addEventListener("load", onLoad);
		return () => window.removeEventListener("load", onLoad);
	}, []);

	return (
		<>
			{!loaded && <Preloader />}
			<App />
		</>
	);
};

createRoot(document.getElementById("root")!).render(<Root />);
