import footerNavData from "data/footer/footerNav";
import paymentMethodData from "data/footer/payment";
import socialData from "data/social";
import Link from "next/link";
import { NavCol } from "./NavCol/NavCol";

export const Footer = () => {
  const footerLogo = "/assets/img/footer-logo.svg";

  const footerNav = [...footerNavData];
  const footerSocial = [...socialData];
  const paymentMethods = [...paymentMethodData];

  return (
    <>
      {/* <!-- BEGIN FOOTER --> */}
      <footer className="footer">
        <div className="wrapper">
          <div className="footer-top">
            <div className="footer-top__social">
              <span>Encuéntranos aquí:</span>
              <ul>
                {footerSocial.map((social, index) => (
                  <li key={index}>
                    <a href={social.path}>
                      <i className={social.icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-top__logo">
              <h1 style={{ color: "#fff", fontSize: 48 }}>Summer Hair</h1>
              {/* <Link href="/">
                <a>
                  <img
                    src="/assets/img/logo.png"
                    className="js-img"
                    alt=""
                    width={100}
                  />
                </a>
              </Link> */}
            </div>

            {/* Payment method */}
            <div className="footer-top__payments">
              <span>Métodos de pago aceptados:</span>
              <ul>
                {paymentMethods.map((payment, index) => (
                  <li key={index}>
                    <img src={payment.icon} className="js-img" alt="" />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-copy">
            <span>&copy; All rights reserved. Summer Hair 2025</span>
          </div>
        </div>
      </footer>
      {/* <!-- FOOTER EOF   --> */}
    </>
  );
};
