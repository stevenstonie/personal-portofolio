import { useState } from "react";
import { Project } from "../../model/Project";
import ProjectTile from "../../components/ProjectTile/ProjectTile";
import ProjectModal from "../../components/ProjectModal/ProjectModal";
import projects_list from "../../assets/data/projects_list.json";
import styles from "./Projects.module.css";


const projects: Project[] = projects_list as Project[];

const Projects: React.FC = () => {
	const [selected, setSelected] = useState<Project | null>(null);

	return (
		<section>
			<h1>Personal projects🥽</h1>
			<div className={styles.contents_container}>
				{projects.map((project) => (
					<ProjectTile key={project.id} project={project} onClick={() => setSelected(project)} />
				))}
			</div>
			<ProjectModal project={selected} onClose={() => setSelected(null)} />
		</section>
	)
}

export default Projects