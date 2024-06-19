import React from "react";
import { Navigate, useLocation  } from "react-router-dom";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";

export default function MyRoute({ children, isClosed }) {
     const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
     const location = useLocation();

     if (isClosed && !isLoggedIn) {
          return (
               <Navigate
               to={{
                    pathname: "/redirect",
                    state: { prevPath: location.pathname }
               }}
               />
          );
     }

     const renderedChildren = typeof children === 'function' ? children() : children;

     return isLoggedIn ? renderedChildren : <Navigate to="/login" />;
}

MyRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  isClosed: PropTypes.bool,
};
