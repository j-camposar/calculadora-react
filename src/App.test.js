import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders calculadora header", () => {
	render(<App />);
	const linkElement = screen.getByText(/Calculadora React \+ Bootstrap/i);
	expect(linkElement).toBeInTheDocument();
});
