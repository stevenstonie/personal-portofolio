import { Project } from "../../model/Project";
import styles from "./ProjectTile.module.css"

interface ProjectTileProps {
	project: Project;
	onClick: () => void;
}

const ProjectTile: React.FC<ProjectTileProps> = ({ project, onClick }) => (
	<button
		type="button"
		className={styles.project_tile}
		onClick={onClick}
		style={{
			backgroundImage: `url(${project.thumbnail ? project.thumbnail : "./assets/images/projects/default-thumbnail.png"})`,
		}}
	>
		<div className={styles.overlay}>
			<h2 style={{ fontFamily: "Alsina, monospace, cursive", fontSize: "2rem", letterSpacing: "0.1rem" }}>{project.title}</h2>
		</div>
	</button>
);

export default ProjectTile