import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailComponent } from "../../components/detail/DetailComponent";
import { useApi } from "../../hooks/useApi";

export const ProductDetailPage = () => {
  const [product, setProduct] = useState(null);

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
  }, [response, loading]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <DetailComponent product={product} />
    </>
  )
}
