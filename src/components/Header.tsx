import React, { FC } from "react";
import "../main.css";
interface IHeaderProps {}

const Header: FC<IHeaderProps> = () => {
  return (
    <header className="row m-0 header">
      <div className="col">
        <span className="logo">hyperbots</span>
      </div>
      <div className="col d-flex justify-content-end">
        <a href="#" className="sign-in">
          <span>Sign in</span>
          <img src="/img/user.png" alt="user" />
        </a>
      </div>
    </header>
  );
};

export default Header;
