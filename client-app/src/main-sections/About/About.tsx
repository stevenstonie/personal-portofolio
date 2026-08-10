import styles from "./About.module.css"

const About: React.FC = () => {
	return <section style={{ backgroundColor: '#101010', borderRadius: '50px' }}>
		<br></br>
		<h1>About me</h1>
		<section className={styles.contents_container}>
			<p>Hello👋👋 My name is Steven and I have been programming since 2019 by starting with basic high school algorithms in C++.</p>
			<p>Going through college, I've gradually expanded my knowledge and skills in the domain.</p>
			<p>What caught my attention were subjects such as graphs, networking, algorithms and data structures just to name a few.</p>
			<p>As of 2023, I have shifted my attention towards web development, starting with Spring Boot and Angular.</p>
			<p>After getting my Bachelor's degree, I started exploring the software environment as a whole, from application architecturing, all the way to DevOps.</p>
			<p>Today, I'm still gaining consistent experience in everything related to software.</p>
		</section>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
	</section>
}

export default About