
import { LineSeparatorComponent } from "../../components/ui/LineSeparatorComponent";
import { Util } from "../../helpers/Util";

const dummy_data = [
  {
    id: 1,
    name: "Apple ipod touch 5g 16gb Negro igual a nuevo Completo Unico!",
    price: 1980,
    image: "https://picsum.photos/200/300",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    location: "Capital Federal"
  },
  {
    id: 2,
    name: "Apple ipod touch 5g 16gb",
    price: 1980,
    image: "https://picsum.photos/200/300",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    location: "Buenos Aires"
  },
  {
    id: 3,
    name: "Apple ipod touch 5g 16gb",
    price: 1980,
    image: "https://picsum.photos/200/300",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    location: "Mendoza"
  },
  {
    id: 4,
    name: "Apple ipod touch 5g 16gb",
    price: 1980,
    image: "https://picsum.photos/200/300",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    location: "Santa Fe"
  }
]

export const SearchResultPage = () => {
  return (
    <div className="search-result-container">
      {
        dummy_data.map((product, idx) => (
          <>
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
            <LineSeparatorComponent/>
          </>
        ))
      }
    </div>
  )
}
