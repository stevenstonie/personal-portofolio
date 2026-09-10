import styles from "./Navbar.module.css"

const Navbar: React.FC = () => {
	return (
		<nav className={styles.navbar}>
			<ul className={styles.list}>
				<li><a href="#home">Home</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#projects">Projects</a></li>
				<li><a href="#more">More</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		</nav>
	)
}

export default Navbar