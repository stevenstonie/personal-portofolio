import { Doc } from "../../model/Doc";
import styles from "./IndividualDoc.module.css";

const IndividualDoc: React.FC<Doc & { alignment: "left" | "right" }> = (doc) => {
	return (
		<div style={{ textAlign: doc.alignment }}>
			<img className={styles.document_thumbnail} src={doc.thumbnail} alt={doc.certificationName} />
			<p>{doc.issuer} - {doc.certificationName} ({doc.issueDate})</p>
		</div>
	);
};

export default IndividualDoc;