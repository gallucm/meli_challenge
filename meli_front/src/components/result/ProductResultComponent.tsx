import { Util } from "../../helpers/Util"

export const ProductResultComponent = ({product}: any) => {
    return (
        <div className="search-result-container__product">
            <img src={product.image} alt="" />
            <div className="search-result-container__product__info">
                <h2> $ {Util.formatPrice(product.price)}</h2>
                <p>{product.name}</p>
            </div>
            <div className="search-result-container__product__location">
                <p>{product.location}</p>
            </div>
        </div>
    )
}
