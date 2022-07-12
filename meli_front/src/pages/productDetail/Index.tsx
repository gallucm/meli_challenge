import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailComponent } from "../../components/detail/DetailComponent";
import { BreadCrumbComponent } from "../../components/ui/BreadCrumbComponent";
import { Loading } from "../../components/ui/Loading";
import { useApi } from "../../hooks/useApi";

export const ProductDetailPage = () => {
  const [product, setProduct] = useState(null);
  const [categories, setCategories] = useState([]);

  const { id } = useParams();

  const { response, loading } = useApi({
    method: "GET",
    url: `/items/${id}`,
    headers: {
      accept: '*/*'
    }
  });

  useEffect(() => {
    setProduct(response?.data?.item || null);
    setCategories(response?.data?.categories || []);
  }, [response, loading]);

  if (!product) {
    return <Loading/>
  }

  return (
    <>
      <BreadCrumbComponent categories={categories} />
      <DetailComponent product={product} />
    </>
  )
}
