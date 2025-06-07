import brandData from "data/brand/brandlogo";
import { SectionTitle } from "../SectionTitle/SectionTitle";

export const BrandLogo = () => {
  const brandLoges = [...brandData];
  return (
    <>
      {/* <!-- BEGIN LOGOS --> */}
      <SectionTitle
        subTitle="Aliados"
        title="¿Donde comprar?"
        body="Encuentra nuestros productos en las siguientes tiendas"
      />
      <div className="main-logos">
        {brandLoges.map((logo, index) => (
          <a key={index} href={logo.URL}>
            <img src={logo.logoSrc} className="js-img" alt="" />
          </a>
        ))}
      </div>
      {/* <!-- LOGOS EOF   --></img> */}
    </>
  );
};
