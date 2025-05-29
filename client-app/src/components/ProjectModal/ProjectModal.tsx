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
				<h1>{project.title}</h1>
				<p>{project.description ? project.description : "No description available."}</p>
				<ul className={styles.image_list}>
					{project.images?.map((img) => (
						<li key={img}>
							<a href={img} target="_blank" rel="noopener noreferrer">
								<img src={img} alt="Project image" />
							</a>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default ProjectModal;