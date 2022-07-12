import { LineSeparatorComponent } from "../ui/LineSeparatorComponent"
import { ProductResultComponent } from "./ProductResultComponent"

export const SearchResultsComponent = ({ products }: any) => {

    return (
        <div className="search-result-container" >
            {
                products.map((product: any, idx: any) => (
                    <>
                        <ProductResultComponent key={idx} product={product} />
                        <LineSeparatorComponent />
                    </>
                ))
            }
        </div>
    )
}
