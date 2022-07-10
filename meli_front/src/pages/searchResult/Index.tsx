
import { SearchResultsComponent } from "../../components/results/SearchResultsComponent";

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
    <SearchResultsComponent products={dummy_data} />
  )
}
