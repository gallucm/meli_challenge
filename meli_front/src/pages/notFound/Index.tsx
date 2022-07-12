import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/`);
}

  return (
    <div className="not-found-container">
        <h1>Parece que la página no existe</h1>
        <br/>
        <span onClick={handleRedirect}>Ir a la pagina principal</span>
    </div>
  )
}
