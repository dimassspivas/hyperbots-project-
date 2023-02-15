import React, { FC } from "react";
import {BsPlusLg} from 'react-icons/bs';

export interface IBigCardProps {
  imgUrl: string;
  price: number;
  discount: number;
  positionName: string;
}

const BigCard: FC<IBigCardProps> = ({
  imgUrl,
  price,
  discount,
  positionName,
}) => {
  const priceWithDiscount = price * (1 - discount);
  return (
    <div className="big-card">
      <div className="row">
        <div className="col p-0 big-card-img">
          <img src={imgUrl} alt="" />
          <span>{positionName}</span>
        </div>
        <div className="col p-0 big-card-price">
          <span className="discount">-{discount * 100}% </span>
          <span className="price">{priceWithDiscount}₴ </span>
          <span className="old-price">{price}₴</span>
          <a href="#" className="add-product-btn">
            <BsPlusLg color="white" fontSize='12px'/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
