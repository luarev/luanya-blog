import { Link } from "react-router-dom/cjs/react-router-dom.min";

const handleClick = () => {
  <Link to="/">Back to Homepage.</Link>;
};

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Error 404</h2>
      <p>Page not found.</p>
      <button onClick={handleClick}>
        <Link to="/">Back to Homepage.</Link>
      </button>
    </div>
  );
};

export default NotFound;
