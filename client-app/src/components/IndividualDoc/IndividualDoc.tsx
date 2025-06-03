import { useEffect, useRef, useState } from "react";
import { Doc } from "../../model/Doc";
import styles from "./IndividualDoc.module.css";

const IndividualDoc: React.FC<Doc & { alignment: "left" | "right" }> = (doc) => {
	const ref = useRef<HTMLDivElement>(null);
	const [isCentered, setIsCentered] = useState(false);

	useEffect(() => {
		handleScrollForPopup(ref, setIsCentered);
	}, []);

	const positionOfPopup =
		doc.alignment === "left" ? styles.right_aligned_popup : styles.left_aligned_popup;

	const visibilityOfPopup = isCentered
		? doc.alignment === "left"
			? styles.pop_from_right
			: styles.pop_from_left
		: styles.hidden;

	return (
		<div ref={ref} style={{ textAlign: doc.alignment, position: "relative" }}>
			<img
				className={styles.document_thumbnail}
				src={doc.thumbnail}
				alt={doc.certificationName}
			/>
			<p>{doc.issuer}</p>
			<p>{doc.certificationName}</p>
			<p>({doc.issueDate})</p>

			{/* Always in the DOM; the position class just sets left:0 or right:0.
          the visibility class toggles “hidden” (opacity 0) vs “visible_left/right” (slide-in + opacity 1). */}
			<div className={`${styles.doc_details_popup} ${positionOfPopup} ${visibilityOfPopup}`}>
				<span dangerouslySetInnerHTML={{ __html: doc.moreInfo }} />
			</div>
		</div>
	);
};

function handleScrollForPopup(ref: React.RefObject<HTMLDivElement | null>, setIsCentered: React.Dispatch<React.SetStateAction<boolean>>) {
	let ticking = false;

	const handleScroll = () => {
		if (ticking) return;
		ticking = true;

		requestAnimationFrame(() => {
			if (!ref.current) {
				ticking = false;
				return;
			}

			const rect = ref.current.getBoundingClientRect();
			const windowCenterY = window.innerWidth < 700 ? window.innerHeight / 4 : window.innerHeight / 2;

			// strictly “viewport middle between top & bottom” check
			const centeredNow = rect.top <= windowCenterY && rect.bottom >= windowCenterY;

			setIsCentered((prev) => {
				if (prev === centeredNow) return prev;
				return centeredNow;
			});

			ticking = false;
		});
	};

	window.addEventListener("scroll", handleScroll, { passive: true });
	handleScroll(); // initial check on mount
	return () => window.removeEventListener("scroll", handleScroll);
}

export default IndividualDoc;