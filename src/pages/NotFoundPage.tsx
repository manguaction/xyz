import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

function NotFoundPage() {

  useDocumentTitle(" Page introuvable")

  return (
  <>
  <p>Page introuvable</p>
  <Link to="/">Retour</Link>
  </>
  );
};

export default NotFoundPage;