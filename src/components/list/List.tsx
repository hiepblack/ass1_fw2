/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React,{useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../cardProduct/Card";
import Form from "../form/Form";
import { getallproducts as action } from "../../store/action";
import { instance } from "../../api/config";

type Props = {};

const List = (props: Props) => {
  const [error, setError] = useState<null>(null);
  const dispath = useDispatch();
  const state: any = useSelector((state: any) => state);

  const [products, setproducts] = useState<any[any]>([]);

  useEffect(() => {
    (async () => {
      try {
        setproducts(await instance.get("/products"));
      } catch (error: any) {
        setError(error.message);
      }
    })();
  }, []);
  
  useEffect(() => {
    dispath(action(products));
  }, [products]);
  
  return (
    <div>
      <Form />

      <div data-aos="fade-up" data-aos-anchor-placement="center-center">
        <table>
          <thead>
            <tr className="border">
              <td className="border">id</td>
              <td className="border">name</td>
              <td className="border">price</td>
              <td className="border">action</td>
            </tr>
          </thead>
          <tbody key={1}>
            {state.todo.map((item: any) => {
              return <Card key={item.id} data={item} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
