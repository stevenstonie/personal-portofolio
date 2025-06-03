import { Project } from "../../model/Project";
import styles from "./ProjectTile.module.css"

interface ProjectTileProps {
	project: Project;
	onClick: () => void;
}

const ProjectTile: React.FC<ProjectTileProps> = ({ project, onClick }) => (
	<div
		className={styles.project_tile}
		onClick={onClick}
	>
		<img
			src={project.thumbnail ? project.thumbnail : "./assets/images/projects/default-thumbnail.png"}
			alt={project.title}
			className={styles.thumbnail_img}
		/>
		<div className={styles.overlay}>
			<h2 style={{ fontFamily: "Alsina, monospace, cursive", fontSize: "2rem", letterSpacing: "0.1rem" }}>{project.title}</h2>
		</div>
	</div>
);

export default ProjectTile;