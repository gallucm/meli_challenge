
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchResultsComponent } from "../../components/result/SearchResultsComponent";
import { useApi } from "../../hooks/useApi";

export const SearchResultPage = ({onSearch}: any) => {

  const [products, setProducts] = useState([]);

  const [ q ] = useSearchParams();

  const { response, loading } = useApi({
    method: "GET",
    url: `/items?q=${q.get("search")}`,
    headers: {
      accept: '*/*'
    }
  });

  useEffect(() => {
    setProducts(response?.data?.items || []);
  }, [response]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SearchResultsComponent products={products} />
    </>
  )
}
