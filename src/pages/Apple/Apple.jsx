import { useLoaderData } from "react-router-dom";
import AppleCard from "./AppleCard";
import AppleSlider from "../../Components/Silder/AppleSlider";

const Apple = () => {
  const appledata = useLoaderData();

  return (
    <div>
      <AppleSlider></AppleSlider>
      <div className="grid grid-cols-2 gap-20 max-w-7xl mx-auto px-5 lg:px-0">
        {appledata?.map((data, idx) => (
          <AppleCard key={idx} categori={data}></AppleCard>
        ))}
      </div>
    </div>
  );
};

export default Apple;
