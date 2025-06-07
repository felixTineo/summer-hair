import Link from "next/link";

export const Banner = () => {
  return (
    <>
      {/* <!-- BEGIN MAIN BLOCK --> */}
      <div className="main-block load-bg">
        <div className="wrapper">
          <div className="main-block__content">
            <span className="saint-text">Orgánico</span>
            <h1 className="main-text">Belleza &amp; Salud</h1>
            <p
              style={{
                fontSize: "1.2rem",
              }}
            >
              Creado con el amor de la naturaleza <br />
              para cuidar tu cabello.
            </p>

            <Link href="/#">
              <a className="btn">Comprar ahora</a>
            </Link>
          </div>
        </div>
        <img
          className="main-block__decor"
          src="/assets/img/main-block-decor.png"
          alt=""
        />
      </div>
      {/* <!-- MAIN BLOCK EOF --> */}
    </>
  );
};
