import IndividualDoc from "../../components/IndividualDoc/IndividualDoc";
import documents_list from "../../assets/data/documents_list.json";
import { Doc } from "../../model/Doc";

const documents: Doc[] = documents_list as Doc[];

const More: React.FC = () => {
	return <section>
		<h1>certificates and courses🎯</h1>
		{documents.map(doc => (
			<IndividualDoc key={doc.id} {...doc} />
		))}
	</section>;
}

export default More;