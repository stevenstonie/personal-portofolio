import { Doc } from "../../model/Doc";


const IndividualDoc: React.FC<Doc> = (doc) => {
	return (
			<div>
				{doc.issuer} - {doc.certificationName} ({doc.issueDate})
			</div>
	);
};

export default IndividualDoc;