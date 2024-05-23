import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import ProductCard from "@/components/product/ProductCard";
import useSWR from "swr";
import { dbAPI, fetcher } from "@/components/aipConfig/config";
import PaginationDemo from "@/components/pagination/Pagination";

const priceRanges = [
  {
    id: "price-all",
    label: "Tất cả",
    range: [0, 100000000],
  },
  { id: "price-100-200", label: "100.000 - 200.000", range: [100000, 200000] },
  { id: "price-200-300", label: "200.000 - 300.000", range: [200000, 300000] },
  { id: "price-300-500", label: "300.000 - 500.000", range: [300000, 500000] },
  {
    id: "price-500-1000",
    label: "500.000 - 1.000.000",
    range: [500000, 1000000],
  },
];

const ProductPage = ({ type = "products" }) => {
  const [selectedPriceRange, setSelectedPriceRange] = useState([]);
  const [sortOption, setSortOption] = useState("comfortable");
  const { data, error } = useSWR(dbAPI.getdataList(type), fetcher);
  const productsData = data || [];

  // handle next page
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage, setNewsPerPage] = useState(8);
  const indexOfLastItem = currentPage * newsPerPage;
  const indexOfFirstItem = indexOfLastItem - newsPerPage;
  const currentProductsData = productsData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (selectedPriceRange.length === 0) {
      setSelectedPriceRange(priceRanges[0].range);
    }
  }, []);

  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading...</div>;

  const handlePriceRangeChange = (range) => {
    setSelectedPriceRange(range);
  };

  const handleSortChange = (value) => {
    setSortOption(value);
  };

  const filteredProducts = currentProductsData.filter((product) => {
    const [min, max] = selectedPriceRange;
    if (selectedPriceRange.length === 0) return true;
    return product.price >= min && product.price <= max;
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    switch (sortOption) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "newest":
        return new Date(b.createdAt) - new Date(a.createdAt);
      case "oldest":
        return new Date(a.createdAt) - new Date(b.createdAt);
      default:
        return 0;
    }
  });

  return (
    <div className="page-container flex flex-col justify-center items-center">
      <div className="grid grid-cols-10 gap-5 mb-10">
        <div className="grid col-start-1 col-end-3">
          <div className="">
            <div className="p-5 border-4 border-solid border-[#007033]">
              <h2 className="mb-4 mx-auto font-semibold text-lg">
                Danh mục sản phẩm
              </h2>
              <div className="flex flex-col gap-1 w-full max-h-80 text-[#333f48]">
                <span className="p-2 bg-button text-[#ffffff]">
                  Gạo trắng(gạo tẻ)
                </span>
                <span className="p-2">Gạo nếp</span>
                <span className="p-2">Gạo lứt</span>
                <span className="p-2">Gạo tấm</span>
                <span className="p-2">Gạo hữu cơ</span>
                <span className="p-2">Gạo mầm, hỗn hợp</span>
              </div>
            </div>
            <div className="mt-5 p-5">
              <h2 className="font-semibold text-lg mb-3">Lọc giá</h2>
              <div className="">
                <RadioGroup onValueChange={handlePriceRangeChange}>
                  <div className="flex flex-col gap-3">
                    {priceRanges.map(({ id, label, range }) => (
                      <div key={id} className="flex items-center space-x-2 ">
                        <RadioGroupItem
                          value={range}
                          id={id}
                          checked={selectedPriceRange === range}
                        />
                        <Label htmlFor={id}>{label}</Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        </div>
        <div className="grid col-start-3 col-end-11">
          <div className="">
            <RadioGroup value={sortOption} onValueChange={handleSortChange}>
              <div className="flex gap-4 h-9 items-center mb-5 text-[#333f48]">
                <span className="font-semibold text-text1">Sắp xếp:</span>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="price-asc" id="sort-price-asc" />
                  <Label htmlFor="sort-price-asc">Giá tăng dần</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="price-desc" id="sort-price-desc" />
                  <Label htmlFor="sort-price-desc">Giá giảm dần</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="newest" id="sort-newest" />
                  <Label htmlFor="sort-newest">Mới nhất</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="oldest" id="sort-oldest" />
                  <Label htmlFor="sort-oldest">Cũ nhất</Label>
                </div>
              </div>
            </RadioGroup>
            <div className="grid grid-cols-4 gap-5">
              {sortedProducts.length > 0 ? (
                sortedProducts.map((item) => (
                  <ProductCard key={item.id} item={item}></ProductCard>
                ))
              ) : (
                <div>No products available</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <PaginationDemo
          dataBase={sortedProducts}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        ></PaginationDemo>
      </div>
    </div>
  );
};

export default ProductPage;
