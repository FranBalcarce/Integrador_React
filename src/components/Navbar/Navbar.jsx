import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import { FaUserAlt } from "react-icons/fa";
import { HiHome } from "react-icons/hi";

import ModalCart from "./ModalCart/ModalCart";
import ModalUser from "./ModalUser/ModalUser";
import CartIcon from "./CartIcon/CartIcon";

import {
  CartNavStyled,
  LinkContainerStyled,
  LinksContainerStyled,
  NavbarContainerStyled,
  UserNavStyled,
  UserContainerStyled,
  SpanStyled,
} from "./NavbarStyles";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenuHidden } from "../../redux/user/userSlice";

function Navbar() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <NavbarContainerStyled>
      <ModalCart />
      <ModalUser />
      <div>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dal1tbyhp/image/upload/v1689532445/Logo3_copia_tftgjx.png"
            alt="Logo"
          />
        </Link>
      </div>
      <LinksContainerStyled>
        <motion.div whileTap={{ scale: 0.97 }}>
          <Link to="/">
            <LinkContainerStyled home>
              <HiHome />
            </LinkContainerStyled>
            Home
          </Link>
        </motion.div>

        <UserNavStyled>
          <UserContainerStyled
            onClick={() =>
              currentUser ? dispatch(toggleMenuHidden()) : navigate("/login")
            }
          >
            <FaUserAlt />{" "}
            <SpanStyled>
              {currentUser ? `${currentUser.nombre}` : "Iniciá sesion"}
            </SpanStyled>
          </UserContainerStyled>
        </UserNavStyled>

        <CartNavStyled>
          <CartIcon />
        </CartNavStyled>
      </LinksContainerStyled>
    </NavbarContainerStyled>
  );
}

export default Navbar;
