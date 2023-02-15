import React, { FC } from "react";
import {AiOutlinePlus} from "@react-icons/all-files/ai/AiOutlinePlus";

export interface ICardProps {
  imgUrl: string;
  price: number;
  positionName: string;
}

const Card: FC<ICardProps> = ({ imgUrl, price, positionName }) => {
  return (
    <div className="card">
      <img src={imgUrl} alt="" />
      <div className="card-bottom">
        <div className="card-desc">
          <span>{price}₴</span>
          <span>{positionName}</span>
        </div>
        <a href="#" className="add-product-btn"><AiOutlinePlus color="white" style={{backgroundColor:'#c51636', borderRadius: '50%'}} size='25px'/></a>
      </div>
    </div>
  );
};

export default Card;
