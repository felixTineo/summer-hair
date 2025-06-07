import Link from "next/link";

export const Discount = () => {
  return (
    <>
      {/* <!-- BEGIN DISCOUNT --> */}
      <div
        className="discount js-img"
        style={{ backgroundImage: `url('/assets/img/discount-bg.jpg')` }}
      >
        <div className="wrapper">
          <div className="discount-info">
            <span className="saint-text">Descuentos</span>
            <span className="main-text">
              Consigue un <span>50%</span> menos
            </span>
            <p>
              ¡Aprovecha nuestra oferta especial! Obtén un 50% de descuento en
              todos nuestros productos.
            </p>

            <Link href="/">
              <a className="btn">Contactanos!</a>
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- DISCOUNT EOF   --> */}
    </>
  );
};
