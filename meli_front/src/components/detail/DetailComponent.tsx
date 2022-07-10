import { Util } from "../../helpers/Util"

export const DetailComponent = ({ product }: any) => {
  return (
    <div className="product">
      <div className="product__content">
        <div className="product__content__image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product__content__info">
          <div className="product__content__info__quantity">
            {product.status} - {product.quantity} vendidos
          </div>
          <div className="product__content__info__name">
            {product.name}
          </div>
          <div className="product__content__info__price">
            $ {Util.formatPrice(product.price)}
          </div>
          <button className="product__content__info__btn_comprar">
            Comprar
          </button>
        </div>
      </div>
      <div className="product__description">
        <div className="product__description__title">
          Descripción del producto
        </div>
        <div className="product__description__text">
          {product.description}
        </div>
      </div>
    </div>
  )
}
