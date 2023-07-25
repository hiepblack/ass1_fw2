import React from "react";

type Props = {
  name: any;
  product: any;
  onHandleClick: (id:any) => void;
};

const Button = ({ name, product, onHandleClick }: Props) => {
  const removeProduct = (id: any) => {
    onHandleClick(id);
  };
  return (
    <button className="" onClick={() => removeProduct(product)}>
      {name}
    </button>
  );
};

export default Button;
