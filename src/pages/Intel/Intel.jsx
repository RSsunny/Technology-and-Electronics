import { useLoaderData } from "react-router-dom";

import IntelSlider from "../../Components/Silder/IntelSlider";
import IntelCard from "./IntelCard";

const Intel = () => {
  const googledata = useLoaderData();

  return (
    <div>
      <IntelSlider></IntelSlider>

      <div className="grid grid-cols-2 gap-20 max-w-7xl mx-auto px-5 lg:px-0">
        {googledata?.map((data, idx) => (
          <IntelCard key={idx} categori={data}></IntelCard>
        ))}
      </div>
    </div>
  );
};

export default Intel;
