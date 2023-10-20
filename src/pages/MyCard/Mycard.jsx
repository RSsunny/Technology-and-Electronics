import { useLoaderData } from "react-router-dom";
import MyCartList from "./MyCartList";
import { useState } from "react";

const Mycard = () => {
  const mycartproduct = useLoaderData() || [];
  const [products, setProducts] = useState(mycartproduct);
  return (
    <div className="text-black px-2 md:px-5">
      <h1 className="mt-10 text-4xl font-rancho text-center font-bold ">
        My cart{" "}
      </h1>
      <table className="table hidden md:table  max-w-6xl mx-auto px-5 border my-10 text-black">
        {/* head */}
        <thead>
          <tr className="bg-cover bg-center  ">
            <th className="">Serial</th>
            <th className="text-xs md:text-base">Brand</th>
            <th className="text-xs md:text-base">Product</th>
            <th className="text-xs md:text-base">Price</th>
            <th className="hidden md:block"></th>
          </tr>
        </thead>
        <tbody className="bg-cover bg-center ">
          {products?.map((data, index) => (
            <MyCartList
              key={data._id}
              product={data}
              totalproduct={products}
              products={setProducts}
              count={index + 1}
            ></MyCartList>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mycard;
