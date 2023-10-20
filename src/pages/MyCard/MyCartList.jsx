import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
const MyCartList = ({ totalproduct, product, count, products }) => {
  const { _id, brandName, name, price } = product || {};

  const handledelete = (_id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "If you delete this product, you have to re-add it, otherwise you won't find it!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your product has been deleted.",
            "success"
          );
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
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };

  return (
    <tr>
      <th className="text-center">{count}</th>
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
MyCartList.propTypes = {
  totalproduct: PropTypes.array.isRequired,
  product: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  products: PropTypes.func.isRequired,
};
