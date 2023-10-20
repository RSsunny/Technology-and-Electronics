import { useLoaderData } from "react-router-dom";

import SonySlider from "../../Components/Silder/SonySlider";
import SonyCard from "./SonyCard";

const Sony = () => {
  const sonydata = useLoaderData();

  return (
    <div>
      <SonySlider></SonySlider>
      <div className="grid grid-cols-2 gap-20 max-w-7xl mx-auto px-5 lg:px-0">
        {sonydata?.map((data, idx) => (
          <SonyCard key={idx} categori={data}></SonyCard>
        ))}
      </div>
    </div>
  );
};

export default Sony;
