import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <h1 className="font-medium">Not found</h1>
      <p className="muted">
        Nothing lives here. <Link to="/" className="link">Go home</Link>.
      </p>
    </>
  );
};
