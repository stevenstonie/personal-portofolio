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
			backgroundImage: `url(${project.thumbnail})`
		}}
	>
		<div className={styles.overlay}>
			<h2>{project.title}</h2>
		</div>
	</button>
);

export default ProjectTile