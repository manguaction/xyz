import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
  <>
  <p>Page introuvable</p>
  <Link to="/">Retour</Link>
  </>
  );
};

export default NotFoundPage;