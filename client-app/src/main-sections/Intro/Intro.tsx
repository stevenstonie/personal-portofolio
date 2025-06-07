import React from "react";
import styles from "./Intro.module.css";
import { ScrambleTexts } from "@twistezo/react-text-scramble/lib/types";
import TextScramble from "@twistezo/react-text-scramble/lib/TextScramble";

const Intro: React.FC = () => {
	const web: ScrambleTexts = [
		'Web+'
	]
	const developer: ScrambleTexts = [
		'Developer'
	]

	return (
		<section className={styles.intro_container}>
			<div className={styles.inner_container}>
				<div>
					<p>Hello, this is my</p>
				</div>
				<div className={styles.animated_text}>
					<TextScramble texts={web}
						letterSpeed={75}
						nextLetterSpeed={170}
						paused={false}
						pauseTime={15000000000}
					/>
					<div className={styles.highlighted}>
						<TextScramble texts={developer}
							letterSpeed={75}
							nextLetterSpeed={140}
							paused={false}
							pauseTime={15000000000}
						/>
					</div>
				</div>
				<div>
					<p style={{textAlign: 'right' }}>portofolio</p>
				</div>
			</div>
		</section>
	);
};

export default Intro