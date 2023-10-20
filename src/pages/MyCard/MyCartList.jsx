import { RiDeleteBinLine } from "react-icons/ri";

const MyCartList = ({ totalproduct, product, count, products }) => {
  const { _id, brandName, name, price } = product || {};
  console.log(product);
  const handledelete = (_id) => {
    fetch(
      `https://technology-and-electronics-server-site.vercel.app/mycart/${_id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = totalproduct.filter((data) => data._id !== _id);
        products(remaining);
      });
  };

  return (
    <tr>
      <th className="hidden md:block text-center">{count}</th>
      <td className="border">
        <div className="flex items-center space-x-3">
          <div>
            <div className=" text-xs md:text-base ">{brandName}</div>
          </div>
        </div>
      </td>
      <td className="text-xs md:text-base  border">{name}</td>
      <td className="">${price}</td>
      <th className="hidden md:block">
        <div className="flex items-center justify-center gap-5 text-xl">
          <RiDeleteBinLine
            onClick={() => handledelete(_id)}
            className="hover:bg-[#841111] w-8 h-8 p-1 rounded-full hover:text-white cursor-pointer"
          ></RiDeleteBinLine>
        </div>
      </th>
    </tr>
  );
};

export default MyCartList;
