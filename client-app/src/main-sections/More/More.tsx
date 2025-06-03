import IndividualDoc from "../../components/IndividualDoc/IndividualDoc";
import documents_list from "../../assets/data/documents_list.json";
import styles from "./More.module.css";
import { Doc } from "../../model/Doc";

const documents: Doc[] = documents_list as Doc[];
const alignments = documents.map((_, idx) => (idx % 2 === 0 ? "left" : "right"));

const More: React.FC = () => {

	return <>
		<h1>certificates and courses🎯</h1>
		<ul className={styles.documents_list_container}>
			{documents.map((doc, idx) => (
				<li className={styles.individual_document} key={doc.id}>
					<IndividualDoc {...doc} alignment={alignments[idx]} />
				</li>
			))}
		</ul>
	</>;
}

export default More;