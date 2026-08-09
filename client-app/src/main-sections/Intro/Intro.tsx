import styles from "./Intro.module.css";
import { ScrambleTexts } from "@twistezo/react-text-scramble/lib/types";
import TextScramble from "@twistezo/react-text-scramble/lib/TextScramble";
import { useEffect, useState } from "react";

const typewriterTextList = [
	{ text: "Fullstack Developer", color: "orange" },
	{ text: "Application Developer", color: "blue" },
	{ text: "Database Administrator", color: "green" },
	{ text: "Security Engineer", color: "grey" },
	{ text: "QA Engineer", color: "red" },
	{ text: "Project Manager", color: "yellow" }
];

const maxCharCount = Math.max(...typewriterTextList.map(item => item.text.length));

const Intro: React.FC = () => {
	const helloText: ScrambleTexts = [
		'Hello and welcome to my'
	]
	const portofolio: ScrambleTexts = [
		'portofolio'
	]

	const [displayText, setDisplayText] = useState('');
	const [textColor, setTextColor] = useState(typewriterTextList[0].color);

	useEffect(() => {
		let isMounted: boolean = true;

		const runCarousel = async () => {
			const waitForMs = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
			let i = 0;

			while (isMounted) {
				const currentItem = typewriterTextList[i];
				setTextColor(currentItem.color);

				for (let j = 0; j <= currentItem.text.length; j++) {
					if (!isMounted) return;
					setDisplayText(currentItem.text.substring(0, j));
					await waitForMs(100);
				}

				await waitForMs(1500);

				for (let j = currentItem.text.length; j >= 0; j--) {
					if (!isMounted) return;
					setDisplayText(currentItem.text.substring(0, j));
					await waitForMs(50);
				}

				await waitForMs(300);
				i = (i + 1) % typewriterTextList.length;
			}
		};

		runCarousel();

		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<section className={styles.intro_container}>
			<div className={styles.inner_container}>
				<div>
					<div className={styles.p_text}>
						<TextScramble
							texts={helloText}
							letterSpeed={90}
							nextLetterSpeed={80}
							paused={false}
							pauseTime={15000000000}
						/>
					</div>

					<div
						className={styles.typewriter_wrapper}
						style={{ minWidth: `${maxCharCount - 4}ch` }}
					>
						<span style={{ color: textColor }}>{displayText}</span>
						<span className={styles.input_cursor}></span>
					</div>

					<div className={styles.p_text}
						style={{ textAlign: 'right' }}>
						<TextScramble
							texts={portofolio}
							letterSpeed={90}
							nextLetterSpeed={150}
							paused={false}
							pauseTime={15000000000}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Intro