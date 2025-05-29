import { Project } from "../../model/Project";


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
			<button onClick={onClose}>X</button>
			<p>{project.title}</p>
		</>
	);
}

export default ProjectModal;