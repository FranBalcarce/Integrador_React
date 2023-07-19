import React from "react";
import { Link } from "react-router-dom";

import { FooterContainerStyled, LinksContainerStyled } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterContainerStyled>
      <LinksContainerStyled className="links">
        <Link to="/" style={{ paddingLeft: "2rem" }}>
          Términos de Uso
        </Link>
        <Link to="/" style={{ paddingLeft: "2rem" }}>
          Aviso legal
        </Link>
        <Link to="/" style={{ paddingLeft: "2rem" }}>
          Politica de privacidad
        </Link>
        <Link to="/" style={{ paddingLeft: "2rem" }}>
          Contactanos
        </Link>
      </LinksContainerStyled>
    </FooterContainerStyled>
  );
};

export default Footer;
