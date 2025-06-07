export const Subscribe = () => {
  return (
    <>
      {/* <!-- BEGIN SUBSCRIBE --> */}
      <div className="subscribe" style={{ marginBottom: "10rem" }}>
        <div className="wrapper">
          <div className="subscribe-form" style={{ padding: "2rem" }}>
            <div className="subscribe-form__img">
              <img
                src="/assets/img/p7.png"
                // className="js-img"
                alt=""
                width={150}
              />
            </div>
            <form>
              <h3>Siguenos</h3>
              <p>
                Suscríbete a nuestro boletín para recibir las últimas noticias,
                ofertas y consejos de cuidado del cabello. ¡Únete a nuestra
                comunidad y mantente al día con todo lo relacionado con Summer
                Hair!
              </p>
              <div className="box-field__row">
                <div className="box-field">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Ingresa tu correo electrónico"
                  />
                </div>
                <button type="submit" className="btn">
                  subscribir
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- SUBSCRIBE EOF   --> */}
    </>
  );
};
