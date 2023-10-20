import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../../Hooks/useAuth";
const AppleCard = ({ categori }) => {
  const { _id, brandName, driscription, name, price, rating, photo } = categori;
  const { user } = useAuth();
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 border p-3">
      <div className=" md:h-[200px] md:w-[300px] lg:w-[400px]">
        <img className="h-full w-full" src={photo} alt="" />
      </div>
      <div>
        <h1>{name}</h1>
        <p>Price : ${price}</p>
        <p>Brand: {brandName}</p>
        <p>{driscription}</p>
        <div className="flex items-center gap-2">
          <p>{rating}</p>
          <AiFillStar></AiFillStar>
        </div>
        <div className="flex items-center gap-5 lg:gap-10 mt-2">
          <Link
            to={`/appleproduct/${_id}`}
            state={`/appleproduct/${_id}`}
            className="px-2 lg:px-4  lg:py-1 border rounded-full border-[#FF4512] hover:bg-[#FF4512] duration-700 ease-linear"
          >
            Details
          </Link>
          <Link
            to={`/update/${_id}`}
            state={user ? `${brandName}` : `/update/${_id}`}
            className="px-2 lg:px-4  lg:py-1 border rounded-full border-[#FF4512] hover:bg-[#FF4512] duration-700 ease-linear"
          >
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppleCard;

AppleCard.propTypes = {
  categori: PropTypes.object.isRequired,
};
