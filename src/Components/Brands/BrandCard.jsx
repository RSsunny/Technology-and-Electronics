import { useNavigate } from "react-router-dom";

const BrandCard = ({ brand }) => {
  const { id, brand_name, image } = brand;

  const navigate = useNavigate();
  //   const handlebrand = (brandname) => {
  //     console.log(brandname);
  //   };
  return (
    <div onClick={() => navigate(brand_name)}>
      <div className="h-[200px] w-full">
        <img className="h-full w-full" src={image} alt="" />
      </div>
      <h1 className="text-3xl  font-rancho">{brand_name}</h1>
    </div>
  );
};

export default BrandCard;
