import { useNavigate } from "react-router-dom";
import { Util } from "../../helpers/Util"

export const ProductResultComponent = ({ product }: any) => {
    const { id } = product;

    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate(`/items/${id}`);
    }

    return (
        <div className="search-result-container__product">
            <img src={product.picture} alt="" onClick={handleRedirect}/>
            <div className="search-result-container__product__info">
                <h2> $ {Util.formatPrice(product.price.amount)}</h2>
                <p onClick={handleRedirect}>{product.title}</p>
            </div>
            <div className="search-result-container__product__location">
                <p>{product.location}</p>
            </div>
        </div>
    )
}
