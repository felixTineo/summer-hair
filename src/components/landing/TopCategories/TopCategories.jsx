import { Categories } from "components/Category/Categories/Categories";
import { SectionTitle } from "components/shared/SectionTitle/SectionTitle";
import categoriesData from "data/category/category";

export const TopCategories = () => {
  const categories = [...categoriesData].slice(0, 3);
  return (
    <>
      {/* <!-- BEGIN TOP CATEGORIES --> */}
      <section className="top-categories">
        <SectionTitle
          subTitle="Nuestra linea de productos"
          title="¿Que estás buscando?"
          body="Explora nuestras lineas de productos más populares y encuentra lo que necesitas."
        />
        <div className="top-categories__items">
          {<Categories categories={categories} />}
        </div>
      </section>
      {/* <!-- TOP CATEGORIES EOF   --> */}
    </>
  );
};
