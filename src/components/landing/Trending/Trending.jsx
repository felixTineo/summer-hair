import { ProductsCarousel } from "components/Product/Products/ProductsCarousel";
import { SectionTitle } from "components/shared/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import productData from "data/product/product";

export const Trending = () => {
  const trendingProducts = [...productData];
  const [products, setProducts] = useState(trendingProducts);
  const [filterItem, setFilterItem] = useState("makeup");

  useEffect(() => {
    const newItems = trendingProducts.filter((pd) =>
      pd.filterItems.includes(filterItem)
    );
    setProducts(newItems);
  }, [filterItem]);

  const filterList = [
    {
      name: "Make Up",
      value: "makeup",
    },
    {
      name: "SPA",
      value: "spa",
    },
    {
      name: "Perfume",
      value: "perfume",
    },
    {
      name: "Nails",
      value: "nail",
    },
    {
      name: "Skin care",
      value: "skin",
    },
    {
      name: "Hair care",
      value: "hair",
    },
  ];
  return (
    <>
      {/* <!-- BEGIN TRENDING --> */}
      <section className="trending">
        <div className="trending-content">
          <SectionTitle
            subTitle="Productos"
            title="En tendencia"
            body="Cuida tu cuero cabelludo con nuestros productos de belleza orgánicos y de alta calidad. "
          />
          <div className="tab-wrap trending-tabs">
            <div className="products-items">
              <ProductsCarousel products={products} />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- TRENDING EOF   --> */}
    </>
  );
};
