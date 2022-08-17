import Image from "next/image";
import * as css from "./styles";

const Footer = () => {
  const handleScrollTo = (elementId) => () => {
    document
      .getElementById(elementId)
      .scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
  };

  return (
    <div className={css.footerWrapper}>
      <div className={css.footerInfo}>
        <h3>
          Find Me on <strong>Social Media</strong>
        </h3>
        <div className={css.footerContent}>
          <a
            className={css.iconWrapper}
            href="https://id.linkedin.com/in/adek-trisno-61bb9963"
            target="_blank"
          >
            <div className={css.iconLinkedin}>
              <Image src="/images/linkedin.png" layout="fill" />
            </div>
          </a>
          <a
            className={css.iconWrapper}
            href="https://www.instagram.com/adek_tris/"
            target="_blank"
          >
            <div className={css.iconInstagram}>
              <Image src="/images/instagram.png" layout="fill" />
            </div>
          </a>
          <a
            className={css.iconWrapper}
            href="https://www.facebook.com/Nubie.Inside"
            target="_blank"
          >
            <div className={css.iconFacebook}>
              <Image src="/images/facebook.png" layout="fill" />
            </div>
          </a>
        </div>
      </div>
      <div className={css.footerNote}>
        <p>Copyright © 2022 adektris.com</p>
      </div>
    </div>
  );
};

export default Footer;
