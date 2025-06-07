import { PromoVideo } from "components/shared/PromoVideo/PromoVideo";
import { useState } from "react";
import Link from "next/link";

export const Info = () => {
  const [play, setPlay] = useState(false);
  const url = play
    ? "https://www.youtube.com/embed/K1yp7Q1hH1c?autoplay=1"
    : "";
  return (
    <>
      {/* <!-- BEGIN INFO BLOCKS --> */}
      <div className="info-blocks">
        <div
          className="info-blocks__item js-img"
          style={{ backgroundImage: `url('/assets/img/info-item-bg1.jpg')` }}
        >
          <div className="wrapper">
            <div className="info-blocks__item-img">
              <img src="/assets/img/p5.jpg" className="js-img" alt="" />
            </div>
            <div className="info-blocks__item-text">
              <span className="saint-text">Frescura</span>
              <h2>Verano todo el año</h2>
              <span className="info-blocks__item-descr">
                Siente la frescura tropical en cada lavado. Aroma suave, textura
                cremosa y brillo natural para todo tipo de cabello.
              </span>
              <p>Disfruta un cabello ligero, sano y lleno de vida.</p>
              <Link href="/shop">
                <a className="btn">Contactanos</a>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="info-blocks__item info-blocks__item-reverse js-img"
          // style={{ backgroundImage: `url('/assets/img/info-item-bg2.jpg')` }}
        >
          <div className="wrapper">
            <div className="info-blocks__item-img">
              <PromoVideo
                //videoUrl={url}
                play={play}
                onVideoPlay={() => setPlay(true)}
                image="/assets/img/info-item-img2.jpg"
              />
            </div>
            <div className="info-blocks__item-text">
              <span className="saint-text">Nosotros</span>
              <h2>Quienes somos</h2>
              <span className="info-blocks__item-descr">
                Summer Hair es una marca comprometida con el cuidado natural del
                cabello.
              </span>
              <p>
                Nuestra fórmula a base de coco está diseñada para ofrecer una
                experiencia refrescante, saludable y libre de químicos
                agresivos. Creemos en la belleza consciente, en el poder de los
                ingredientes naturales y en la importancia de cuidar tanto el
                cabello como el medio ambiente. Cada producto refleja nuestro
                compromiso con la calidad, la frescura y el bienestar, para que
                tu cabello se sienta tan bien como luce.
              </p>
              <Link href="/about">
                <a className="info-blocks__item-link">
                  <i className="icon-video"></i>
                  Mira nuestro video
                  <i className="icon-arrow-lg"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- INFO BLOCKS EOF   --> */}
    </>
  );
};
