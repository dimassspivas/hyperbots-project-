import React, { FC } from "react";

export interface IFooterProps {}

const Footer: FC<IFooterProps> = () => {
  return (
    <footer className="footer">
      <div className="row align-items-center">
        <div className="col">
          <img className="footer-img" src="/img/home.png" alt="" />
        </div>
        <a href="" className="col">
          <img className="footer-img" src="img/list.png" alt="" />
        </a>
        <div className="col">
          <img  className="footer-img" src="/img/search-footer.png" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
