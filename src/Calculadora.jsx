import React, { useState } from "react";
import { Button, InputGroup, Form, Container, Row, Col } from "react-bootstrap";
const Calculadora = () => {
	const [input, setInput] = useState("");
	function cambioInput(val) {
		setInput(input + val);
	}
	function igual() {
		const result = eval(input);
		setInput(result);
	}
	function limpiar() {
		setInput("");
	}
	return (
		<>
			<InputGroup className="mb-3">
				<InputGroup.Text id="basic-addon1">Resultado</InputGroup.Text>
				<Form.Control
					placeholder="0"
					value={input}
                    readOnly
					aria-label="Resultado"
					aria-describedby="basic-addon1"
				/>
			</InputGroup>
			<Container fluid="md">
				<Row>
					<Col>
						<Button
							className="tamano"
							variant="primary"
							onClick={() => cambioInput("1")}
						>
              1
						</Button>
						<Button
							className="tamano"
							variant="primary"
							onClick={() => cambioInput("2")}
						>
              2
						</Button>
						<Button
							className="tamano"
							variant="primary"
							onClick={() => cambioInput("3")}
						>
              3
						</Button>

						<Button
							className="tamano"
							variant="secondary"
							onClick={() => cambioInput("+")}
						>
              +
						</Button>
					</Col>
				</Row>
				<Row>
					<Col>
						<Button
							className="tamano"
							variant="primary"
							onClick={() => cambioInput("4")}
						>
              4
						</Button>
						<Button
							className="tamano"
							variant="primary"
							onClick={() => cambioInput("5")}
						>
              5
						</Button>
						<Button
							className="tamano"
							variant="primary"
							onClick={() => cambioInput("6")}
						>
              6
						</Button>
						<Button
							className="tamano"
							variant="secondary"
							onClick={() => cambioInput("-")}
						>
              -
						</Button>
					</Col>
				</Row>
				<Row>
					<Col>
						<Button
							className="tamano"
							variant="primary"
							onClick={() => cambioInput("7")}
						>
              7
						</Button>
						<Button
							className="tamano"
							variant="primary"
							onClick={() => cambioInput("8")}
						>
              8
						</Button>
						<Button
							className="tamano"
							variant="primary"
							onClick={() => cambioInput("9")}
						>
              9
						</Button>

						<Button
							className="tamano"
							variant="secondary"
							onClick={() => cambioInput("/")}
						>
              /
						</Button>
					</Col>
				</Row>
				<Row>
					<Col>
						<Button
							className="tamano"
							variant="primary"
							onClick={() => cambioInput("0")}
						>
              0
						</Button>
						<Button
							className="tamano"
							variant="secondary"
							onClick={() => cambioInput("*")}
						>
              *
						</Button>
						<Button className="tamano" variant="danger" onClick={igual}>
              =
						</Button>
						<Button className="tamano" variant="danger" onClick={limpiar}>
              C
						</Button>
					</Col>
				</Row>
			</Container>
		</>
	);
};
export default Calculadora;
