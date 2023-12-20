import { useState } from "react";
const messages = [
	"Learn React ⚛️",
	"Apply for jobs 💼",
	"Invest your new income 🤑",
];

export default function App() {
	const [step, setStep] = useState(1);
	const [open, setOpen] = useState(true);
	function handlePrevious() {
		step > 1 ? setStep(step - +1) : setStep(step);
	}
	function handleNext() {
		step < 3 ? setStep(step + 1) : setStep(step);
	}
	return (
		<div>
			<button
				className="close"
				onClick={() => {
					setOpen(!open);
				}}
			>
				x
			</button>
			{open && (
				<div className="steps">
					<div className="numbers">
						<div className={`${step >= 1 ? "active" : ""}`}>1</div>
						<div className={`${step >= 2 ? "active" : ""}`}>2</div>
						<div className={`${step >= 3 ? "active" : ""}`}>3</div>
					</div>
					<p className="message">
						{" "}
						Step {step}: {messages[step - 1]}
					</p>
					<div className="buttons">
						<button
							onClick={handlePrevious}
							style={{
								backgroundColor: "#7950f2",
								color: "#fff",
							}}
						>
							Previous
						</button>
						<button
							onClick={handleNext}
							style={{
								backgroundColor: "#7950f2",
								color: "#fff",
							}}
						>
							Next
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
