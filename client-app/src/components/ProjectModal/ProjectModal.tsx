import { Project } from "../../model/Project";
import styles from "./ProjectModal.module.css";

interface ProjectModalProps {
	project: Project | null;
	onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
	if (!project) {
		return null;
	}

	return (
		<>
			<div className={styles.modal_background} onClick={onClose}></div>
			<div className={styles.modal_window}>
				<p>{project.title}</p>
				<p>{project.description ? project.description : "No description available."}</p>
			</div>
		</>
	);
}

export default ProjectModal;