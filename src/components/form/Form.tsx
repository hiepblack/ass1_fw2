/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInput as action } from "../../store/action";
import { instance } from "../../api/config";

type Props = {};

const Form = (props: Props) => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");
  const onChangeinput = (e: any) => {
    setInputValue(e.target.value);
  };

  const onHandleSubmit = (e: any) => {
    e.preventDefault();
    const newProduct = {
      id: Math.random(),
      name: inputValue,
      price: 1000,
    };
    instance.post("/products", newProduct);
    dispatch(action(newProduct));
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <input
          className="border py-2 pr-2"
          type="text"
          onChange={onChangeinput}
          value={inputValue}
        />
        <button className="border bg-green-500">Add</button>
      </form>
    </div>
  );
};

export default Form;
