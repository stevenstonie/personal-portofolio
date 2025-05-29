import styles from "./About.module.css"

const About: React.FC = () => {
	return <section>
		<h1>About me</h1>
		<section className={styles.contents_container}>
			<p>My name is Stephen and I have been programming since 2019 by starting with basic high school algorithms in C++.</p>
			<p>Going through college, I've gradually expanded my knowledge and skills in the domain.</p>
			<p>What caught my attention were subjects such as graphs, networking, algorithms and data structures just to name a few.</p>
			<p>As of 2023, I have shifted my attention towards web development, taka taka taka.</p>
		</section>
	</section>
}

export default About