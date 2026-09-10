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
			<div className={`${styles.modal_window} ${styles.slide_up}`}>
				<h1>{project.title}</h1>
				<section className={styles.project_details}>
					{project.mainDescription && (
						<div
							className={styles.short_description}
							dangerouslySetInnerHTML={{ __html: project.mainDescription }}
						/>
					)}
					{project.secondaryDescription && (
						<div
							className={styles.long_description}
							dangerouslySetInnerHTML={{ __html: project.secondaryDescription }}
						/>
					)}
				</section>
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