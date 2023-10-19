import { useLoaderData } from "react-router-dom";
import AppleSlider from "../../Components/Silder/AppleSlider";
import SamsungCard from "./SamsungCard";

const Samsung = () => {
  const samsungdata = useLoaderData();

  return (
    <div>
      <AppleSlider></AppleSlider>
      <div className="grid grid-cols-2 gap-20 max-w-7xl mx-auto px-5 lg:px-0">
        {samsungdata?.map((data, idx) => (
          <SamsungCard key={idx} categori={data}></SamsungCard>
        ))}
      </div>
    </div>
  );
};

export default Samsung;
