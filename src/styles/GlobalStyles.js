import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


  html{
    scroll-behavior: smooth;
  }

    body {
    margin: 0;
    padding: 0;
    display: flex;
    background-image: url(https://tokensur.com/img/fondo%20wlp.jpg);
    font-family: 'Montserrat', sans-serif;
    color: white;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
    }

    a {
    text-decoration: none;
    }

    a:visited {
    color: white;
    }

    li {
    list-style: none;
    }


`;
