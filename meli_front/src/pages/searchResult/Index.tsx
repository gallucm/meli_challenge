
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchResultsComponent } from "../../components/result/SearchResultsComponent";
import { BreadCrumbComponent } from "../../components/ui/BreadCrumbComponent";
import { Loading } from "../../components/ui/Loading";
import { useApi } from "../../hooks/useApi";

export const SearchResultPage = ({onSearch}: any) => {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

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
    setCategories(response?.data?.categories || []);
  }, [response]);

  if (loading) {
    return <Loading/>
  }

  return (
    <>
      <BreadCrumbComponent categories={categories}/>
      <SearchResultsComponent products={products} />
    </>
  )
}
