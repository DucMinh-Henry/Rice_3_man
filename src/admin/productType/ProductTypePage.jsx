import TitleContent from "@/components/titleContent/TitleContent";
import { useEffect, useState } from "react";
import TableProductType from "./TableProductType";
import axios from "@/api/axios";

const ProductTypePage = ({ type = "type" }) => {
  const [productTypeData, setProductTypeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductType = async () => {
      try {
        const response = await axios.get(`http://localhost:8888/${type}`);
        setProductTypeData(response.data.Type);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProductType();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grid col-start-3 col-end-11 mt-5">
      <div className="flex flex-col gap-5">
        <TitleContent
          mainChildren={"Loại sản phẩm"}
          minorChildren={"Home / Loại sản phẩm / Danh sách loại sản phẩm"}
        />
        <TableProductType productTypeData={productTypeData} />
      </div>
    </div>
  );
};

export default ProductTypePage;
